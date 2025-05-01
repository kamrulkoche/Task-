import React from 'react'
import Picture from '../Picture/Picture'
import Link from 'next/link'
import logo1 from "../../../public/image/logo1.png"
const SignUpFrom = () => {
    return (
        <div className="min-h-screen bg-[#f0e6cc] flex items-center px-4 -mt-20 justify-center gap-16">
            <div className="w-full lg:w-1/2  p-8 ">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Sign Up</h2>


                <div className="mb-4">
                    <label className="block text-gray-800 font-semibold mb-1">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="name"
                        placeholder="Ex: John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-800 font-semibold mb-1">
                        Phone Number * <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="name"
                        placeholder="+880"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

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

                <button className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition duration-200">
                    Sign Up
                </button>


                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="text-orange-600 font-semibold hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
            <div className='hidden lg:block'>
                <Picture image={logo1} width={400} height={400} />
            </div>
        </div>
    )
}

export default SignUpFrom
