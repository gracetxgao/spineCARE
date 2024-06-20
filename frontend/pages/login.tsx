import Link from 'next/link';
import { Input, Button } from '@chakra-ui/react'

export default function Login() {
    return (
        <div>
            <h1>Log in</h1>
            <Input placeholder='Username' />
            <Input placeholder='Password' />
            <Link href="/scans">
                <Button colorScheme='blue'>Log in</Button>
            </Link>
        </div>
    )
}