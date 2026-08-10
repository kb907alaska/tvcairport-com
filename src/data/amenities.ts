export interface Amenity {
  id: string;
  name: string;
  category: 'Dining & Drinks' | 'Services & Comfort' | 'Accessibility & Family' | 'Shopping & Gifts' | 'Ground Transport & FBO';
  location: string;
  securityState: 'Pre-Security' | 'Post-Security' | 'Both';
  hours: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
}

export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'cherry-capital-grill',
    name: 'Cherry Capital Grill & Bar',
    category: 'Dining & Drinks',
    location: 'Post-Security Gate Area',
    securityState: 'Post-Security',
    hours: '5:00 AM – Last Departure',
    description: 'Featuring local Northern Michigan craft beer on tap, regional wines, artisan sandwiches, fresh breakfast items, and local Traverse City cherry treats.',
    image: '/media/terminal/tvc-terminal-night.webp',
    icon: 'utensils',
    features: ['Local Craft Beer', 'Made-to-Order Breakfast', 'Take-on-board Meals', 'Power Outlets']
  },
  {
    id: 'nobo-market',
    name: 'Nobo Express & Traverse Bay Gifts',
    category: 'Shopping & Gifts',
    location: 'Pre-Security Main Lobby',
    securityState: 'Pre-Security',
    hours: '5:00 AM – 7:00 PM Daily',
    description: 'Grab-and-go espresso drinks, newsstand items, travel essentials, magazines, and authentic Traverse City cherry souvenirs.',
    image: '/media/northern-michigan/tc-visitors-bureau.jpg',
    icon: 'shopping-bag',
    features: ['Fresh Coffee', 'Local Cherry Products', 'Magazines & Books', 'Travel Electronics']
  },
  {
    id: 'tsa-precheck',
    name: 'TSA PreCheck® Dedicated Lane',
    category: 'Services & Comfort',
    location: 'Main Security Checkpoint',
    securityState: 'Pre-Security',
    hours: 'Operates during all scheduled departures',
    description: 'Dedicated expedited security screening lane for enrolled TSA PreCheck travelers.',
    image: '/media/airport/Real-ID.webp',
    icon: 'shield-check',
    features: ['Expedited Screening', 'Shoes Stay On', 'Laptops Stay in Bag']
  },
  {
    id: 'nursing-suite',
    name: 'Mamava® Lactation & Family Room',
    category: 'Accessibility & Family',
    location: 'Post-Security Gate Concourse',
    securityState: 'Post-Security',
    hours: '24/7 Terminal Access',
    description: 'Private, clean, lockable lactation suite equipped with comfortable seating, power outlets, changing station, and soothing lighting.',
    image: '/media/terminal/tvc-terminal-night.webp',
    icon: 'baby',
    features: ['Private & Lockable', 'Power & USB Ports', 'Changing Table', 'ADA Accessible']
  },
  {
    id: 'service-animal-relief',
    name: 'Service Animal & Pet Relief Area',
    category: 'Accessibility & Family',
    location: 'Outside Baggage Claim (Pre-Security) & Post-Security Gate 4',
    securityState: 'Both',
    hours: '24/7 Access',
    description: 'Designated artificial turf pet relief areas with waste disposal bags, hand sanitizer, and freshwater dispensers.',
    image: '/media/airport/tvc-sign-A9736_1.jpg',
    icon: 'dog',
    features: ['Synthetic Turf', 'Waste Receptacles', 'Hand Sanitizer', 'ADA Accessible']
  },
  {
    id: 'avflight-fbo',
    name: 'Avflight TVC General Aviation FBO',
    category: 'Ground Transport & FBO',
    location: 'South Apron Ramp',
    securityState: 'Pre-Security',
    hours: '24/7 Operations',
    description: 'Full-service fixed-base operator providing jet fuel, hangar storage, pilot lounge, executive transport, and charter support.',
    image: '/media/aircraft/tvc-airport-plane.jpg',
    icon: 'plane-tail',
    features: ['Jet A & 100LL Fuel', 'Heated Hangar Space', 'Executive Conference Room', 'Crew Cars']
  }
];
