import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Ramanjeet Singh",
      quote: "Great service and a warranty to back it up! Cashify exceeded my expectations in fixing my Realme 10 Pro.",
    },
    {
      name: "Saroj Singh",
      quote: "Excellent work by Huda City Centre Store of Cashify! Quick response, skilled technicians, and my Oppo F9 Pro is as good as new.",
    },
    {
      name: "Manik Batra",
      quote: "Thanks to technician Vivek from Cashify, my Samsung M31 is back in action. Fast, friendly, and effective service!",
    },
    {
      name: "Sakshi Bisht",
      quote: "Quick turnaround and excellent work by Cashify. Solved my Proximity Sensor issue in iPhone 6s with precision. Thank you for the speedy service!",
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Trusted by 27+ Lakh Happy Customers</h2>

      {/* Outer grey div */}
      <div className="bg-black py-8 px-4 rounded-lg">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all">
              <p className="text-base text-gray-600 italic">"{testimonial.quote}"</p>
              <p className="mt-2 text-sm font-medium text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
