export interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
  image?: string; // optional placeholder image
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: 'hair' | 'nails' | 'combo' | 'all';
}

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
  galleryImages: GalleryImage[];
  services: {
    hair: Service[];
    nails: Service[];
    combos: Service[];
  };
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

  galleryImages: [
    { url: "https://picsum.photos/id/1011/2000/1200", alt: "Luxury hair transformation", category: "hair" },
    { url: "https://picsum.photos/id/1005/2000/1200", alt: "Elegant blonde balayage", category: "hair" },
    { url: "https://picsum.photos/id/201/2000/1200", alt: "Soft glam makeup & nails", category: "nails" },
    { url: "https://picsum.photos/id/1009/2000/1200", alt: "Nail art perfection", category: "nails" },
    { url: "https://picsum.photos/id/133/2000/1200", alt: "Modern hair extensions", category: "hair" },
    { url: "https://picsum.photos/id/160/2000/1200", alt: "Bridal hair & nails combo", category: "combo" },
    { url: "https://picsum.photos/id/1016/2000/1200", alt: "Voluminous curls", category: "hair" },
    { url: "https://picsum.photos/id/1003/2000/1200", alt: "Rose gold chrome nails", category: "nails" },
    { url: "https://picsum.photos/id/102/2000/1200", alt: "Signature blowout & style", category: "hair" },
    { url: "https://picsum.photos/id/1006/2000/1200", alt: "Full glam combo session", category: "combo" }
  ],

  // Professional services with realistic pricing (you can edit later)
  services: {
    hair: [
      {
        name: "Signature Balayage",
        price: "R1,850",
        duration: "3 hours",
        description: "Hand-painted highlights with root shadow for a natural sun-kissed look."
      },
      {
        name: "Luxury Haircut & Style",
        price: "R950",
        duration: "90 mins",
        description: "Precision cut + luxury wash, treatment & blowout."
      },
      {
        name: "Keratin Smoothing Treatment",
        price: "R2,200",
        duration: "3.5 hours",
        description: "Eliminates frizz and adds mirror-like shine for up to 6 months."
      }
    ],
    nails: [
      {
        name: "Spa Manicure + Gel Polish",
        price: "R650",
        duration: "60 mins",
        description: "Full hand care, exfoliation, massage & long-lasting gel polish."
      },
      {
        name: "Luxury Acrylic Full Set",
        price: "R850",
        duration: "90 mins",
        description: "Custom sculpted nails with 3D art or chrome finish."
      },
      {
        name: "Nail Art Masterpiece",
        price: "R450",
        duration: "45 mins",
        description: "Intricate hand-painted or 3D nail art on any base."
      }
    ],
    combos: [
      {
        name: "Hair & Nails Glam Combo",
        price: "R2,400",
        duration: "4 hours",
        description: "Signature haircut + balayage touch-up + luxury manicure & gel polish."
      },
      {
        name: "Bridal Beauty Package",
        price: "R4,800",
        duration: "5 hours",
        description: "Trial + full bridal hair, makeup & nails on the big day."
      }
    ]
  }
};