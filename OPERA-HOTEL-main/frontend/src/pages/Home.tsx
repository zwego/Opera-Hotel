import Hero from '../components/Hero';
import Features from '../components/home/Features';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Testimonials />
    </div>
  );
}