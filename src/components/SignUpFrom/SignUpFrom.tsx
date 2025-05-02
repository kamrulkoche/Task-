'use client'
import React, { useState } from 'react'
import Picture from '../Picture/Picture'
import Link from 'next/link'
import logo1 from "../../../public/image/logo1.png"

const SignUpFrom = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            const response = await fetch('https://frontend-test.lamptechs.com/api/v1/public/user/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.message || 'Something went wrong');
            }

            setSuccess('Account created successfully!');
            setFormData({ name: '', phone: '', email: '', password: '' });
        } 
        
        catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#f0e6cc] flex items-center px-4 justify-center gap-16">
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2 p-8">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Sign Up</h2>

                {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
                {success && <p className="text-green-600 mb-4 text-center">{success}</p>}

                <div className="mb-4">
                    <label className="block text-gray-800 font-semibold mb-1">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex: John Doe"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-800 font-semibold mb-1">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-800 font-semibold mb-1">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex: Johndoe@gmail.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div className="mb-2">
                    <label className="block text-gray-800 font-semibold mb-1">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="**********"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition duration-200"
                >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="text-orange-600 font-semibold hover:underline">
                        Log in
                    </Link>
                </p>
            </form>

            <div className='hidden lg:block'>
                <Picture image={logo1} width={400} height={400} />
            </div>
        </div>
    );
}

export default SignUpFrom;
