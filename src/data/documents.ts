export interface DocumentItem {
  id: string;
  title: string;
  category: 'Agenda' | 'Minutes' | 'Packet' | 'Financial Report' | 'RFP / Bid' | 'Public Notice' | 'Policy' | 'Environmental' | 'Master Plan';
  department: 'Board of Directors' | 'Air Service & Ops' | 'Finance & Admin' | 'Engineering & Planning' | 'Procurement';
  year: number;
  date: string;
  fileSize: string;
  fileType: 'PDF';
  description: string;
  downloadCount: number;
  url: string;
}

export const DOCUMENTS_DATA: DocumentItem[] = [
  {
    id: 'doc-rfp-2026-01',
    title: 'NRAA RFP 2026-01 Website Redesign & CMS Replacement',
    category: 'RFP / Bid',
    department: 'Procurement',
    year: 2026,
    date: '2026-07-28',
    fileSize: '3.4 MB',
    fileType: 'PDF',
    description: 'Official Procurement document for Cherry Capital Airport full digital experience & Craft CMS modernization.',
    downloadCount: 142,
    url: '/docs/NRAA_RFP_2026-01_Website_Redesign.pdf'
  },
  {
    id: 'doc-rfp-addendum-1',
    title: 'NRAA RFP 2026-01 Addendum No. 1 — Vendor Q&A Responses',
    category: 'RFP / Bid',
    department: 'Procurement',
    year: 2026,
    date: '2026-08-10',
    fileSize: '480 KB',
    fileType: 'PDF',
    description: 'Addendum addressing pre-proposal vendor inquiries submitted by August 10, 2026.',
    downloadCount: 89,
    url: '/docs/NRAA_RFP_2026-01_Addendum_1.pdf'
  },
  {
    id: 'doc-board-packet-2026-07',
    title: 'NRAA Regular Board Meeting Complete Packet — July 2026',
    category: 'Packet',
    department: 'Board of Directors',
    year: 2026,
    date: '2026-07-21',
    fileSize: '14.8 MB',
    fileType: 'PDF',
    description: 'Comprehensive meeting materials, financial reports, operational charts, and director report for July 21, 2026.',
    downloadCount: 312,
    url: '/docs/NRAA_Board_Packet_2026-07-21.pdf'
  },
  {
    id: 'doc-board-minutes-2026-06',
    title: 'NRAA Approved Board Meeting Minutes — June 2026',
    category: 'Minutes',
    department: 'Board of Directors',
    year: 2026,
    date: '2026-06-16',
    fileSize: '1.1 MB',
    fileType: 'PDF',
    description: 'Approved minutes from the June 16, 2026 Regular Authority Board Session.',
    downloadCount: 205,
    url: '/docs/NRAA_Board_Minutes_2026-06-16.pdf'
  },
  {
    id: 'doc-master-plan-2025',
    title: 'TVC Airport Master Plan & Gates to the Future Terminal Layout',
    category: 'Master Plan',
    department: 'Engineering & Planning',
    year: 2025,
    date: '2025-11-15',
    fileSize: '28.2 MB',
    fileType: 'PDF',
    description: 'Long-range terminal expansion plan, runway capacity analysis, and noise contour documentation.',
    downloadCount: 1850,
    url: '/docs/TVC_Master_Plan_2025_Final.pdf'
  },
  {
    id: 'doc-audited-financials-2025',
    title: 'NRAA Annual Comprehensive Financial Report FY 2025',
    category: 'Financial Report',
    department: 'Finance & Admin',
    year: 2025,
    date: '2025-12-31',
    fileSize: '8.6 MB',
    fileType: 'PDF',
    description: 'Independent audit report, revenues, debt service breakdown, and passenger facility charge (PFC) disclosures.',
    downloadCount: 540,
    url: '/docs/NRAA_Audited_Financials_FY2025.pdf'
  },
  {
    id: 'doc-environmental-assessment-2026',
    title: 'Terminal Expansion Project Environmental Assessment & FONSI',
    category: 'Environmental',
    department: 'Engineering & Planning',
    year: 2026,
    date: '2026-03-10',
    fileSize: '12.4 MB',
    fileType: 'PDF',
    description: 'FAA-approved environmental impact evaluation and Finding of No Significant Impact declaration.',
    downloadCount: 420,
    url: '/docs/TVC_Terminal_Expansion_EA_FONSI.pdf'
  },
  {
    id: 'doc-policy-minimum-standards',
    title: 'NRAA Minimum Standards for General Aviation & Commercial Services',
    category: 'Policy',
    department: 'Air Service & Ops',
    year: 2025,
    date: '2025-05-18',
    fileSize: '2.3 MB',
    fileType: 'PDF',
    description: 'Operational rules, insurance requirements, and safety standards for air operators at TVC.',
    downloadCount: 310,
    url: '/docs/NRAA_Minimum_Operating_Standards.pdf'
  }
];
