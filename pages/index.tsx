import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>landing page</h1>
      <p>
        <Link href="/about">about page</Link>
      </p>
      <p>
        <Link href="/login">login page</Link>
      </p>
    </div>
  );
}
