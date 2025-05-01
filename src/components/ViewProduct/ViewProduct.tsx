import Image from "next/image";
import logo4 from "../../../public/image/logo4.png";
const ViewProduct = () => {
    return (
        <div className=" bg-[#f0e7d5] p-6 flex flex-col items-center">
            <div className=" p-6 max-w-4xl w-full flex flex-col md:flex-row items-center">

                <div className="w-full md:w-1/2 flex justify-center items-center bg-white rounded-xl">
                    <Image
                        src={logo4}
                        alt="Womens Denim Jacket"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>

                {/* Product Info */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
                    <h2 className="text-xl font-semibold text-gray-800">Womens Denim Jacket<br />(Blue)</h2>
                    <p className="text-lg font-bold text-gray-900 mt-2">BDT 700</p>

                    <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
                        Add to Cart
                    </button>

                    {/* Tabs */}
                    <div className="mt-8 border-b border-gray-300 pb-2">
                        <span className="text-sm font-medium text-blue-700 border-b-2 border-blue-700">
                            Product Details
                        </span>
                    </div>
                </div>

            </div>
            <div className="mt-4 space-y-4 text-sm text-gray-700 -ml-48">
                <div>
                    <h3 className="font-semibold">Product Details</h3>
                    <p>
                        Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">Size & Fit</h3>
                    <p>
                        The model (height 5&apos;8&quot;) is wearing a size S
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">Material & Care</h3>
                    <p>100% cotton Machine Wash</p>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct
