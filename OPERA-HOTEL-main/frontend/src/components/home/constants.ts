import { Utensils, Wifi, Car, Coffee } from 'lucide-react';

export const features = [
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Experience authentic Moroccan cuisine in our restaurants'
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected throughout the hotel premises'
  },
  {
    icon: Car,
    title: 'Airport Transfer',
    description: 'Complimentary luxury transportation service'
  },
  {
    icon: Coffee,
    title: 'Rooftop Lounge',
    description: 'Enjoy panoramic views of Rabat'
  }
] as const;

export const reviews = [
  {
    text: "An oasis of tranquility in the heart of Rabat. The spa services were exceptional.",
    author: "Sarah Mitchell",
    location: "London, UK"
  },
  {
    text: "The attention to detail and Moroccan hospitality made our stay unforgettable.",
    author: "Jean Dupont",
    location: "Paris, France"
  },
  {
    text: "Stunning architecture, excellent service, and the best hammam experience.",
    author: "Michael Chen",
    location: "Singapore"
  }
] as const;