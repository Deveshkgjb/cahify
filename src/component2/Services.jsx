import React from 'react';

function ServicesAvailable() {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-extrabold text-center mb-8">Services Available</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {/* Screen */}
        <div className="bg-white p-6 rounded-full shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center w-32 h-32 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Screen"
            className="w-24 h-24 object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">SCREEN</h2>
        </div>

        {/* Battery */}
        <div className="bg-white p-6 rounded-full shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center w-32 h-32 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Battery"
            className="w-24 h-24 object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">BATTERY</h2>
        </div>

        {/* Mic */}
        <div className="bg-white p-6 rounded-full shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center w-32 h-32 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Mic"
            className="w-24 h-24 object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">MIC</h2>
        </div>

        {/* Receiver */}
        <div className="bg-white p-6 rounded-full shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center w-32 h-32 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Receiver"
            className="w-24 h-24 object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">RECEIVER</h2>
        </div>

        {/* Charging Jack */}
        <div className="bg-white p-6 rounded-full shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center w-32 h-32 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Charging Jack"
            className="w-24 h-24 object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">CHARGING JACK</h2>
        </div>

        {/* Speaker */}
        <div className="bg-white p-6 rounded-full shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center w-32 h-32 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Speaker"
            className="w-24 h-24 object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">SPEAKER</h2>
        </div>

        {/* Back Panel */}
        <div className="bg-white p-6 rounded-full shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center w-32 h-32 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Back Panel"
            className="w-24 h-24 object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">BACK PANEL</h2>
        </div>

        {/* Proximity Sensor */}
        <div className="bg-white p-6 rounded-full shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center w-32 h-32 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Proximity Sensor"
            className="w-24 h-24 object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">PROXIMITY SENSOR</h2>
        </div>
      </div>
    </div>
  );
}

export default ServicesAvailable;
