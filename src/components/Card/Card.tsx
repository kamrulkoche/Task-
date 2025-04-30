import React from 'react'
import Picture from '../Picture/Picture'
import productImg from "../../../public/image/logo4.png"
import start from "../../../public/image/star.png"


const Card = () => {
    return (
        <div className='bg-white border border-white p-4 rounded-xl'>
            <div className='bg-second-100 w-full rounded-xl '>
                <Picture image={productImg} width={500} height={500} />
            </div>
            <div className='mt-4'>
                <h2>Short Sleeve Shirt</h2>
                <div className='flex justify-between mt-4'>
                    <Picture image={start} width={50} height={50} />
                    <h2 className='text-xs font-normal'>(2k Reviews)</h2>
                </div>
                <div className='flex gap-4 text-sm font-normal mt-4'>
                    <p>৳ 275</p>
                    <p>৳ 475</p>
                </div>
                <button className='flex border-2 mt-4 border-black py-2 px-6 rounded-xl justify-center w-full'>View Product</button>
            </div>
        </div>
    )
}

export default Card
