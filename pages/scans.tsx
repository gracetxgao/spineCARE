import Link from 'next/link';

export default function Scans() {
    return (
        <div>
            <h1>scans page</h1>
            <p>
                <Link href="/upload">upload page</Link>
            </p>
            <p>
                <Link href="/progression">progression page</Link>
            </p>
            <p>
                <Link href="/reminders">reminders page</Link>
            </p>
        </div>
    )
}