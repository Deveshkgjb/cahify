import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
      setData(response.data); // Save data to state
      console.log(response.data);

      useEffect(()=>{
        getData
      },[])
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <button
        onClick={getData}
        className="bg-teal-700 mt-3 text-white rounded-2xl font-semibold text-2xl px-6 py-3 active:scale-90"
      >
        Get Data
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {data.map((item) => (
          <div key={item.id} className="bg-pink-800 p-4 rounded-xl shadow-lg">
            <img
              src={item.download_url}
              alt={item.author}
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="mt-2 font-semibold text-lg">{item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
