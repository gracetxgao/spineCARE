import Link from 'next/link';
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <div>
                <p>
                    <Link href="/login">login page</Link>
                </p>
            </div>
            <h1>SpineCARE</h1>
            <h3>A tool designed to support individuals on their journey with adolescent idiopathic scoliosis, utilizing artificial intelligence to monitor spinal curvature.</h3>
            <p>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.</p>
            <Image src='/logo.png' alt='logo' width={500} height={500}/>
        </div>
    )
}