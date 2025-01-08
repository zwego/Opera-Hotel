export interface Room {
  id: string;
  type: string;
  description: string;
  price: number;
  capacity: number;
  amenities: string[];
  imageUrl: string;
}

export interface Booking {
  checkIn: Date;
  checkOut: Date;
  roomType: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
}