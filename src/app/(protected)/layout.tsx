"use client"
import Footer from '@/components/Footer/Footer';
import Menu from '@/components/Menu/Menu';
import '../../styles/globals.css';


export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <div className="font-poppins">
            <div className="">
                <Menu />
                <div className="">{children}</div>
            </div>
            <Footer />
        </div>



    );
}
