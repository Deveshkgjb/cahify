import React from 'react';

function DownloadApp() {
  return (
    <div key="slide1" className=" relative mr-36 ml-36 flex flex-col lg:flex-row items-center gap-6 bg-blue-200 rounded-2xl text-black p-6">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold">
        Download the App
        </h2>
        <h2 className="text-xl mt-4">
        Sell your old phone | Buy top-quality refurbished phones | Get your phone repaired
        </h2>

        <div className='w-20  flex gap-3 h-10 relative mt-7'>
        <img
          src="https://images.timesnownews.com/thumb/msid-92594651,width-400,height-225,resizemode-75/92594651.jpg?quality=20"
          alt="Mobile Phone"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://c41app.com/dist/images/apple-store.png"
          alt="Mobile Phone"
          className="w-full h-full object-cover rounded-lg"
        />

        </div>

        
      </div>

      <div className=" flex rlative justify-center h-50 w-45 overflow-hidden ml-28 rounded">
        <img
          src="https://s3no.cashify.in/cashify/web/images/landing/pngs/download-app.png?p=defaults=lg"
          alt="Mobile Phone"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
          
  );
}

export default DownloadApp;
