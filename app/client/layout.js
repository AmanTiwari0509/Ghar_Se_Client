import React from 'react'
import Footer from "@/app/components/client-components/Footer"
import Header from "@/app/components/client-components/Header"
export default function ClientLayout ({children})  {
 return (
    <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
 )
}