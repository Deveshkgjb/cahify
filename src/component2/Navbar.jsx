import React, { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      if (searchQuery) {
        console.log(`Searching for: ${searchQuery}`);
        // Here, you would usually handle the search action (API call, routing, etc.)
      }
    };

    return (
        <nav className='bg-slate-200 text-white '>
            <div className='  px-1 py-1 flex justify-between items-center'>
            <div className="w-1/2 flex justify-center">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Updated_Cashify_Logo.png" 
                        alt="Mobile Phone"
                        className="w-30 h-10 object-cover rounded-lg"
                    />
                </div>
                


                <div className='relative pr-44'>
                    <form onSubmit={handleSearchSubmit}>
                        <input 
                            type="text"
                            
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            className={`bg-white text-black rounded-full py-2 pl-10 pr-4 w-64 transition-all duration-300 ${
                                isSearchOpen ? "w-96" : ""
                            } focus:outline-none`}
                            onFocus={() => setIsSearchOpen(true)}
                            onBlur={() => setIsSearchOpen(false)}
                        />
                    </form>
                </div>
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              🔍
            </span>
            <button
              type="submit"
              className="absolute bg-red right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            ></button>

                
                <div className='max-w-7xl mx-auto px-4 py-4  text-black flex justify-between items-center'>
                <div className="pl-3 font-semibold">location</div>
                 </div>
                 <div className='max-w-7xl mx-auto text-black px-4 py-4 flex justify-between items-center'>
                <div className="pl-3 font-semibold">Login Account</div>
                 </div>
                 
                
            </div>
            
        </nav>
        
    );
}

export default Navbar;

    
       




