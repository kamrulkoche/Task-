import Link from 'next/link'
import React from 'react'
import logo1 from "../../../public/image/logo1.png"
import Picture from '../Picture/Picture'
const LoginFrom = () => {
    return (

        <div className="min-h-screen bg-[#f0e6cc] flex items-center px-4 -mt-20 justify-center gap-16">
            <div className="w-full lg:w-1/2  p-8 ">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Log In</h2>


                <div className="mb-4">
                    <label className="block text-gray-800 font-semibold mb-1">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Ex: Johndoe@gmail.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>


                <div className="mb-2">
                    <label className="block text-gray-800 font-semibold mb-1">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        placeholder="**********"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>


                <div className="text-right mb-6">
                    <Link href="/forgot-password" className="text-sm text-orange-600 hover:underline">
                        Forget Password
                    </Link>
                </div>


                <Link href="/productsPage">
                    <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition duration-200">
                        Log In
                    </button>

                </Link>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{' '}
                    <Link href="/auth/signup" className="text-orange-600 font-semibold hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
            <div className='hidden lg:block'>
                <Picture image={logo1} width={400} height={400} />
            </div>
        </div>


    )
}

export default LoginFrom
