import { rooms } from '../data/rooms';

export default function Rooms() {
  return (
    <div className="pt-16">
      <div className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-serif text-white">Our Rooms</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={room.imageUrl}
                alt={room.type}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-2">{room.type}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-amber-800">{room.price} MAD</span>
                  <span className="text-gray-600">per night</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Amenities:</h4>
                  <ul className="text-gray-600 text-sm">
                    {room.amenities.map((amenity, index) => (
                      <li key={index}>• {amenity}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/book"
                  className="block text-center bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}