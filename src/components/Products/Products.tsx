import React from 'react'
import Card from '../Card/Card'
import Link from 'next/link'

const Products = () => {
    const products = [1, 2, 3, 4, 5, 6]

    return (
        <div>
            <Link href="/viewProduct">
                <div className='container mx-auto px-2 sm:px-4 lg:px-10 pt-4 bg-[#FFF8F6]'>
                    <h2 className='mx-8 mt-4 font-medium'>Our Best Products</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {products.map((product, index) => (
                            <Card key={index} />
                        ))}
                    </div>
                    <div className='w-full'>
                        <button className='py-2.5 px-4 bg-[#062D3E] text-white rounded-xl mx-auto block mb-8'>
                            Load More
                        </button>
                    </div>
                </div >
            </Link>
        </div>
    )
}

export default Products
