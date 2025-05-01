import React from 'react'
import backIcon from "../../../public/image/back icon.png";
import Icon_body from "../../../public/image/Icon_body.png";
import exit from "../../../public/image/image 17.png";
import Picture from '../Picture/Picture';
import SideBar from '../SideBar/SideBar';
import Link from 'next/link';
const AddProduct = () => {
    return (
        <div className="min-h-screen flex">
            <SideBar />
            <main className="flex-1 bg-gray-50 p-6">
                <div className="min-h-screen p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            {/* <button onClick={() => router.back()} className="text-orange-600 text-2xl font-bold">
                            ←
                        </button> */}
                            <Link href="/productsPage">
                                <h1 className="text-2xl font-semibold flex items-center gap-4"><span> <Picture image={backIcon} width={30} height={30} /></span> Products</h1>
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

                        <form className="space-y-6">
                            {/* Product Name & Price */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-semibold text-gray-700 mb-1">
                                        Products Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Ex: Camera"
                                        // value={formData.name}
                                        // onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded bg-gray-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-gray-700 mb-1">
                                        Price <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        // value={formData.price}
                                        // onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded bg-gray-100"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Detail */}
                            <div>
                                <label className="block font-semibold text-gray-700 mb-1">
                                    Detail <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="detail"
                                    rows={6}
                                    // value={formData.detail}
                                    // onChange={handleChange}
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
    )
}

export default AddProduct
