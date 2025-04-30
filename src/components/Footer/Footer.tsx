import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#062D3E] mt-8 py-8 '>
            <div className='mx-20 flex justify-between justify-items-center'>
                <div className=''>
                    <h2 className='text-first-100 font-medium text-base'>Shop-First</h2>
                </div>
                <div className='text-white grid grid-cols-4 lg:grid-cols-7 gap-4 '>
                    <p>About</p>
                    <p>Project</p>
                    <p>Service</p>
                    <p>Client</p>
                    <p>Team</p>
                    <p>Blog</p>
                    <p>Flow</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
