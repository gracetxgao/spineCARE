from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from open_clip import create_model_from_pretrained, get_tokenizer
import torch
from PIL import Image
import io

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

model, preprocess = create_model_from_pretrained('hf-hub:microsoft/BiomedCLIP-PubMedBERT_256-vit_base_patch16_224')
tokenizer = get_tokenizer('hf-hub:microsoft/BiomedCLIP-PubMedBERT_256-vit_base_patch16_224')
device = torch.device('cuda') if torch.cuda.is_available() else torch.device('cpu')

model.to(device)
model.eval()

template = 'this is a '
labels = ['regular back image', 'back image with scoliosis']

context_length = 256

@app.route('/predict', methods=['POST'])
def predict():
    app.logger.info("Received POST request to /predict")

    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    image = Image.open(io.BytesIO(file.read())).convert('RGB')
    image = preprocess(image).unsqueeze(0).to(device)

    texts = tokenizer([template + l for l in labels], context_length=context_length).to(device)

    with torch.no_grad():
        image_features, text_features, logit_scale = model(image, texts)
        logits = (logit_scale * image_features @ text_features.t()).detach().softmax(dim=-1)

    logits = logits.cpu().numpy()[0]
    predictions = {labels[i]: float(logits[i]) for i in range(len(labels))}
    response = make_response(jsonify(predictions))
    response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type")
    response.headers.add("Access-Control-Allow-Methods", "POST")
    return response

@app.route('/')
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)