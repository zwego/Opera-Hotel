import { useState, useEffect } from 'react';
import RoomSelector from './RoomSelector';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface FormData {
  checkIn: string;
  checkOut: string;
  roomId: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
}

interface ApiResponse {
  status: string;
  message?: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    checkIn: '',
    checkOut: '',
    roomId: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
  });
  const [rooms, setRooms] = useState<any[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:80/hotelbooking/api/getRooms.php')
      .then((response) => {
        setRooms(response.data);
      })
      .catch((err) => {
        console.error('Failed to load rooms:', err);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoomSelect = (roomId: string) => {
    const selectedRoom = rooms.find((room) => room.id === roomId);
    setFormData((prev) => ({
      ...prev,
      roomId,
      guests: Math.min(prev.guests, selectedRoom?.capacity || prev.guests),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = {
      check_in: formData.checkIn,
      check_out: formData.checkOut,
      guests: formData.guests,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      room_id: formData.roomId,
    };

    try {
      const response = await axios.post<ApiResponse>('http://localhost:80/hotelbooking/api/hotel_booking.php', bookingData);
      if (response.data.message === 'Booking confirmed!') {
        setIsSubmitted(true);
        setIsBooked(false);
      } else if (response.data.message === 'The selected room is not available.') {
        setIsSubmitted(true);
        setIsBooked(true);
      }
    } catch (error) {
      console.error('Error while booking:', error);
    }
  };

  const downloadPdf = () => {
    const pdf = new jsPDF();
    const content = document.getElementById('booking-details');

    if (content) {
      html2canvas(content).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('booking_details.pdf');
      });
    }
  };

  const selectedRoom = rooms.find((room) => room.id === formData.roomId);

  if (isSubmitted && !isBooked) {
    return (
      <div className="text-center py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h2 className="text-2xl font-serif text-green-800 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Opera Hotel, {formData.name}! Your booking has been confirmed.
          </p>
          <div id="booking-details" className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="font-serif text-lg mb-4">Booking Details:</h3>
            <div className="grid gap-2 text-left">
              <p>
                <span className="font-semibold">Name:</span> {formData.name}
              </p>
              <p>
                <span className="font-semibold">Room:</span> {selectedRoom?.type}
              </p>
              <p>
                <span className="font-semibold">Check-in:</span> {formData.checkIn}
              </p>
              <p>
                <span className="font-semibold">Check-out:</span> {formData.checkOut}
              </p>
              <p>
                <span className="font-semibold">Guests:</span> {formData.guests}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            A confirmation email has been sent to {formData.email}. We look forward to welcoming you!
          </p>
          <button
            className="mt-4 bg-amber-800 text-white py-2 px-4 rounded hover:bg-amber-700 transition-colors"
            onClick={downloadPdf}
          >
            Download PDF
          </button>
          <button
            className="mt-4 ml-4 bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
            onClick={() => setIsSubmitted(false)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (isSubmitted && isBooked) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <h2 className="text-2xl font-serif text-red-800 mb-4">Room Not Available</h2>
          <p className="text-gray-600 mb-6">
            We're sorry, {formData.name}, but the selected room is already booked for the specified dates. Please try a
            different room or adjust your dates.
          </p>
          <button
            className="mt-4 bg-amber-800 text-white py-2 px-4 rounded hover:bg-amber-700 transition-colors"
            onClick={() => setIsSubmitted(false)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
   
    <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Check-in Date</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-amber-800 focus:border-amber-800"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Check-out Date</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-amber-800 focus:border-amber-800"
                required
              />
            </div>
          </div>
    
          <div>
            <label className="block text-gray-700 mb-4">Select Room Type</label>
            <RoomSelector
              selectedRoom={formData.roomId}
              onChange={handleRoomSelect}
            />
          </div>
    
          <div>
            <label className="block text-gray-700 mb-2">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max={selectedRoom?.capacity || 6}
              className="w-full p-2 border rounded focus:ring-amber-800 focus:border-amber-800"
              required
            />
            {selectedRoom && (
              <p className="text-sm text-gray-600 mt-1">
                Maximum capacity: {selectedRoom.capacity} guests
              </p>
            )}
          </div>
    
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-gray-900">Personal Information</h3>
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-amber-800 focus:border-amber-800"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-amber-800 focus:border-amber-800"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-amber-800 focus:border-amber-800"
                required
              />
            </div>
          </div>
    
          <button
            type="submit"
            className="w-full bg-amber-800 text-white py-3 rounded hover:bg-amber-700 transition-colors"
          >
            Complete Booking
          </button>
        </form>
  );
}
