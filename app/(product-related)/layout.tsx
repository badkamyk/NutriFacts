// import './globals.css'
import Nav from "../../components/Nav";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
      //   // <html lang="en">
      //   {/*
      //   <head /> will contain the components returned by the nearest parent
      //   head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      // */}
      //   {/*<head />*/}
        <>
            <Nav />
            {children}
        </>

        // </html>
    )
}
