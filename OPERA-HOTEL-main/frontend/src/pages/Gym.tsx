import { Dumbbell } from 'lucide-react';

export default function Gym() {
  const features = [
    {
      title: 'Modern Equipment',
      description: 'State-of-the-art cardio and strength training machines',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
    },
    {
      title: 'Personal Training',
      description: 'Expert trainers available for personalized sessions',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
    },
    {
      title: 'Yoga Studio',
      description: 'Daily classes in our peaceful yoga studio',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
    },
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-serif text-white">Fitness Center</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Dumbbell className="w-12 h-12 text-amber-800 mx-auto mb-4" />
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Stay Active During Your Stay</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our fully-equipped fitness center is open 24/7 for your convenience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 p-8 rounded-lg">
          <h3 className="text-2xl font-serif text-gray-900 mb-4">Fitness Classes Schedule</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded">
              <div className="font-bold">Morning Yoga</div>
              <div className="text-gray-600">Daily 7:00 AM - 8:00 AM</div>
            </div>
            <div className="bg-white p-4 rounded">
              <div className="font-bold">HIIT Training</div>
              <div className="text-gray-600">Mon, Wed, Fri 6:00 PM - 7:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}