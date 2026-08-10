export interface Flight {
  id: string;
  type: 'arrival' | 'departure';
  flightNumber: string;
  airline: string;
  airlineCode: string;
  logo: string;
  city: string;
  cityCode: string;
  scheduledTime: string;
  updatedTime: string;
  status: 'ON TIME' | 'DELAYED' | 'BOARDING' | 'ARRIVED' | 'CANCELLED' | 'SCHEDULED';
  gate: string;
  baggageCarousel?: string;
  notes?: string;
}

export const FLIGHTS_DATA: Flight[] = [
  // Arrivals
  {
    id: 'arr-1',
    type: 'arrival',
    flightNumber: 'UA 1234',
    airline: 'United Airlines',
    airlineCode: 'UA',
    logo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=120&q=80',
    city: 'Chicago (O\'Hare)',
    cityCode: 'ORD',
    scheduledTime: '2:14 PM',
    updatedTime: '2:14 PM',
    status: 'ON TIME',
    gate: 'Gate 3',
    baggageCarousel: 'Carousel 2',
    notes: 'In flight · Expected on runway at 2:10 PM'
  },
  {
    id: 'arr-2',
    type: 'arrival',
    flightNumber: 'DL 2841',
    airline: 'Delta Air Lines',
    airlineCode: 'DL',
    logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80',
    city: 'Detroit',
    cityCode: 'DTW',
    scheduledTime: '2:45 PM',
    updatedTime: '3:05 PM',
    status: 'DELAYED',
    gate: 'Gate 2',
    baggageCarousel: 'Carousel 1',
    notes: 'Delayed due to weather system in Detroit'
  },
  {
    id: 'arr-3',
    type: 'arrival',
    flightNumber: 'AA 4921',
    airline: 'American Airlines',
    airlineCode: 'AA',
    logo: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=120&q=80',
    city: 'Dallas / Fort Worth',
    cityCode: 'DFW',
    scheduledTime: '3:20 PM',
    updatedTime: '3:20 PM',
    status: 'ON TIME',
    gate: 'Gate 5',
    baggageCarousel: 'Carousel 3',
    notes: 'On schedule'
  },
  {
    id: 'arr-4',
    type: 'arrival',
    flightNumber: 'G4 804',
    airline: 'Allegiant Air',
    airlineCode: 'G4',
    logo: 'https://images.unsplash.com/photo-1520437358207-323b43b57539?auto=format&fit=crop&w=120&q=80',
    city: 'St. Petersburg / Tampa',
    cityCode: 'PIE',
    scheduledTime: '4:10 PM',
    updatedTime: '4:10 PM',
    status: 'ON TIME',
    gate: 'Gate 1',
    baggageCarousel: 'Carousel 1',
    notes: 'Seasonal Direct Service'
  },
  {
    id: 'arr-5',
    type: 'arrival',
    flightNumber: 'SY 104',
    airline: 'Sun Country Airlines',
    airlineCode: 'SY',
    logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80',
    city: 'Minneapolis / St. Paul',
    cityCode: 'MSP',
    scheduledTime: '5:30 PM',
    updatedTime: '5:30 PM',
    status: 'SCHEDULED',
    gate: 'Gate 4',
    baggageCarousel: 'Carousel 2',
    notes: 'On schedule'
  },
  {
    id: 'arr-6',
    type: 'arrival',
    flightNumber: 'DL 4812',
    airline: 'Delta Air Lines',
    airlineCode: 'DL',
    logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80',
    city: 'Atlanta',
    cityCode: 'ATL',
    scheduledTime: '6:15 PM',
    updatedTime: '6:15 PM',
    status: 'ARRIVED',
    gate: 'Gate 2',
    baggageCarousel: 'Carousel 2',
    notes: 'Arrived gate at 6:12 PM'
  },

  // Departures
  {
    id: 'dep-1',
    type: 'departure',
    flightNumber: 'UA 1892',
    airline: 'United Airlines',
    airlineCode: 'UA',
    logo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=120&q=80',
    city: 'Chicago (O\'Hare)',
    cityCode: 'ORD',
    scheduledTime: '2:55 PM',
    updatedTime: '2:55 PM',
    status: 'BOARDING',
    gate: 'Gate 3',
    notes: 'Now boarding Groups 1-3'
  },
  {
    id: 'dep-2',
    type: 'departure',
    flightNumber: 'DL 1402',
    airline: 'Delta Air Lines',
    airlineCode: 'DL',
    logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80',
    city: 'Detroit',
    cityCode: 'DTW',
    scheduledTime: '3:45 PM',
    updatedTime: '3:45 PM',
    status: 'ON TIME',
    gate: 'Gate 2',
    notes: 'On schedule'
  },
  {
    id: 'dep-3',
    type: 'departure',
    flightNumber: 'AA 2109',
    airline: 'American Airlines',
    airlineCode: 'AA',
    logo: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=120&q=80',
    city: 'Charlotte',
    cityCode: 'CLT',
    scheduledTime: '4:20 PM',
    updatedTime: '4:20 PM',
    status: 'ON TIME',
    gate: 'Gate 5',
    notes: 'On schedule'
  },
  {
    id: 'dep-4',
    type: 'departure',
    flightNumber: 'UA 3401',
    airline: 'United Airlines',
    airlineCode: 'UA',
    logo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=120&q=80',
    city: 'Denver',
    cityCode: 'DEN',
    scheduledTime: '5:10 PM',
    updatedTime: '5:35 PM',
    status: 'DELAYED',
    gate: 'Gate 3',
    notes: 'Aircraft delay from inbound flight'
  },
  {
    id: 'dep-5',
    type: 'departure',
    flightNumber: 'G4 805',
    airline: 'Allegiant Air',
    airlineCode: 'G4',
    logo: 'https://images.unsplash.com/photo-1520437358207-323b43b57539?auto=format&fit=crop&w=120&q=80',
    city: 'Punta Gorda / Fort Myers',
    cityCode: 'PGD',
    scheduledTime: '6:00 PM',
    updatedTime: '6:00 PM',
    status: 'ON TIME',
    gate: 'Gate 1',
    notes: 'On schedule'
  }
];

