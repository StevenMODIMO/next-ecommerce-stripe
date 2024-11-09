import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'My Cart',
    description: 'User shopping cart.'
}

export default function Cart() {
    return (
        <main>
            <header>
                <p>Cart page</p>
            </header>
        </main>
    )
}