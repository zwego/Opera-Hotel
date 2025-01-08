export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Welcome to Opera Hotel
          </h1>
          <p className="text-xl text-white mb-8">
            Experience luxury with a touch of Moroccan heritage
          </p>
          <a
            href="/book"
            className="bg-amber-800 text-white px-8 py-3 rounded-md text-lg hover:bg-amber-700 transition-colors"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </div>
  );
}