export const AIRLINES_DATA = [
  {
    name: 'American Airlines',
    code: 'AA',
    phone: '1-800-433-7300',
    website: 'https://www.aa.com',
    baggageUrl: 'https://www.aa.com/i18n/travel-info/baggage/baggage-info.jsp',
    gates: 'Gate 5',
    destinations: ['Chicago (ORD)', 'Charlotte (CLT)', 'Dallas/Fort Worth (DFW)', 'Washington (DCA)'],
    logo: '/images/airlines/american.png',
    description: 'Serving TVC with daily nonstops to major hubs across the US.'
  },
  {
    name: 'Delta Air Lines',
    code: 'DL',
    phone: '1-800-221-1212',
    website: 'https://www.delta.com',
    baggageUrl: 'https://www.delta.com/us/en/baggage/overview',
    gates: 'Gates 2 & 4',
    destinations: ['Atlanta (ATL)', 'Detroit (DTW)', 'Minneapolis (MSP)', 'New York (LGA)'],
    logo: '/images/airlines/delta.png',
    description: 'Providing extensive year-round connection options through Detroit and seasonal hubs.'
  },
  {
    name: 'United Airlines',
    code: 'UA',
    phone: '1-800-864-8331',
    website: 'https://www.united.com',
    baggageUrl: 'https://www.united.com/en/us/fly/baggage.html',
    gates: 'Gate 3',
    destinations: ['Chicago (ORD)', 'Denver (DEN)', 'Newark / New York (EWR)'],
    logo: '/images/airlines/united.png',
    description: 'Direct access to Midwest and Mountain regional connections daily.'
  },
  {
    name: 'Allegiant Air',
    code: 'G4',
    phone: '1-702-505-8888',
    website: 'https://www.allegiantair.com',
    baggageUrl: 'https://www.allegiantair.com/baggage-info',
    gates: 'Gate 1',
    destinations: ['St. Petersburg / Tampa (PIE)', 'Punta Gorda / Fort Myers (PGD)', 'Orlando / Sanford (SFB)'],
    logo: '/images/airlines/allegiant.png',
    description: 'Low-cost non-stop flights connecting TVC directly to Florida sunshine destinations.'
  },
  {
    name: 'Sun Country Airlines',
    code: 'SY',
    phone: '1-651-905-2737',
    website: 'https://www.suncountry.com',
    baggageUrl: 'https://www.suncountry.com/baggage',
    gates: 'Gate 4',
    destinations: ['Minneapolis / St. Paul (MSP)'],
    logo: '/images/airlines/suncountry.png',
    description: 'Seasonal flights connecting Northern Michigan to the Twin Cities.'
  }
];
