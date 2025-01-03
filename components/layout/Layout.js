import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../common/Navbar";
const Footer = dynamic(() => import("../common/Footer"))

export default function Layout({title, description = "", children, showNavbar = true, showFooter = true}){
    return(
        <>
            <Head>
                <title key={"site-title"}>{title}</title>
                <meta key={"site-desc"} name="description" content={description}/>

                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
            </Head>
            {showNavbar && <Navbar/>}
            <main className={`container mx-auto ${showNavbar && "pt-20 lg:pt-18"}`}>
                {children}
            </main>
            {showFooter && <Footer/>}
        </>
    )
}