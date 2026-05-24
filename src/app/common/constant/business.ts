// =============================================================================
// BUSINESS CONSTANTS — Get Glamorous
// src/app/common/constant/business.ts
//
// ALL hardcoded business data lives here.
// To rebrand this template for a new client, update this file only.
// =============================================================================

export interface NavItem {
  label: string;
  route: string;
  icon : string;
}

export interface Service {
  icon        : string;
  title       : string;
  description : string;
}

export interface Stat {
  value : string;
  label : string;
}

export interface SocialLink {
  platform : string;
  icon     : string;
  url      : string;
}

export interface Testimonial {
  quote  : string;
  author : string;
  event  : string;
}

export interface GalleryItem {
  src      : string;
  alt      : string;
  category : string;
  caption  : string;
}

// Used by the /menu page — includes price, duration and optional image
export interface MenuService {
  icon?       : string;
  title       : string;
  price       : string;
  duration    : string;
  description : string;
  image?      : string;
}

export interface MenuServices {
  hair   : MenuService[];
  nails  : MenuService[];
  combos : MenuService[];
}

export const BUSINESS = {
  // ── Identity
  name        : 'Get Glamorous',
  stageName   : 'GET GLAMOROUS',
  tagline     : 'Elegance in Every Strand & Stroke',
  heroTagline : 'Where beauty meets luxury',
  shortBio    : '5+ years of premium hair and nail services in the heart of Cape Town. From bridal transformations to everyday glamour — every client leaves feeling their best.',
  location    : 'Cape Town, South Africa',

  // ── SEO / HTML
  htmlTitle       : 'GET GLAMOROUS | Hair · Nails · Beauty Salon Cape Town',
  metaDescription : 'Get Glamorous — Cape Town\'s premier beauty salon for hair and nail services. Book your next appointment for a luxury experience.',

  // ── Contact
  phone   : '(021) 555-9876',
  email   : 'hello@getglamorous.co.za',
  website : 'https://getglamorous.co.za',
  address : '123 Beauty Lane, Cape Town, 8001',

  // ── Business Hours
  businessHours : 'Mon–Sat  9:00 AM – 6:00 PM',

  // ── Social Media
  social: [
    {
      platform : 'Instagram',
      icon     : 'fa-brands fa-instagram',
      url      : 'https://instagram.com/_getglamorous0',
    },
    {
      platform : 'Facebook',
      icon     : 'fa-brands fa-facebook-f',
      url      : 'https://facebook.com/luxebloomsalon',
    },
  ] as SocialLink[],

  // ── Navigation
  nav: [
    { label: 'Home',     route: '/',           icon: 'fa-solid fa-house'           },
    { label: 'Services', route: '/menu',        icon: 'fa-solid fa-scissors'        },
    { label: 'Gallery',  route: '/gallery',     icon: 'fa-solid fa-images'          },
    { label: 'Booking',  route: '/booking',     icon: 'fa-solid fa-calendar-check'  },
    { label: 'Contact',  route: '/contact-us',  icon: 'fa-solid fa-envelope'        },
  ] as NavItem[],

  // ── CTA Button (header)
  ctaLabel : 'Book Now',
  ctaRoute : '/booking',

  // ── Stats (stats-bar section)
  stats: [
    { value: '5+',    label: 'Years of excellence'  },
    { value: '1000+', label: 'Happy clients'         },
    { value: '4.9★',  label: 'Average rating'        },
    { value: '100%',  label: 'Client satisfaction'   },
  ] as Stat[],

  // ── Services — flat array used by home page service cards (4 categories)
  services: [
    {
      icon        : 'fa-solid fa-scissors',
      title       : 'Hair Services',
      description : 'From precision cuts to full balayage and keratin treatments — transformations tailored perfectly to you.',
    },
    {
      icon        : 'fa-solid fa-hand-sparkles',
      title       : 'Nail Services',
      description : 'Gel polish, acrylics, nail art and spa manicures for nails that always make a statement.',
    },
    {
      icon        : 'fa-solid fa-spa',
      title       : 'Combo Packages',
      description : 'Hair and nail combos for the ultimate glam experience — perfect for special occasions.',
    },
    {
      icon        : 'fa-solid fa-ring',
      title       : 'Bridal Beauty',
      description : 'Complete bridal packages for your big day — trial sessions, full styling and flawless nails.',
    },
  ] as Service[],

  // ── Testimonials
  testimonials: [
    {
      quote  : 'My balayage turned out exactly how I envisioned it. The team is so talented and the salon atmosphere is just gorgeous.',
      author : 'Lerato M.',
      event  : 'Balayage, Cape Town CBD',
    },
    {
      quote  : 'Best nail art in Cape Town, full stop. I always leave feeling like a million rands — booked three times already.',
      author : 'Ayesha K.',
      event  : 'Acrylic Full Set, Claremont',
    },
    {
      quote  : 'They did my entire bridal hair and nails and I felt like an absolute queen. Every bride needs to come here.',
      author : 'Simone T.',
      event  : 'Bridal Package, Century City',
    },
  ] as Testimonial[],

  // ── Hero slide images (replace with real assets)
  heroSlides: [
    'assets/images/hero-1.jpg',
    'assets/images/hero-2.jpg',
    'assets/images/hero-3.jpg',
    'assets/images/hero-4.jpg',
  ],

  // ── Gallery preview — 6 images shown on home page
  galleryPreview: [
    'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1',
    'https://i5.walmartimages.com/asr/7eb93feb-cfb2-4227-a9b4-4ba3cdeeaa27.26d2b36a1502809ec01e3efff1c93693.jpeg',
    'https://d375139ucebi94.cloudfront.net/region2/za/5436/biz_photo/0084f1d4094247018d5b1df74ac9cf-glama-nails-beauty-biz-photo-e16fdcc6cc6549d8adcd7a98a93fe3-booksy.jpeg?size=640x427',
    'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1',
    'https://i5.walmartimages.com/asr/7eb93feb-cfb2-4227-a9b4-4ba3cdeeaa27.26d2b36a1502809ec01e3efff1c93693.jpeg',
    'https://d375139ucebi94.cloudfront.net/region2/za/5436/biz_photo/0084f1d4094247018d5b1df74ac9cf-glama-nails-beauty-biz-photo-e16fdcc6cc6549d8adcd7a98a93fe3-booksy.jpeg?size=640x427',
  ],

  // ── Gallery (full page)
  galleryCategories: ['All', 'Hair', 'Nails', 'Combos'] as const,
  galleryItems: [
    {
      src      : 'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1',
      alt      : 'Short layered haircut',
      category : 'Hair',
      caption  : 'Short Layered Cut — Cape Town',
    },
    {
      src      : 'https://i5.walmartimages.com/asr/7eb93feb-cfb2-4227-a9b4-4ba3cdeeaa27.26d2b36a1502809ec01e3efff1c93693.jpeg',
      alt      : 'Medium length hair style',
      category : 'Hair',
      caption  : 'Medium Blowout & Style',
    },
    {
      src      : 'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1',
      alt      : 'Long hair transformation',
      category : 'Hair',
      caption  : 'Long Hair Transformation',
    },
    {
      src      : 'https://d375139ucebi94.cloudfront.net/region2/za/5436/biz_photo/0084f1d4094247018d5b1df74ac9cf-glama-nails-beauty-biz-photo-e16fdcc6cc6549d8adcd7a98a93fe3-booksy.jpeg?size=640x427',
      alt      : 'Manicure and hand massage',
      category : 'Nails',
      caption  : 'Spa Manicure & Hand Massage',
    },
  ] as GalleryItem[],

  // ── Menu Services — categorised, used by /menu page
  menuServices: {
    hair: [
      {
        icon        : 'fa-solid fa-wand-magic-sparkles',
        title       : 'Signature Balayage',
        price       : 'R1,850',
        duration    : '3 hours',
        description : 'Hand-painted highlights with root shadow for a natural sun-kissed look.',
        image       : 'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1',
      },
      {
        icon        : 'fa-solid fa-scissors',
        title       : 'Luxury Haircut & Style',
        price       : 'R950',
        duration    : '90 mins',
        description : 'Precision cut + luxury wash, treatment & blowout.',
        image       : 'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1',
      },
      {
        icon        : 'fa-solid fa-droplet',
        title       : 'Keratin Smoothing Treatment',
        price       : 'R2,200',
        duration    : '3.5 hours',
        description : 'Eliminates frizz and adds mirror-like shine for up to 6 months.',
        image       : 'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1',
      },
    ],
    nails: [
      {
        icon        : 'fa-solid fa-hand-sparkles',
        title       : 'Spa Manicure + Gel Polish',
        price       : 'R650',
        duration    : '60 mins',
        description : 'Full hand care, exfoliation, massage & long-lasting gel polish.',
        image       : 'https://d375139ucebi94.cloudfront.net/region2/za/5436/biz_photo/0084f1d4094247018d5b1df74ac9cf-glama-nails-beauty-biz-photo-e16fdcc6cc6549d8adcd7a98a93fe3-booksy.jpeg?size=640x427',
      },
      {
        icon        : 'fa-solid fa-paintbrush',
        title       : 'Luxury Acrylic Full Set',
        price       : 'R850',
        duration    : '90 mins',
        description : 'Custom sculpted nails with 3D art or chrome finish.',
        image       : 'https://d375139ucebi94.cloudfront.net/region2/za/5436/biz_photo/0084f1d4094247018d5b1df74ac9cf-glama-nails-beauty-biz-photo-e16fdcc6cc6549d8adcd7a98a93fe3-booksy.jpeg?size=640x427',
      },
      {
        icon        : 'fa-solid fa-star',
        title       : 'Nail Art Masterpiece',
        price       : 'R450',
        duration    : '45 mins',
        description : 'Intricate hand-painted or 3D nail art on any base.',
        image       : 'https://d375139ucebi94.cloudfront.net/region2/za/5436/biz_photo/0084f1d4094247018d5b1df74ac9cf-glama-nails-beauty-biz-photo-e16fdcc6cc6549d8adcd7a98a93fe3-booksy.jpeg?size=640x427',
      },
    ],
    combos: [
      {
        icon        : 'fa-solid fa-spa',
        title       : 'Hair & Nails Glam Combo',
        price       : 'R2,400',
        duration    : '4 hours',
        description : 'Signature haircut + balayage touch-up + luxury manicure & gel polish.',
      },
      {
        icon        : 'fa-solid fa-ring',
        title       : 'Bridal Beauty Package',
        price       : 'R4,800',
        duration    : '5 hours',
        description : 'Trial + full bridal hair, makeup & nails on the big day.',
      },
    ],
  } as MenuServices,
};
