'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import Icon_body from '../../../public/image/Icon_body.png';
import exit from '../../../public/image/image 17.png';
import Picture from '../Picture/Picture';
import SideBar from '../SideBar/SideBar';

interface Product {
    id: number;
    product_name: string;
    product_price: number;
    product_details: string;
}

export default function ProductsPage() {
    const router = useRouter()
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                console.error('No access token found');
                return;
            }

            const res = await fetch('https://frontend-test.lamptechs.com/api/v1/user/product/list', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            if (data && Array.isArray(data.data)) {
                setProducts(data.data);
            } else {
                console.warn('No product data found');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (productId: number) => {
        const confirmed = window.confirm('Are you sure you want to delete this product?');
        if (!confirmed) return;

        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                console.error('No access token found');
                return;
            }

            const res = await fetch('https://frontend-test.lamptechs.com/api/v1/user/product/delete', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: productId }),
            });

            const data = await res.json();
            console.log('Delete response:', data);
            location.reload();

            if (data.success) {
                setProducts(products.filter((product) => product.id !== productId));
               console.log(data.success);
               
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="min-h-screen flex">
            <SideBar />
            <main className="flex-1 bg-gray-50 p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Products</h2>
                    <div className="flex items-center gap-2 ml-4">
                        <Picture image={exit} width={30} height={30} />
                        <Picture image={Icon_body} width={30} height={30} />
                    </div>
                </div>

                <div className="flex gap-2 items-center mb-6">
                    <input
                        type="text"
                        placeholder="Search Products"
                        className="border-2 border-orange-600 rounded-xl px-3 py-2 w-64"
                    />
                    <Link href="/addProduct">
                        <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                            Add New +
                        </button>
                    </Link>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="min-w-full table-auto">
                        <thead className="bg-[#062D3E] text-white">
                            <tr className="text-left">
                                <th className="p-3 text-base font-normal w-44">Product Name</th>
                                <th className="p-3 text-base font-normal w-44">Price</th>
                                <th className="p-3 text-base font-normal">Detail</th>
                                <th className="p-3 text-base font-normal">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-t border-gray-200">
                                    <td className="p-3">{product.product_name}</td>
                                    <td className="p-3">${product.product_price.toFixed(2)}</td>
                                    <td className="p-3 text-sm text-gray-700">{product.product_details}</td>
                                    <td className="p-3 flex gap-3">
                                        <Link href={`/updateProduct/${product.id}`}>
                                            <FiEdit2 className="text-blue-500 cursor-pointer" />
                                        </Link>
                                        <FiTrash2
                                            className="text-red-500 cursor-pointer"
                                            onClick={() => handleDelete(product.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end items-center mt-4">
                    <nav className="flex items-center gap-1">
                        <button className="px-2 py-1 text-sm bg-gray-200 rounded">1</button>
                        <button className="px-2 py-1 text-sm hover:bg-gray-200 rounded">2</button>
                        <button className="px-2 py-1 text-sm hover:bg-gray-200 rounded">3</button>
                        <span className="px-2 py-1 text-sm">...</span>
                        <button className="px-2 py-1 text-sm hover:bg-gray-200 rounded">6</button>
                    </nav>
                </div>
            </main>
        </div>
    );
}
