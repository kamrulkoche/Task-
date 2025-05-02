'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import logo1 from "../../../public/image/logo1.png";
import Picture from '../Picture/Picture';

const LoginFrom = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('https://frontend-test.lamptechs.com/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok || !data.access_token) {
                throw new Error(data.message || 'Login failed');
            }

            // You can also store access_token if needed
            localStorage.setItem('access_token', data.access_token);
            router.push('/productsPage');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f0e6cc] flex items-center px-4 -mt-20 justify-center gap-16">
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2  p-8">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Log In</h2>

                {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

                <div className="mb-4">
                    <label className="block text-gray-800 font-semibold mb-1">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="**********"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div className="text-right mb-6">
                    <Link href="/forgot-password" className="text-sm text-orange-600 hover:underline">
                        Forget Password
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition duration-200"
                >
                    {loading ? 'Logging in...' : 'Log In'}
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{' '}
                    <Link href="/auth/signUp" className="text-orange-600 font-semibold hover:underline">
                        Sign up
                    </Link>
                </p>
            </form>

            <div className="hidden lg:block">
                <Picture image={logo1} width={400} height={400} />
            </div>
        </div>
    );
};

export default LoginFrom;
