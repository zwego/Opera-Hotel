import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif text-amber-800">
              Opera Hotel
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-800">Home</Link>
            <Link to="/rooms" className="text-gray-700 hover:text-amber-800">Rooms</Link>
            <Link to="/spa" className="text-gray-700 hover:text-amber-800">Spa</Link>
            <Link to="/gym" className="text-gray-700 hover:text-amber-800">Gym</Link>
            <Link to="/book" className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700">
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <Menu />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-amber-800">Home</Link>
              <Link to="/rooms" className="block px-3 py-2 text-gray-700 hover:text-amber-800">Rooms</Link>
              <Link to="/spa" className="block px-3 py-2 text-gray-700 hover:text-amber-800">Spa</Link>
              <Link to="/gym" className="block px-3 py-2 text-gray-700 hover:text-amber-800">Gym</Link>
              <Link to="/book" className="block px-3 py-2 bg-amber-800 text-white rounded-md">Book Now</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}