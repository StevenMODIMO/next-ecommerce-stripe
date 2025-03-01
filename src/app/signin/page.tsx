import type { Metadata } from "next"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
    title: 'Log In',
    description: 'Log in to continue for existing users'
}

export default function Cart() {
    return (
        <main>
            <header>
                <p>Login page</p>
            </header>
            <Footer />
        </main>
    )
}