export interface Destination {
  id: string;
  city: string;
  state: string;
  airportCode: string;
  airportName: string;
  type: 'Year-Round' | 'Seasonal Summer' | 'Seasonal Winter';
  airlines: string[];
  flightDuration: string;
  region: 'Midwest' | 'East Coast' | 'South' | 'West' | 'Florida';
  image: string;
  description: string;
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'ord',
    city: 'Chicago',
    state: 'IL',
    airportCode: 'ORD',
    airportName: 'Chicago O\'Hare International',
    type: 'Year-Round',
    airlines: ['American Airlines', 'United Airlines'],
    flightDuration: '1h 15m',
    region: 'Midwest',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=600&q=80',
    description: 'Multiple daily direct nonstops connecting Northern Michigan to global hubs in Chicago.'
  },
  {
    id: 'dtw',
    city: 'Detroit',
    state: 'MI',
    airportCode: 'DTW',
    airportName: 'Detroit Metropolitan Wayne County',
    type: 'Year-Round',
    airlines: ['Delta Air Lines'],
    flightDuration: '1h 00m',
    region: 'Midwest',
    image: 'https://images.unsplash.com/photo-1572293007244-8b60335d2b7d?auto=format&fit=crop&w=600&q=80',
    description: 'Michigan\'s major connecting gateway with up to 5 daily Delta departures.'
  },
  {
    id: 'atl',
    city: 'Atlanta',
    state: 'GA',
    airportCode: 'ATL',
    airportName: 'Hartsfield-Jackson Atlanta International',
    type: 'Year-Round',
    airlines: ['Delta Air Lines'],
    flightDuration: '2h 15m',
    region: 'South',
    image: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&w=600&q=80',
    description: 'Direct connections to the Southeast and South America via Delta\'s premier world hub.'
  },
  {
    id: 'clt',
    city: 'Charlotte',
    state: 'NC',
    airportCode: 'CLT',
    airportName: 'Charlotte Douglas International',
    type: 'Seasonal Summer',
    airlines: ['American Airlines'],
    flightDuration: '2h 05m',
    region: 'East Coast',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=600&q=80',
    description: 'Summer seasonal direct access to Charlotte and Atlantic coast connections.'
  },
  {
    id: 'dfw',
    city: 'Dallas / Fort Worth',
    state: 'TX',
    airportCode: 'DFW',
    airportName: 'Dallas/Fort Worth International',
    type: 'Seasonal Summer',
    airlines: ['American Airlines'],
    flightDuration: '2h 45m',
    region: 'South',
    image: 'https://images.unsplash.com/photo-1545641203-7d072a14e3b2?auto=format&fit=crop&w=600&q=80',
    description: 'Direct flights to Texas and West Coast connections during peak travel months.'
  },
  {
    id: 'den',
    city: 'Denver',
    state: 'CO',
    airportCode: 'DEN',
    airportName: 'Denver International',
    type: 'Seasonal Summer',
    airlines: ['United Airlines'],
    flightDuration: '2h 50m',
    region: 'West',
    image: 'https://images.unsplash.com/photo-1546156929-a4c0ac411f47?auto=format&fit=crop&w=600&q=80',
    description: 'Seamless summer access to the Rocky Mountains and Western destinations.'
  },
  {
    id: 'msp',
    city: 'Minneapolis / St. Paul',
    state: 'MN',
    airportCode: 'MSP',
    airportName: 'Minneapolis–Saint Paul International',
    type: 'Year-Round',
    airlines: ['Delta Air Lines', 'Sun Country Airlines'],
    flightDuration: '1h 25m',
    region: 'Midwest',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Direct Upper Midwest connections connecting Traverse City to the Twin Cities.'
  },
  {
    id: 'lga',
    city: 'New York (LaGuardia)',
    state: 'NY',
    airportCode: 'LGA',
    airportName: 'LaGuardia Airport',
    type: 'Seasonal Summer',
    airlines: ['Delta Air Lines', 'American Airlines'],
    flightDuration: '2h 00m',
    region: 'East Coast',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80',
    description: 'Direct summer connection between Manhattan and Northern Michigan.'
  },
  {
    id: 'ewr',
    city: 'Newark / New York',
    state: 'NJ',
    airportCode: 'EWR',
    airportName: 'Newark Liberty International',
    type: 'Seasonal Summer',
    airlines: ['United Airlines'],
    flightDuration: '2h 05m',
    region: 'East Coast',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80',
    description: 'Direct access to the NYC metro area and North Atlantic international flights.'
  },
  {
    id: 'pie',
    city: 'St. Petersburg / Tampa',
    state: 'FL',
    airportCode: 'PIE',
    airportName: 'St. Pete–Clearwater International',
    type: 'Seasonal Winter',
    airlines: ['Allegiant Air'],
    flightDuration: '2h 40m',
    region: 'Florida',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'Ultra low-cost non-stop snowbird service to Tampa Bay beaches.'
  },
  {
    id: 'pgd',
    city: 'Punta Gorda / Fort Myers',
    state: 'FL',
    airportCode: 'PGD',
    airportName: 'Punta Gorda Airport',
    type: 'Seasonal Winter',
    airlines: ['Allegiant Air'],
    flightDuration: '2h 45m',
    region: 'Florida',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
    description: 'Direct winter sunshine flights to Southwest Florida and Sanibel Island.'
  },
  {
    id: 'dca',
    city: 'Washington',
    state: 'DC',
    airportCode: 'DCA',
    airportName: 'Ronald Reagan Washington National',
    type: 'Seasonal Summer',
    airlines: ['American Airlines'],
    flightDuration: '1h 55m',
    region: 'East Coast',
    image: 'https://images.unsplash.com/photo-1501469537001-5109917b1f8d?auto=format&fit=crop&w=600&q=80',
    description: 'Direct access to the nation\'s capital during peak summer travel.'
  }
];
