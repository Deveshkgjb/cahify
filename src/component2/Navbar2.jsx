import React from "react";

function Navbar2() {
  return (
    <nav className="bg-white text-black p-4">
      <ul className="flex pl-6 space-x-8">
        <NavItem title="All^" items={["Phone", "Laptop", "Tablet"]} />
        <NavItem title="Sell Phone^" items={["Apple", "MI", "Moto"]} />
        <NavItem title="Shell-gagets^" items={["Phone", "Laptop", "Tablet","smart Speaker"]}/>
        <NavItem title="Buy Phone^" items={["Apple", "MI", "Moto"]} />
        <NavItem title="find-newGadget^" items={["Phone", "Laptop", "Tablet","smart Speaker"]}/> 
        <NavItem title="All^" items={["Phone", "Laptop", "Tablet"]} />
        <NavItem title="Sell Phone^" items={["Apple", "MI", "Moto"]} />
        <NavItem title="Shell-gagets^" items={["Phone", "Laptop", "Tablet","smart Speaker"]}/>
        <NavItem title="Buy Phone" items={["Apple", "MI", "Moto"]} />
        <NavItem title="find-newGadget^" items={["Phone", "Laptop", "Tablet","smart Speaker"]}/> 
        <NavItem title="Shell-gagets^" items={["Phone", "Laptop", "Tablet","smart Speaker"]}/>
        
       
        
        
      </ul>
    </nav>
  );
}
function NavItem({ title, items }) {
    return (
      <li className="relative group cursor-pointer">
        <div className="hover:text-gray-300">{title}</div>
  
        {/* Dropdown - shows on hover */}
        <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg 
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                       transition-opacity duration-300 z-50">
          {items.map((item, index) => (
            <li  className="px-1 py-1 hover:bg-gray-100 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </li>
    );
}

  

export default Navbar2;
