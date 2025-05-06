import React from "react";

const Card = ({ name, age, profession, city, profilePhoto }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-64 text-center hover:scale-105 hover:ring-4 hover:ring-blue-300 transform transition duration-300">
      <img
        src={profilePhoto}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-bold text-gray-800 hover:text-blue-500 transition">
        {name}
      </h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Profession: {profession}</p>
      <p className="text-gray-600">City: {city}</p>
    </div>
  );
};

export default Card;
