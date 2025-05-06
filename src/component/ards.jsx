import React from "react";
// import Card from "./Card"; // ✅ Uncommented

const Cards = () => {
  const user = [
    {
      name: "Aarav Mehta",
      city: "Mumbai",
      age: 28,
      profession: "Software Engineer",
      profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      name: "Diya Sharma",
      city: "Delhi",
      age: 24,
      profession: "Graphic Designer",
      profilePhoto: "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
      name: "Rohan Singh",
      city: "Bangalore",
      age: 30,
      profession: "Data Analyst",
      profilePhoto: "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
      name: "Sneha Roy",
      city: "Kolkata",
      age: 26,
      profession: "Marketing Manager",
      profilePhoto: "https://randomuser.me/api/portraits/women/41.jpg"
    },
    {
      name: "Kabir Khan",
      city: "Hyderabad",
      age: 35,
      profession: "Product Manager",
      profilePhoto: "https://randomuser.me/api/portraits/men/51.jpg"
    }
  ];

  return (
    <div className="p-9 flex flex-wrap gap-6 justify-center bg-gray-100 min-h-screen">
      {user.map((elem, idx) => (
        <Card
          key={idx}
          name={elem.name}
          age={elem.age}
          profession={elem.profession}
          city={elem.city}
          profilePhoto={elem.profilePhoto}
        />
      ))}
    </div>
  );
};

export default Cards;
