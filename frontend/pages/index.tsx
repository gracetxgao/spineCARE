import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div>
        <p>
          <Link href="/about">about</Link>
        </p>
        <p>
          <Link href="/login">login</Link>
        </p>
      </div>
      <h1>SpineCARE</h1>
      <h3>AI powered companion monitoring and managing adolescent idiopathic scoliosis, guilding you towards a straighter spine</h3>
      <Image src='/logo.png' alt='logo' width={500} height={500}/>
    </div>
  );
}
