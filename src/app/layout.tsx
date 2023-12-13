"use client";
import "./globals.css";
import "./backgrounds.css";
import "./buttons.css";
import "./animations.css";
import "./responsive.css";
import '@fortawesome/fontawesome-svg-core/styles.css'
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Script from 'next/script'
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-SX2C2CYXJV" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-SX2C2CYXJV');
        `}
      </Script>
      <body className='body'>
        <ToastContainer />
        <Navbar />
        <div className='main'>
          {children}
        </div>
        <Footer />
      </body>

    </html>
  );
}
