import { features } from './constants';

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">Hotel Amenities</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="text-amber-800 mb-4 flex justify-center">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}