import Link from 'next/link';

export default function Progression() {
    return (
        <div>
            <h1>progression page</h1>
            <p>
                <Link href="/scans">scans page</Link>
            </p>
            <p>
                <Link href="/reminders">reminders page</Link>
            </p>
        </div>
    )
}