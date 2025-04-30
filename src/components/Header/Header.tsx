import Link from "next/link"
import logo1 from "../../../public/image/logo1.png"
import logo2 from "../../../public/image/logo2.png"
import Picture from '../Picture/Picture'
import Products from "../Products/Products"


const Header = () => {
    return (
        <div className='p-4 bg-second-100'>
            <div className='flex justify-around font-normal text-base'>
                <p className='font-medium text-lg'>Shop-First</p>
                {/* <Picture image={home_logo}  /> */}
                <div className='flex gap-8'>
                    <p>Home</p>
                    <p>Products</p>
                </div>
                <div className='flex gap-6 justify-items-end text-first-100'>
                    {/* <p>Log in</p> */}
                    <Link href="/auth/register" className='flex items-center gap-1'><span>
                    </span> <p>Log in</p></Link>
                    <p>Sign up</p>
                </div>
            </div>
            <div className='lg:flex justify-around container mx-auto lg:px-24 mt-20'>
                <div className='lg:w-2/3 sm:ml-2 lg:ml-28'>
                    <div className='flex gap-2  '>
                        <Picture image={logo2} width={30} height={30} />
                        <p className='text-third-100 text-xl lg:text-base lg:font-normal -mt-2'>Available in select states</p>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-3xl lg:text-5xl xl:text-8xl font-bold uppercase'> Everything <span className='text-first-100'>You Need,</span> All in One Place  </h2>
                    </div>
                    <button className='text-white bg-first-100 text-sm font-normal p-2.5 px-4 rounded-3xl mt-4'>Shop Now</button>
                </div>

                <div className='lg:w-1/3 grid justify-center justify-items-center lg:justify-items-end'>
                    <Picture image={logo1} width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default Header
