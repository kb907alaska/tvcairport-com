export interface Meeting {
  id: string;
  title: string;
  committee: 'Full Authority Board' | 'Executive Committee' | 'Air Service & Finance' | 'Bylaws & Governance';
  date: string;
  time: string;
  location: string;
  status: 'Upcoming' | 'Completed' | 'Special Session';
  agendaUrl?: string;
  packetUrl?: string;
  minutesUrl?: string;
  videoUrl?: string;
  description: string;
}

export const MEETINGS_DATA: Meeting[] = [
  {
    id: 'mtg-2026-08-19',
    title: 'Joint Zoning Board Meeting',
    committee: 'Full Authority Board',
    date: '2026-08-19',
    time: '4:00 PM ET',
    location: 'NRAA Board Room, 2nd Floor Terminal & Zoom Webinar',
    status: 'Upcoming',
    agendaUrl: '/docs/NRAA_Agenda_2026-08-19.pdf',
    packetUrl: '/docs/NRAA_Packet_2026-08-19.pdf',
    description: 'Joint Zoning Board public meeting reviewing regional airfield height overlay restrictions and Grand Traverse County zoning compliance.'
  },
  {
    id: 'mtg-2026-08-25',
    title: 'Northwest Regional Airport Authority Regular Board Meeting',
    committee: 'Full Authority Board',
    date: '2026-08-25',
    time: '3:00 PM ET',
    location: 'NRAA Board Room, 2nd Floor Terminal & Live Webcast',
    status: 'Upcoming',
    agendaUrl: '/docs/NRAA_Agenda_2026-08-25.pdf',
    packetUrl: '/docs/NRAA_Packet_2026-08-25.pdf',
    description: 'Monthly regular meeting including presentation of Website Redesign proposal submissions, Gates to the Future terminal expansion progress, and passenger traffic numbers.'
  },
  {
    id: 'mtg-2026-07-21',
    title: 'Northwest Regional Airport Authority Regular Board Meeting',
    committee: 'Full Authority Board',
    date: '2026-07-21',
    time: '9:00 AM ET',
    location: 'NRAA Board Room',
    status: 'Completed',
    agendaUrl: '/docs/NRAA_Agenda_2026-07-21.pdf',
    packetUrl: '/docs/NRAA_Packet_2026-07-21.pdf',
    minutesUrl: '/docs/NRAA_Minutes_2026-07-21.pdf',
    videoUrl: 'https://youtube.com/watch?v=tvcairport-nraa-july2026',
    description: 'Authorization of Website Redesign RFP release, approval of Terminal Gate 4 bridge procurement, FY2027 budget kickoff.'
  },
  {
    id: 'mtg-2026-06-16',
    title: 'NRAA Air Service Development & Finance Committee',
    committee: 'Air Service & Finance',
    date: '2026-06-16',
    time: '10:30 AM ET',
    location: 'NRAA Conference Room B',
    status: 'Completed',
    agendaUrl: '/docs/NRAA_Agenda_2026-06-16.pdf',
    packetUrl: '/docs/NRAA_Packet_2026-06-16.pdf',
    minutesUrl: '/docs/NRAA_Minutes_2026-06-16.pdf',
    description: 'Review of summer seasonal airline capacity, passenger count metrics, and concession revenues.'
  }
];
