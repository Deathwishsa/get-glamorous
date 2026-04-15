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
  galleryImages: { url: string; alt: string }[];   // ← NEW
}

export const CLIENT_DATA: ClientData = {
  name: "Luxe Bloom Salon",
  tagline: "Elegance in Every Strand & Stroke",
  address: "123 Beauty Lane, Cape Town, 8001",
  phone: "(021) 555-9876",
  email: "hello@luxebloomsalon.com",
  googleMapCoords: { lat: -33.9249, lng: 18.4241 },
  social: {
    instagram: "https://instagram.com/luxebloomsalon",
    facebook: "https://facebook.com/luxebloomsalon"
  },
  businessHours: "Mon–Sat 9:00 AM – 6:00 PM",
  
  // Simulated high-quality beauty images (last 5 will be used on homepage)
  galleryImages: [
    { url: "https://picsum.photos/id/1011/2000/1200", alt: "Luxury hair transformation" },
    { url: "https://picsum.photos/id/1005/2000/1200", alt: "Elegant blonde balayage" },
    { url: "https://picsum.photos/id/201/2000/1200", alt: "Soft glam makeup & nails" },
    { url: "https://picsum.photos/id/1009/2000/1200", alt: "Nail art perfection" },
    { url: "https://picsum.photos/id/133/2000/1200", alt: "Modern hair extensions" },
    { url: "https://picsum.photos/id/160/2000/1200", alt: "Bridal hair & nails combo" },
    { url: "https://picsum.photos/id/1016/2000/1200", alt: "Voluminous curls" }
  ]
};