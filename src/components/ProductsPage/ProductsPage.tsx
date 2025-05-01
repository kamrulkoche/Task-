import Link from 'next/link';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import Icon_body from "../../../public/image/Icon_body.png";
import exit from "../../../public/image/image 17.png";
import Picture from '../Picture/Picture';
import SideBar from '../SideBar/SideBar';
export default function ProductsPage() {
    const dummyProducts = Array.from({ length: 10 }).map((_, i) => ({
        name: 'Camera',
        price: `${(i + 1) * 2500}`,
        description:
            'Description: Get closer to the action with the 5x Digital Camera. This versatile camera offers premium photo capabilities, making it ideal for everyday photography needs.',
    }));

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
                        </button></Link>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="min-w-full table-auto">
                        <thead className="bg-[#062D3E] text-white ">
                            <tr className="text-left">
                                <th className="p-3 text-base font-normal w-44">Product Name</th>
                                <th className="p-3 text-base font-normal w-44">Price</th>
                                <th className="p-3 text-base font-normal">Detail</th>
                                <th className="p-3 text-base font-normal">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyProducts.map((product, idx) => (
                                <tr key={idx} className="border-t border-gray-200">
                                    <td className="p-3">{product.name}</td>
                                    <td className="p-3">{product.price}</td>
                                    <td className="p-3 text-sm text-gray-700">{product.description}</td>
                                    <td className="p-3 flex gap-3">
                                        <Link href="/updateProduct"> <FiEdit2 className="text-blue-500 cursor-pointer" /></Link>
                                        <FiTrash2 className="text-red-500 cursor-pointer" />
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
