import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h1>about page</h1>
            <p>
                <Link href="/login">login page</Link>
            </p>
        </div>
    )
}