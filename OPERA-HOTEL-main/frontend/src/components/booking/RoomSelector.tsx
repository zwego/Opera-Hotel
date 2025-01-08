import { useEffect, useState } from 'react';
import axios from 'axios';

interface RoomSelectorProps {
  selectedRoom: string;
  onChange: (value: string) => void;
}

export default function RoomSelector({ selectedRoom, onChange }: RoomSelectorProps) {
  const [rooms, setRooms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:80/hotelbooking/api/getRooms.php')
      .then((response) => {
        setRooms(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load rooms');
        setLoading(false);
        console.log(err);
      });
  }, []);

  if (loading) return <div>Loading rooms...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <div
          key={room.id}
          className={`border rounded-lg p-4 cursor-pointer transition-all ${
            selectedRoom === room.id
              ? 'border-amber-800 bg-amber-50'
              : 'border-gray-200 hover:border-amber-800'
          }`}
          onClick={() => onChange(room.id)}
        >
          <img
            src={room.image_url}
            alt={room.type}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-serif text-gray-900 mb-2">{room.type}</h3>
          <p className="text-gray-600 text-sm mb-2">{room.description}</p>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-bold text-amber-800">{room.price} MAD</span>
            <span className="text-gray-600 text-sm">per night</span>
          </div>
          <div
            className={`text-sm ${
              room.availability_status === 'booked' ? 'text-red-600' : 'text-green-600'
            }`}
          >
            Status : {room.availability_status}
          </div>
          <div className="text-sm text-gray-600">
            Max capacity: {room.capacity} guests
          </div>
        </div>
      ))}
    </div>
  );
}