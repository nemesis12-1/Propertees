import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <main className="w-[100%] mx-auto font-Manrope">
                <Header />
                {/* <Toaster position="top-center" reverseOrder={false} /> */}
                <Outlet />
                {/* <Footer /> */}
            </main>
        </>
    )
}

export default Layout