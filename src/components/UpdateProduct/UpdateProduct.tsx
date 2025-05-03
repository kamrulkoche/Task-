'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import backIcon from "../../../public/image/back icon.png";
import Icon_body from "../../../public/image/Icon_body.png";
import exit from "../../../public/image/image 17.png";
import Picture from '../Picture/Picture';
import SideBar from '../SideBar/SideBar';

const UpdateProduct = () => {
    const router = useRouter();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        product_name: '',
        product_price: '',
        product_details: ''
    });


    useEffect(() => {
        const fetchProduct = async () => {
            const token = localStorage.getItem('access_token');
            console.log("Token:", token);

            const res = await fetch('https://frontend-test.lamptechs.com/api/v1/user/product/list', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            const product = data.data?.find((item: any) => item.id === Number(id));
            if (product) {
                setFormData({
                    product_name: product.product_name,
                    product_price: String(product.product_price),
                    product_details: product.product_details
                });
            }
        };

        if (id) fetchProduct();
    }, [id]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('access_token');
        console.log("Submitting update with token:", token);

        const bodyData = {
            id: Number(id),
            ...formData,
            product_price: Number(formData.product_price)
        };

        console.log("Sending update data:", bodyData);

        const res = await fetch('https://frontend-test.lamptechs.com/api/v1/user/product/update', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        });

        const data = await res.json();
        console.log("Update response:", data);
        router.push('/productsPage');

        if (data.success) {
            alert('Product updated successfully');
            router.push('/productsPage');
        }

    };

    return (
        <div className="min-h-screen flex">
            <SideBar />
            <main className="flex-1 bg-gray-50 p-6">
                <div className="min-h-screen p-6">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <Link href="/productsPage">
                                <h1 className="text-2xl font-semibold flex items-center gap-4">
                                    <span><Picture image={backIcon} width={30} height={30} /></span> Products
                                </h1>
                            </Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <Picture image={exit} width={30} height={30} />
                            <Picture image={Icon_body} width={30} height={30} />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-md shadow-md">
                        <div className="bg-[#002b45] text-white px-4 py-2 rounded-t-md mb-6">
                            <h2 className="text-lg font-semibold">Update Product</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-semibold text-gray-700 mb-1">
                                        Products Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="product_name"
                                        value={formData.product_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded bg-gray-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-gray-700 mb-1">
                                        Price <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="product_price"
                                        value={formData.product_price}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded bg-gray-100"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700 mb-1">
                                    Detail <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="product_details"
                                    rows={6}
                                    value={formData.product_details}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded bg-gray-100"
                                    required
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UpdateProduct;
