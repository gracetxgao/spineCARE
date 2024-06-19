import Link from 'next/link';

export default function Login() {
    return (
        <div>
            <h1>login page</h1>
            <p>
                <Link href="/signup">signup page</Link>
            </p>
            <p>
                <Link href="/progression">progression page</Link>
            </p>
        </div>
    )
}