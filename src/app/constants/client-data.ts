export interface ClientData {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  googleMapCoords: { lat: number; lng: number };
  social: {
    instagram: string;
    facebook?: string;
    tiktok?: string;
  };
  businessHours: string;
}

export const CLIENT_DATA: ClientData = {
  name: "Luxe Bloom Salon",
  tagline: "Elegance in Every Strand & Stroke",
  address: "123 Beauty Lane, Cape Town, 8001",
  phone: "(021) 555-9876",
  email: "hello@luxe bloomsalon.com",
  googleMapCoords: { lat: -33.9249, lng: 18.4241 },
  social: {
    instagram: "https://instagram.com/luxebloomsalon",
    facebook: "https://facebook.com/luxebloomsalon"
  },
  businessHours: "Mon–Sat 9:00 AM – 6:00 PM"
};