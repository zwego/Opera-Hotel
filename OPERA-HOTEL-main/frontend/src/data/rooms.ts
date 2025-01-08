export const rooms = [
  {
    id: '1',
    type: 'Classic Room',
    description: 'Elegant room with traditional Moroccan decor and city views',
    price: 1200,
    capacity: 2,
    amenities: ['Queen bed', 'Air conditioning', 'Free WiFi', 'Satellite TV', 'Mini fridge'],
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: '2',
    type: 'Garden View Room',
    description: 'Peaceful room overlooking our traditional Moroccan garden',
    price: 1500,
    capacity: 2,
    amenities: ['Queen bed', 'Garden view', 'Sitting area', 'Tea service', 'Walk-in shower'],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: '3',
    type: 'Deluxe Suite',
    description: 'Spacious suite with separate living area and premium amenities',
    price: 2500,
    capacity: 2,
    amenities: ['King bed', 'Balcony', 'Mini bar', 'Rain shower', 'Lounge area', 'Work desk'],
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: '4',
    type: 'Family Suite',
    description: 'Perfect for families with connecting rooms and child-friendly amenities',
    price: 3500,
    capacity: 6,
    amenities: ['2 Bedrooms', 'Kids play area', 'Kitchenette', 'Family dining space', 'Game console'],
    imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: '5',
    type: 'Royal Suite',
    description: 'Luxury suite with panoramic views and exclusive services',
    price: 4500,
    capacity: 4,
    amenities: ['2 King beds', 'Private terrace', 'Jacuzzi', 'Butler service', 'Dining area', 'Premium toiletries'],
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  }
] as const;