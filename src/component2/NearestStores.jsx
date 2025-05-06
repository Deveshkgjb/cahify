import React from 'react';

function NearestStores() {
  const stores = [
    {
      city: "Gurgaon",
      name: "Cashify Buy, Sell and Repair Mobile Store Sushant Lok",
      address: "GF 133, Sushant Vyapar Kendra, Sushant Lok, Gurgaon",
      timings: "10:00 AM - 09:00 PM",
    },
    {
      city: "Gurgaon",
      name: "Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon",
      address: "Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel Bank market, Gurugram",
      timings: "10:00 AM - 09:00 PM",
    },
    {
      city: "Gurgaon",
      name: "Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon",
      address: "Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel Bank market, Gurugram",
      timings: "10:00 AM - 09:00 PM",
    },
    {
      city: "Gurgaon",
      name: "Cashify Buy, Sell and Repair Mobile Store MG Road Gurgaon",
      address: "MG Road Metro, Exit Gate no 2, M.G. Road Gurgaon",
      timings: "09:00 AM - 09:00 PM",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nearest Stores</h2>
        <p className="text-lg text-center text-gray-600 mb-8">200+ Experience Centres | 4.5+ Star Ratings</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stores.map((store, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-800">{store.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{store.address}</p>
              <p className="text-sm text-gray-600 mt-2">Timings: {store.timings}</p>
              <button className="mt-4 text-blue-500 hover:text-blue-700 font-semibold">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* View All Stores Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View all stores
          </button>
        </div>
      </div>
    </div>
  );
}

export default NearestStores;
