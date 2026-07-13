export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book" },
];

const businessAddress = "1801 19th Street, Bakersfield, CA 93301";
const encodedBusinessAddress = encodeURIComponent(businessAddress);

export type MapLinks = {
  google: string;
  apple: string;
  waze: string;
};

export const businessInfo = {
  address: businessAddress,
  phone: "(661) 555-0146",
  email: "hello@thestandardbarbershop.com",
  // Replace this with the shop's real Booksy booking URL.
  booksyUrl: "https://booksy.com/",
  mapLinks: {
    google: `https://www.google.com/maps/search/?api=1&query=${encodedBusinessAddress}`,
    apple: `https://maps.apple.com/?q=${encodedBusinessAddress}`,
    waze: `https://www.waze.com/ul?q=${encodedBusinessAddress}&navigate=yes`,
  } satisfies MapLinks,
  instagramUrl: "https://www.instagram.com/thestandardbarbershop",
  hoursSummary: "Monday to Friday, 9 AM to 7 PM. Saturday, 9 AM to 5 PM. Sunday by appointment.",
  hours: [
    { day: "Monday", hours: "9 AM - 7 PM" },
    { day: "Tuesday", hours: "9 AM - 7 PM" },
    { day: "Wednesday", hours: "9 AM - 7 PM" },
    { day: "Thursday", hours: "9 AM - 7 PM" },
    { day: "Friday", hours: "9 AM - 7 PM" },
    { day: "Saturday", hours: "9 AM - 5 PM" },
    { day: "Sunday", hours: "By appointment" },
  ],
};

export const services = [
  {
    name: "Standard Cut",
    duration: "45 min",
    price: "$38",
    description:
      "A haircut for your regular cleanup with clipper or scissor work, a straight razor neck finish, and simple styling before you head out.",
    highlights: ["Haircut", "Razor neckline", "Style finish"],
  },
  {
    name: "Fade and Beard",
    duration: "60 min",
    price: "$52",
    description:
      "A skin fade or taper with beard shaping and lineup work for clients who want everything cleaned up in one appointment.",
    highlights: ["Fade or taper", "Beard shaping", "Lineup"],
  },
  {
    name: "Longer Texture Cut",
    duration: "60 min",
    price: "$48",
    description:
      "For medium-length hair, texture, or restyling appointments that need more scissor work and time to get the shape right.",
    highlights: ["Scissor work", "Texture", "Restyle"],
  },
  {
    name: "Signature Reset",
    duration: "75 min",
    price: "$68",
    description:
      "A full grooming session with haircut, beard detailing, hot towel finish, and extra time before photos, travel, or a big event.",
    highlights: ["Full service", "Hot towel", "Event ready"],
  },
];

export type Barber = {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string | null;
};

export const fallbackBarbers: Barber[] = [
  {
    name: "Marco Reyes",
    role: "Owner / Senior Barber",
    bio: "Marco has spent more than a decade behind the chair and is known for clean fades, sharp lineups, and cuts that grow out well between visits.",
    specialties: ["Skin fades", "Classic cuts", "Beard shape-ups"],
    image: "/barber-marco.svg",
  },
  {
    name: "Julian Cruz",
    role: "Barber",
    bio: "Julian works with textured styles, tapers, and modern shape work for clients who want a fresh cut that still feels easy to wear.",
    specialties: ["Textured cuts", "Tapers", "Line work"],
    image: "/barber-julian.svg",
  },
  {
    name: "Andre Sutton",
    role: "Barber",
    bio: "Andre is the barber regulars book when they want consistency, solid beard work, and an appointment that starts on time.",
    specialties: ["Business cuts", "Beard cleanup", "Routine maintenance"],
    image: "/barber-andre.svg",
  },
];

export const galleryItems = [
  {
    title: "Chair Detail",
    tag: "Interior",
    description: "A clean, comfortable setup with the kind of details clients notice as soon as they walk in.",
    image: "/gallery-chair.svg",
  },
  {
    title: "Fresh Fade",
    tag: "Craft",
    description: "Close detail on a finished fade that shows the level of blend and cleanup clients come back for.",
    image: "/gallery-fade.svg",
  },
  {
    title: "Community Energy",
    tag: "Atmosphere",
    description: "A room that feels busy in the right way: familiar faces, conversation, and steady neighborhood traffic.",
    image: "/gallery-community.svg",
  },
  {
    title: "Finishing Touch",
    tag: "Experience",
    description: "Hot towel finishes, beard cleanup, and those last mirror-check details that make the appointment feel complete.",
    image: "/gallery-finish.svg",
  },
];

export const testimonials = [
  {
    name: "Tyler M.",
    meta: "Downtown Bakersfield",
    quote:
      "Best cut I’ve had in town. I booked on my lunch break, picked my barber, and the cut was exactly what I asked for.",
  },
  {
    name: "Evan R.",
    meta: "Regular client",
    quote:
      "I come in every two weeks because the timing is easy, the price is clear, and the results stay consistent.",
  },
  {
    name: "Chris A.",
    meta: "First visit turned regular",
    quote:
      "First visit turned into a standing appointment. Good people, no waiting around, and the fade was on point.",
  },
];

export const trustHighlights = [
  {
    title: "Book online fast",
    description: "Pick your service, choose your barber, and send a request in under a minute.",
  },
  {
    title: "Clear pricing",
    description: "Know the time and price before you book so there are no surprises at checkout.",
  },
  {
    title: "Experienced barbers",
    description: "Choose the chair that fits your style, from routine cuts to fades and beard work.",
  },
  {
    title: "Central location",
    description: "Right near downtown Bakersfield with nearby parking and quick map access from your phone.",
  },
];

export const whyChooseUs = [
  {
    title: "Consistent every visit",
    description: "Regulars come back because the timing, communication, and finish stay dependable.",
  },
  {
    title: "Built for busy schedules",
    description: "Online booking, after-work appointments, and straightforward service timing make it easy to fit in.",
  },
  {
    title: "Cuts that fit real life",
    description: "From office-ready cleanups to weekend fades, the menu is built around what clients actually book.",
  },
  {
    title: "Local shop feel",
    description: "A polished room, familiar faces, and service that feels personal without wasting your time.",
  },
];

export const bookingExpectations = [
  "Choose your service, preferred barber, and a time that works for you on Booksy.",
  "Complete your booking online from your phone or desktop without calling the shop.",
  "Get your confirmation directly through Booksy as soon as your appointment is reserved.",
  "Call the shop directly if you want help choosing a barber or fitting in a same-day visit.",
];
