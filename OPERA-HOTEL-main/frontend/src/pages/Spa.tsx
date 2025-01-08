import { Sparkles } from 'lucide-react';

export default function Spa() {
  const treatments = [
    {
      name: 'Traditional Hammam',
      duration: '60 min',
      price: '1200 MAD',
      description: 'Experience the traditional Moroccan cleansing ritual',
      image: 'https://images.unsplash.com/photo-1532926381893-7542290edf1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
    },
    {
      name: 'Argan Oil Massage',
      duration: '90 min',
      price: '1500 MAD',
      description: 'Relaxing massage using pure Moroccan argan oil',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
    },
    {
      name: 'Royal Face Treatment',
      duration: '75 min',
      price: '1400 MAD',
      description: 'Luxurious facial using traditional Moroccan ingredients',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
    },
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1532926381893-7542290edf1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-serif text-white">Our Spa Sanctuary</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Sparkles className="w-12 h-12 text-amber-800 mx-auto mb-4" />
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Spa Treatments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in traditional Moroccan wellness treatments and modern spa luxuries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div key={treatment.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={treatment.image}
                alt={treatment.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-2">{treatment.name}</h3>
                <div className="text-amber-800 mb-2">
                  {treatment.duration} | {treatment.price}
                </div>
                <p className="text-gray-600 mb-4">{treatment.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}