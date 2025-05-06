export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-xl font-bold">Casify</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-indigo-500">Home</a></li>
          <li><a href="#" className="hover:text-indigo-500">Shop</a></li>
          <li><a href="#" className="hover:text-indigo-500">Contact</a></li>
        </ul>
      </nav>
    );
  }
  