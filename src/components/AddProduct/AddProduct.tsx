"use client"
import React, { useState } from 'react';
import backIcon from "../../../public/image/back icon.png";
import Icon_body from "../../../public/image/Icon_body.png";
import exit from "../../../public/image/image 17.png";
import Picture from '../Picture/Picture';
import SideBar from '../SideBar/SideBar';
import Link from 'next/link';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        product_name: '',
        product_price: '',
        product_details: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("access_token");

        try {
            const response = await fetch("https://frontend-test.lamptechs.com/api/v1/user/product/store", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Product added successfully!");
                setFormData({ product_name: '', product_price: '', product_details: '' });
            } else {
                alert(result.message || "Failed to add product.");
            }
        } catch (error) {
            console.error("Error adding product:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex">
            <SideBar />
            <main className="flex-1 bg-gray-50 p-6">
                <div className="min-h-screen p-6">
                    {/* Header */}
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

                    {/* Add Product Card */}
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <div className="bg-[#002b45] text-white px-4 py-2 rounded-t-md mb-6">
                            <h2 className="text-lg font-semibold">Add Products</h2>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Product Name & Price */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-semibold text-gray-700 mb-1">
                                        Product Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="product_name"
                                        placeholder="Ex: Camera"
                                        value={formData.product_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded bg-gray-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-gray-700 mb-1">
                                        Product Price <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="product_price"
                                        placeholder="Ex: 100"
                                        value={formData.product_price}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded bg-gray-100"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div>
                                <label className="block font-semibold text-gray-700 mb-1">
                                    Product Details <span className="text-red-500">*</span>
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

                            {/* Submit Button */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddProduct;
