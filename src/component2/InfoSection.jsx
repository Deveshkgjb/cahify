import React from 'react';

const InfoSection = () => {
  return (
    <div className="px-6 py-10 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">
          Buy Old Mobile Phones & Sell Your Old Phone with Cashify
        </h1>

        <p className="text-lg">
          Looking to buy old phone or sell your old mobile phone? Cashify has you covered! At Cashify, we provide a seamless experience whether you're buying or selling old mobile phones. Introducing Cashify, India's biggest re-commerce website.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Buy Old Mobile Phones</h2>
          <p className="mb-4">
            Cashify offers a smart and economical way to buy old phones. Explore our vast selection of refurbished smartphones at prices that won’t break the bank. Our phones are inspected and restored by professionals to ensure they feel as good as new. On top of that, you get:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>High-quality refurbished phones at affordable prices</li>
            <li>32-point quality checks</li>
            <li>6-month warranty on all refurbished phones</li>
            <li>15 days replacement</li>
          </ul>
          <p className="mt-4">
            Upgrade your phone without stretching your budget. Discover our wide range of old mobile phones and get yours today at nearly half the price.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">How to Buy Old Phone From Cashify</h2>
          <ul className="list-decimal pl-6 space-y-1">
            <li>Visit the website or app.</li>
            <li>Click on the Buy Phone section and select the brand you want.</li>
            <li>Choose the model and condition - Fair, Good, Superb.</li>
            <li>Enter your address and select payment mode.</li>
            <li>Make the payment and receive the phone at your doorstep.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Sell Your Old Phone</h2>
          <p className="mb-4">
            Ready to sell old mobile phone? Cashify makes it easy to get cash for your old mobile phones without leaving home.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Get an Instant Quote: Enter your phone’s details on our website or app.</li>
            <li>Free Home Pickup: Book a convenient time, and we’ll pick it up.</li>
            <li>Instant Cash Payment: Receive cash on the spot upon pickup.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Supported Brands</h2>
          <p className="mb-4">
            You can find almost all mobile phone brands available in India, along with laptops, tablets, and gaming consoles. For all devices sold on Cashify, we offer:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Assured sale at best price</li>
            <li>Hassle-free process</li>
            <li>Free home pickup</li>
            <li>Instant cash payment on pickup</li>
          </ul>
          <p className="mt-4">
            Every old phone goes through complete data cleaning to ensure your data privacy. We support nearly all major brands for both buying and selling.
          </p>
        </section>
      </div>
    </div>
  );
};

export default InfoSection;
