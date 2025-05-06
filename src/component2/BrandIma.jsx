import React from 'react';

function BrandIma() {
    return (
        <div className="py-8 bg-slate-200 relative pr-40 ml-44 mt-10 mr-20 underline-offset-8 h-auto">
            
            <div className="px-4 flex">
                <div className="w-1/2">
                    <h2 className="text-2xl font-bold">Sell Old Mobile Phone for Instant <br />Cash</h2>
                    <h2 className="text-xl  mt-4">
                        Maximum Value✅
                        Safe & Hassle-free✅
                        Free Doorstep Pickup✅
                    </h2>
                    <div className="flex mt-10 relative">
                        <div className="flex items-center w-full max-w-xl bg-white border border-gray-300 rounded-full shadow-sm px-4 py-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="flex-grow px-4 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-500"
                            />
                            <button className="text-gray-500 hover:text-gray-700">
                                🔍
                            </button>
                        </div>
                    </div>
                    <button className='bg-black text-white  relative ml-40 mt-10 rounded-2xl hover:bg-blue-400 '>
             <h2>Sell Now</h2>
            </button>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img 
                        src="https://s3no.cashify.in/estore/c45a45e02d0646e2b9ae0b55a85692d7.png?p=default&s=lg" 
                        alt="Mobile Phone"
                        className="w-96 h-96 object-cover rounded-lg"
                    />
                </div>
               
            </div>
            
        </div>
    );
}

export default BrandIma;