// import './globals.css'
'use client'
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}
