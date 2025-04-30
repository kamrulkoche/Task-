// src/app/(protected)/layout.tsx
"use client"
import Header from '@/components/Header/Header';
import Products from '@/components/Products/Products';
import '../../styles/globals.css';
import Footer from '@/components/Footer/Footer';


export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <div className="font-poppins">

            <Header />
            <Products />
            <Footer/>

        </div>

    );
}
