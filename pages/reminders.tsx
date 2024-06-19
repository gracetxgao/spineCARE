import Link from 'next/link';

export default function Reminders() {
    return (
        <div>
            <h1>reminders page</h1>
            <p>
                <Link href="/scans">scans page</Link>
            </p>
            <p>
                <Link href="/progression">progression page</Link>
            </p>
        </div>
    )
}