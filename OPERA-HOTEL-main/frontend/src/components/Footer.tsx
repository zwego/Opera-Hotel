import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif text-white mb-4">Opera Hotel</h3>
            <p className="text-sm">Experience the magic of Morocco in our luxury hotel, where traditional hospitality meets modern comfort in the heart of Tangier.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+212 539 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@operahotel.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Boulevard Mohammed VI, Tangier</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/rooms" className="hover:text-white">Our Rooms</a></li>
              <li><a href="/spa" className="hover:text-white">Spa Services</a></li>
              <li><a href="/gym" className="hover:text-white">Fitness Center</a></li>
              <li><a href="/book" className="hover:text-white">Book a Room</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-white mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive special offers and updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 rounded text-white"
              />
              <button className="w-full bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Opera Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}