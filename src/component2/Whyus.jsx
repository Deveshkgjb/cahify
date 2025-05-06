import React from 'react';

function WhyUs() {
  return (
    <div className="p-8 bg-green-100">
      <h1 className="text-3xl font-extrabold text-center mb-8">Why Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Premium Repair */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2">Premium Repair</h2>
          <p className="text-gray-700">
            Top quality certified parts
          </p>
        </div>

        {/* Instant Mobile Repair */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2">Instant Mobile Repair</h2>
          <p className="text-gray-700">
            Mobile Repair on the Spot in Cashify Store or at Home
          </p>
        </div>

        {/* Physical Protection Warranty */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2">Physical Protection Warranty</h2>
          <p className="text-gray-700">
            Free 1 Month Screen Replacement even if it breaks for all Screen Repair
          </p>
        </div>

        {/* 6 Months Warranty */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2">6 Months Warranty</h2>
          <p className="text-gray-700">
            Hassle free 6 month warranty on parts replaced
          </p>
        </div>

        {/* Skilled Technicians */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2">Skilled Technicians</h2>
          <p className="text-gray-700">
            Trained & Qualified Professionals
          </p>
        </div>

        {/* Guaranteed Safety */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-2">Guaranteed Safety</h2>
          <p className="text-gray-700">
            Total Device & Data Security
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
