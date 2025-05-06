import React from 'react'
const images=[

   
]
const NewPage=()=>{
    const getRandomImage=()=>{
        const randomIndex = Math.floor(Math.random()*images.lenght)
        return images[randomIndex];
    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Random Image</h2>
          <div className="flex justify-center">
            <img
              src={getRandomImage()}
              alt="Random"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    );
};
export default NewPage