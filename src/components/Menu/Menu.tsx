import Link from 'next/link'
import React from 'react'

const Menu = () => {
    return (
        <div className=' py-4 bg-second-100'>
            <div className='flex justify-around font-normal text-base'>
                <p className='font-medium text-lg'>Shop-First</p>
                {/* <Picture image={home_logo}  /> */}
                <div className='flex gap-8'>
                    <Link href="/" className='flex items-center gap-1'><span>
                    </span> <p>Home</p></Link>
                    <p>Products</p>
                </div>
                <div className='flex gap-6 justify-items-end text-first-100'>
                    <Link href="/auth/login" className='flex items-center gap-1'><span>
                    </span> <p>Log in</p></Link>
                    <Link href="/auth/signUp" className='flex items-center gap-1'><span>
                    </span> <p>Sign up</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Menu
