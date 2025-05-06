import React, { useEffect, useState } from "react";

const Slides = () => {
  const slides = [
    // Slide 1
    <div key="slide1" className="w-full h-full min-h-[400px] flex flex-col lg:flex-row items-center gap-6 bg-white text-black p-6">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold">
          Sell Old Mobile Phone for Instant <br /> Cash
        </h2>
        <h2 className="text-xl mt-4">
          Maximum Value ✅ <br />
          Safe & Hassle-free ✅ <br />
          Free Doorstep Pickup ✅
        </h2>

        <div className="flex mt-6">
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm px-4 py-2 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-2 py-1 outline-none bg-transparent text-gray-700 placeholder-gray-500"
            />
            <button className="text-gray-500 hover:text-gray-700">🔍</button>
          </div>
        </div>

        <button className="bg-black text-white mt-6 px-6 py-2 rounded-2xl hover:bg-blue-400">
          Sell Now
        </button>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <img
          src="https://s3no.cashify.in/estore/c45a45e02d0646e2b9ae0b55a85692d7.png?p=default&s=lg"
          alt="Mobile Phone"
          className="w-64 h-64 object-cover rounded-lg"
        />
      </div>
    </div>,

    // Slide 2
    <div key="slide2" className="w-full h-full min-h-[400px] flex flex-col lg:flex-row items-center gap-6 bg-black text-white p-6">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold">Up To 50% off on Mobile Repair</h2>
        <h2 className="text-xl mt-4">
          Use Code:{" "}
          <button className="text-blue-400 font-semibold">RPR50</button>
        </h2>
        <button className="bg-black text-white mt-6 px-6 py-2 rounded-2xl hover:bg-blue-400">
          Book Repair
        </button>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <img
          src="https://s3no.cashify.in/cashify/web/47d5e6dfeff74b259a457057abd9c2e9.webp?p=default&s=lg"
          alt="Mobile Repair"
          className="w-64 h-64 object-cover rounded-lg"
        />
      </div>
    </div>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex items-center justify-center mt-10 bg-gray-100 px-4">
      <div className="relative w-full max-w-6xl rounded-xl shadow-md overflow-hidden min-h-[400px]">
        {/* Slide Container */}
        <div className="w-full h-full transition-all duration-500">
          {slides[currentIndex]}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 translate-x-3 text-black text-sm px-3 py-1 rounded hover:bg-gray-200 z-10"
        >
          ◀
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 translate-x-2 text-black text-sm px-3 py-1 rounded hover:bg-gray-200 z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Slides;
