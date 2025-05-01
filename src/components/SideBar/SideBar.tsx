import React from 'react'
import Picture from '../Picture/Picture'
import top from "../../../public/image/top.png"

const SideBar = () => {
    return (
        <div className="w-48 bg-orange-600 text-[#062D3E] p-4">
            <h1 className="bg-white text-[#062D3E] rounded-xl p-2 text-center mb-6">Shop-Finet</h1>
            <ul>
                <li className="mb-2 bg-[#062D3E] text-white rounded-xl p-2 text-center flex items-center gap-3"><span> <Picture image={top} width={20} height={20} /></span> Products</li>
            </ul>
        </div>
    )
}

export default SideBar
