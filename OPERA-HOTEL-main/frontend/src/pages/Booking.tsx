import BookingForm from '../components/booking/BookingForm';

export default function Booking() {
  return (
    <div className="pt-16">
      <div className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-serif text-white">Book Your Stay</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}