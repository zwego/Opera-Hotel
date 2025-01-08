export default function About() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Experience Moroccan Luxury</h2>
            <p className="text-gray-600 mb-4">
              Nestled in the heart of Rabat, Opera Hotel combines traditional Moroccan architecture 
              with modern luxury. Our hotel offers a peaceful sanctuary where guests can immerse 
              themselves in the rich culture of Morocco while enjoying world-class amenities.
            </p>
            <p className="text-gray-600 mb-6">
              From our stunning rooftop terrace to our authentic hammam, every corner of Opera Hotel 
              has been designed to provide an unforgettable experience.
            </p>
            <a href="/rooms" className="inline-block bg-amber-800 text-white px-6 py-3 rounded-md hover:bg-amber-700">
              Explore Our Rooms
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Hotel Interior"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Hotel Pool"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Hotel Restaurant"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Hotel Suite"
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}