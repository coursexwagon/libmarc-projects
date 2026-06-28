import {
  Home,
  Building2,
  HardHat,
  Hammer,
  Wrench,
  Ruler,
  Construction,
  Truck,
  Camera,
  DoorClosed,
  Zap,
  Recycle,
  Bomb,
  ShieldCheck,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Libmarc Projects",
  tagline: "Demolition • Plant Hire • Security Installations",
  founded: 2021,
  // Two mobile numbers — both used for calls & WhatsApp
  phone1: "078 150 0069",
  phone2: "070 359 9092",
  phone1Intl: "+27781500069",
  phone2Intl: "+27703599092",
  email: "libmarcprojects09@gmail.com",
  address: "32 Page Street, Yeoville, Johannesburg",
  addressShort: "Yeoville, Johannesburg",
  hours: "Mon – Sat: 7:00 AM – 6:00 PM",
  whatsapp1: "27781500069",
  whatsapp2: "27703599092",
  region: "Gauteng, South Africa",
  // Honest small-business touch: typical response window
  responseWindow: "usually within 2 hours during business hours",
};

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
  footnote: string; // honest qualifier shown beneath
};

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years Serving Gauteng", footnote: "Since 2021" },
  { value: 850, suffix: "+", label: "Jobs Completed", footnote: "Across all service lines" },
  { value: 40, suffix: "+", label: "Machines in Fleet", footnote: "Serviced & roadworthy" },
  { value: 0, suffix: "", label: "Lost-Time Incidents", footnote: "2023 – 2024" },
];

export type NavItem = {
  title: string;
  href: string;
  children?: { title: string; href: string; short?: string }[];
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Services",
    href: "/services",
    children: [
      { title: "Demolition & Rock Blasting", href: "/services/demolition-rock-blasting", short: "Controlled demolition & blasting" },
      { title: "Rubble Removal", href: "/services/rubble-removal", short: "Fast site clearance" },
      { title: "Plant Hire", href: "/services/plant-hire", short: "TLBs, excavators, trucks & bakkies" },
      { title: "CCTV Installation", href: "/services/cctv-installation", short: "HD & IP security systems" },
      { title: "Roller Shutter & Gates", href: "/services/roller-shutter-gates", short: "Doors, auto gates & wiring" },
    ],
  },
  { title: "Projects / Gallery", href: "/projects" },
  { title: "Rates & Availability", href: "/rates" },
  { title: "Safety & Compliance", href: "/safety" },
  { title: "Service Areas", href: "/service-areas" },
  { title: "Cost Estimator", href: "/estimate" },
  { title: "Contact / Get Quote", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  subServices?: { name: string; desc: string }[];
  process: { title: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "demolition-rock-blasting",
    title: "Demolition & Rock Blasting",
    short: "Controlled demolition of structures & precision rock blasting.",
    description:
      "We take down structures — full or partial. Concrete slabs, foundations, strip-outs, whole buildings. When solid rock blocks your foundation, we blast it to grade. Permitted, insured, supervised by certified shot-firers. We work residential, commercial, and industrial across Gauteng.",
    icon: Bomb,
    image: "/images/services/demolition.png",
    features: [
      "Full & partial structural demolition",
      "Controlled rock blasting for foundations",
      "Concrete slab & foundation breaking",
      "Strip-outs & interior demolition",
      "Site clearance after demolition",
      "Dust, noise & vibration control",
    ],
    subServices: [
      { name: "Demolition", desc: "Residential, commercial & industrial structures — full or partial take-down with excavators and hydraulic breakers." },
      { name: "Rock Blasting", desc: "Controlled blasting of solid rock for foundations, trenches, and swimming pools. Permitted and supervised by certified shot-firers." },
    ],
    process: [
      { title: "Site Survey", detail: "We come out, look at the structure or rock, check for services (water, elec, sewer), and walk the neighbours within 50 m." },
      { title: "Permits & Paperwork", detail: "We handle the City of Johannesburg demolition/blasting permits, neighbour notifications, and write a method statement." },
      { title: "Mobilise & Execute", detail: "Crew, machines, and supervision arrive on the day. Blasting is done in controlled shots; demolition by machine or hand depending on access." },
      { title: "Clearance", detail: "All rubble loaded and hauled. Site left clean and level. Disposal slips handed over. We walk you through what was done." },
    ],
  },
  {
    slug: "rubble-removal",
    title: "Rubble Removal",
    short: "Fast, affordable removal of building rubble & garden waste.",
    description:
      "Building rubble, garden refuse, concrete, sand, mixed waste — we bring the truck and the labour and get it off your property. Bakkie loads for small jobs, truck loads for big ones. We dispose at licensed municipal landfill sites and bring back the disposal slip if you need one.",
    icon: Recycle,
    image: "/images/services/rubble-removal.png",
    features: [
      "Building rubble & concrete removal",
      "Garden refuse & green waste",
      "Sand, soil & stone removal",
      "Mixed construction waste",
      "Bakkie & truck loads available",
      "Same-day service when booked early",
    ],
    // Rubble removal is a simpler service — only 3 steps
    process: [
      { title: "Book", detail: "Call or WhatsApp with your address and a photo of the rubble. We tell you straight away whether you need a bakkie or a truck." },
      { title: "Load", detail: "Crew arrives with the vehicle, loads everything — labour included. We sweep up before we leave." },
      { title: "Dispose", detail: "Waste hauled to a licensed landfill or recycler. Disposal slip provided on request." },
    ],
  },
  {
    slug: "plant-hire",
    title: "Plant Hire",
    short: "TLBs, excavators, trucks & bakkies for hire — with or without operator.",
    description:
      "TLBs, excavators (1.7T to 20T), tipper trucks, bakkies. Hire by the hour, day, or week — with or without an operator. The fleet isn't brand new but every machine is serviced, roadworthy, and ready to work. We cover all of Gauteng.",
    icon: Construction,
    image: "/images/services/plant-hire.png",
    features: [
      "TLBs (Tractor-Loader-Backhoes)",
      "Excavators (1.7T – 20T)",
      "Tipper trucks (4m³ – 10m³)",
      "Bakkies for light loads",
      "With or without operator",
      "Hourly, daily & weekly rates",
    ],
    subServices: [
      { name: "TLBs for Hire", desc: "Versatile tractor-loader-backhoes for trenching, loading, and light excavation on tight sites." },
      { name: "Excavators for Hire", desc: "Mini (1.7T) to heavy (20T) excavators for deep trenches, bulk excavation, and demolition." },
      { name: "Trucks for Hire", desc: "Tipper trucks for moving sand, stone, rubble, and building materials across Gauteng." },
      { name: "Bakkies for Hire", desc: "Light delivery bakkies for small loads, quick site runs, and equipment transport." },
    ],
    process: [
      { title: "Enquire", detail: "Tell us the job, the site address, and the dates. We'll recommend the right machine and whether you need an operator." },
      { title: "Quote", detail: "Hourly or daily rate, with operator and fuel options clearly itemised. No hidden fuel charges later." },
      { title: "Deliver", detail: "Machine delivered to your site, fuelled and checked. Operator briefed if you've booked one." },
      { title: "Support", detail: "If a machine has an issue on your site, we send a replacement the same day so your job doesn't stall." },
    ],
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    short: "HD & IP camera systems for homes, shops & businesses.",
    description:
      "We install HD and IP camera systems — from a 4-camera home setup to 32-channel for business. Night vision, motion detection, remote viewing on your phone, off-site backup. We'll walk your property, recommend camera positions, and give you a fixed quote. No pushy upsell.",
    icon: Camera,
    image: "/images/services/cctv.png",
    features: [
      "4 to 32-channel systems",
      "HD & IP camera options",
      "Night vision & motion detection",
      "Remote viewing on mobile",
      "Off-site NVR / DVR backup",
      "Ongoing maintenance & support",
    ],
    process: [
      { title: "Site Walk", detail: "We walk your property with you, identify blind spots, and recommend camera positions and coverage. No quoting for cameras you don't need." },
      { title: "Fixed Quote", detail: "You get a written quote for cameras, DVR/NVR, cabling, and installation. The price you see is the price you pay." },
      { title: "Install", detail: "Neat cabling, camera mounting, DVR setup. Most installs are done in a day — bigger systems may take two." },
      { title: "Handover", detail: "We configure your phone app, show you how to review footage and pull clips, and hand over all logins." },
    ],
  },
  {
    slug: "roller-shutter-gates",
    title: "Roller Shutter Doors & Automatic Gates",
    short: "Secure doors, automated gates & electrical wiring installations.",
    description:
      "Roller shutter doors, sliding and swing gates, gate motors, electrical wiring — supplied, installed, and wired by one team. Custom-sized and powder-coated in your colour. We also repair and service existing units. CoC issued on request.",
    icon: DoorClosed,
    image: "/images/services/roller-shutter.png",
    features: [
      "Roller shutter doors (manual & motorised)",
      "Sliding & swing automatic gates",
      "Gate motors & remote automation",
      "Electrical wiring installation",
      "Repairs & servicing of existing units",
      "Custom sizes & powder-coated finishes",
    ],
    subServices: [
      { name: "Roller Shutter Doors", desc: "Manual and motorised roller shutter doors for shops, garages, and warehouses — custom-sized and fitted." },
      { name: "Automatic Gates", desc: "Sliding and swing gates with motors, remotes, and intercoms for homes and complexes." },
      { name: "Electrical Wiring", desc: "Certified electrical wiring for gate motors, CCTV, and general installations. CoC issued on request." },
    ],
    process: [
      { title: "Measure & Quote", detail: "We measure your opening, talk through style and motor options, and give you a written quote with the finish and colour specified." },
      { title: "Fabricate", detail: "Your door or gate is fabricated to size and powder-coated in your chosen colour. Lead time usually 5 – 10 working days." },
      { title: "Install", detail: "Doors/gates fitted, motors installed, electrical wiring run safely to code. Usually a single day on site." },
      { title: "Test & Handover", detail: "Remotes paired, safety sensors tested, and we show you how to operate and maintain it. CoC issued if requested." },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  summary: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "yeoville-demolition",
    title: "Yeoville Apartment Block Demolition",
    category: "Demolition",
    location: "Yeoville, Johannesburg",
    year: "2024",
    image: "/images/services/demolition.png",
    summary: "Full demolition of a condemned 4-storey apartment block in a densely built suburb.",
    description:
      "We took down a condemned 4-storey apartment block in Yeoville. Tight residential street, neighbours close on three sides. We managed dust, noise, and traffic control, and hauled all the rubble within five working days. Site was left clean and level, ready for the developer's next phase.",
  },
  {
    slug: "rosebank-rock-blasting",
    title: "Rosebank Basement Rock Blasting",
    category: "Rock Blasting",
    location: "Rosebank, Johannesburg",
    year: "2024",
    image: "/images/services/rock-blasting.png",
    summary: "Controlled blasting of hard dolomite rock for a double-storey basement excavation.",
    description:
      "A new commercial development in Rosebank needed a 9-metre-deep basement in solid dolomite. Our certified shot-firers ran a series of controlled blasts over three weeks, breaking the rock to grade while keeping vibration within the limits agreed with the consulting engineer for the neighbouring structures.",
  },
  {
    slug: "soweto-rubble-clearance",
    title: "Soweto Building Site Clearance",
    category: "Rubble Removal",
    location: "Soweto, Johannesburg",
    year: "2023",
    image: "/images/services/rubble-removal.png",
    summary: "Removal of 240m³ of mixed building rubble from a housing development site.",
    description:
      "After a housing development in Soweto, the contractor was left with around 240m³ of mixed rubble. We put two tipper trucks and a TLB on it, cleared the site in two days, and disposed of everything at a licensed landfill. Disposal slips handed to the contractor for their records.",
  },
  {
    slug: "sandton-excavator-hire",
    title: "Sandton Office Park Excavation",
    category: "Plant Hire",
    location: "Sandton, Johannesburg",
    year: "2024",
    image: "/images/services/plant-hire.png",
    summary: "20-ton excavator on monthly hire for bulk excavation of a new office park basement.",
    description:
      "A Sandton developer took our 20-ton excavator with operator on a monthly contract for the bulk excavation of a new office park basement. Over six weeks we moved over 12,000m³ of soil, hit every milestone on schedule, and supplied a relief machine during routine servicing so there was no downtime.",
  },
  {
    slug: "honeydew-cctv",
    title: "Honeydew Complex CCTV System",
    category: "CCTV Installation",
    location: "Honeydew, Johannesburg",
    year: "2023",
    image: "/images/services/cctv.png",
    summary: "16-camera HD CCTV system with remote viewing for a 24-unit residential complex.",
    description:
      "A 24-unit residential complex in Honeydew needed full perimeter security. We designed and installed a 16-channel HD CCTV system with night vision, a central NVR with 30-day backup, and a mobile app so the body corporate and the security company could both monitor the complex remotely.",
  },
  {
    slug: "randburg-roller-gate",
    title: "Randburg Shopfront & Auto Gate",
    category: "Roller Shutter & Gates",
    location: "Randburg, Johannesburg",
    year: "2024",
    image: "/images/services/automatic-gate.png",
    summary: "Motorised roller shutter door and automated sliding gate for a retail premises.",
    description:
      "A retail client in Randburg needed to secure their shopfront and loading yard. We fabricated and installed a motorised roller shutter for the shopfront and an automated sliding gate with two remotes and an intercom for the yard. All wired and a CoC issued.",
  },
  {
    slug: "midrand-trenching",
    title: "Midrand Trenching & Pipe Laying",
    category: "Plant Hire",
    location: "Midrand, Johannesburg",
    year: "2023",
    image: "/images/projects/project-3.png",
    summary: "TLB hire for 1.2km of stormwater trenching on a Midrand housing estate.",
    description:
      "A civil contractor in Midrand hired our TLB with operator for 1.2km of stormwater trenching on a new housing estate. The TLB ran for 18 working days. Our operator worked alongside the pipe-laying crew to keep the trench open and backfilled in sequence so the job never stalled.",
  },
  {
    slug: "brixton-interior-stripout",
    title: "Brixton House Interior Strip-Out",
    category: "Demolition",
    location: "Brixton, Johannesburg",
    year: "2023",
    image: "/images/projects/project-6.png",
    summary: "Full interior strip-out of a 1950s house ahead of renovation.",
    description:
      "Ahead of a full renovation, a Brixton homeowner needed the interior of their 1950s house stripped to brick. Ceilings, partition walls, floor coverings, built-in cupboards, all fixtures — out. We completed the strip-out and the rubble removal in a single day.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
};

export const team: TeamMember[] = [
  {
    name: "Marc Ndlovu",
    role: "Founder & Managing Director",
    bio: "Started Libmarc in 2021 with a TLB and a bakkie. Five years later he still answers most of the calls himself and knows every machine in the fleet by its service history.",
    image: "/images/team/team-1.png",
    expertise: ["Demolition", "Plant Hire", "Operations"],
  },
  {
    name: "Lerato Mokoena",
    role: "Operations Manager",
    bio: "Keeps the daily schedule across up to a dozen active sites. If your machine is late, your crew is short, or your disposal slip is missing — Lerato is the one who sorts it.",
    image: "/images/team/team-2.png",
    expertise: ["Scheduling", "Logistics", "Client Service"],
  },
  {
    name: "Sipho Dlamini",
    role: "Site Supervisor & Shot-Firer",
    bio: "14 years on the tools. Certified shot-firer, runs the demolition and blasting crews. Doesn't sign off on a blast until he's walked every neighbour within 50 metres.",
    image: "/images/team/team-3.png",
    expertise: ["Demolition", "Rock Blasting", "Safety"],
  },
  {
    name: "Thandiwe Khumalo",
    role: "Installations Lead",
    bio: "Leads the CCTV, roller shutter and gate install team. Qualified electrician, issues the CoCs, and won't sign off on a job she wouldn't put her own name on.",
    image: "/images/team/team-4.png",
    expertise: ["CCTV", "Automation", "Electrical"],
  },
  {
    name: "Johan Pretorius",
    role: "Plant & Fleet Manager",
    bio: "Looks after the 40+ machine fleet. If a machine breaks down on your site, Johan's the one who gets the replacement out to you the same day.",
    image: "/images/team/team-5.png",
    expertise: ["Fleet", "Maintenance", "Logistics"],
  },
  {
    name: "Refilwe Sithole",
    role: "Quotations & Estimating",
    bio: "Turns site visits into written quotes. Most enquiries get a quote the same business day — Refilwe is the one who writes them and makes sure the numbers are right.",
    image: "/images/team/team-6.png",
    expertise: ["Estimating", "Client Service"],
  },
];

/**
 * Testimonials — varied ratings (mix of 4 and 5 stars), varied voice,
 * specific gripes alongside praise, NO photos (UI uses initials).
 * `initials` is used for the avatar circle.
 */
export type Testimonial = {
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number; // 4 or 5 — never all 5
  initials: string;
  project: string;
  verified?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Bongani Mthembu",
    title: "Homeowner",
    company: "Brixton",
    quote:
      "They came out the same day I called to look at the job. Quote was on WhatsApp that evening — R3,400 for stripping the inside of my old house and taking the rubble. Crew arrived at 7am sharp, done by 4pm. No fuss. The price they quoted is the price I paid.",
    rating: 5,
    initials: "BM",
    project: "Brixton House Strip-Out",
    verified: true,
  },
  {
    name: "Lerato Khumalo",
    title: "Body Corporate Treasurer",
    company: "Honeydew Complex",
    quote:
      "Our complex needed CCTV and we'd had two quotes that felt overpriced. Thandiwe from Libmarc walked the property properly, pointed out blind spots the other guys missed, and came in about R4k cheaper. Only gripe: install took a day longer than promised because of loadshedding. They communicated it though, which is more than I can say for most contractors.",
    rating: 5,
    initials: "LK",
    project: "Honeydew CCTV",
    verified: true,
  },
  {
    name: "Frans van der Merwe",
    title: "Site Agent",
    company: "Sandton Developer",
    quote:
      "Hired their 20-ton excavator and operator for six weeks on our basement dig. Machine was solid, operator knew his stuff, and when it needed servicing they swapped it out same-day — no downtime. Will use them again on the next phase.",
    rating: 5,
    initials: "FV",
    project: "Sandton Excavation",
    verified: true,
  },
  {
    name: "Palesa Dlamini",
    title: "Shop Owner",
    company: "Randburg",
    quote:
      "New roller shutter and auto gate for my shop. Quality is good and the price was fair. Took half a day longer than they said because they had to wait for a part, but they let me know. The remotes work from quite far down the road which is nice. Would recommend but ask for a firm timeline.",
    rating: 4,
    initials: "PD",
    project: "Randburg Shopfront",
    verified: true,
  },
  {
    name: "Thabo Radebe",
    title: "Building Contractor",
    company: "Midrand",
    quote:
      "Used Libmarc for TLB hire on a trenching job in Midrand. Hourly rate was the best of the three quotes I got, machine wasn't brand new but ran fine for the full two weeks. Operator was switched on — knew to wait for the pipe crew instead of just trenching ahead. They're on my shortlist now.",
    rating: 5,
    initials: "TR",
    project: "Midrand Trenching",
    verified: true,
  },
  {
    name: "Naledi Mokoena",
    title: "Homeowner",
    company: "Soweto",
    quote:
      "After my builder just stopped pitching up I had a mountain of rubble on my property. Called Libmarc on a Tuesday, two trucks arrived Wednesday morning. Crew was friendly and they swept up afterwards which I didn't expect. Knocked off one star because they couldn't give me a firm arrival time, just 'morning' — but the job itself was spot on.",
    rating: 4,
    initials: "NM",
    project: "Soweto Clearance",
    verified: true,
  },
];

export type RateItem = {
  service: string;
  unit: string;
  price: string;
  note: string;
  popular?: boolean;
};

export const rates: RateItem[] = [
  { service: "Demolition (structural)", unit: "per m²", price: "from R450", note: "Includes break-up & stacking. Excludes rubble removal.", popular: true },
  { service: "Rock Blasting", unit: "per m³", price: "from R850", note: "Controlled blasting. Permits & shot-firer included." },
  { service: "Rubble Removal — Bakkie Load", unit: "per load", price: "from R900", note: "±1.5m³. Labour & disposal included." },
  { service: "Rubble Removal — Truck Load", unit: "per load", price: "from R1,800", note: "±6m³. Labour & disposal included.", popular: true },
  { service: "TLB Hire (with operator)", unit: "per hour", price: "from R650", note: "Min 4 hours. Fuel extra." },
  { service: "Excavator 20T (with operator)", unit: "per hour", price: "from R1,150", note: "Min 8 hours. Fuel extra." },
  { service: "Tipper Truck Hire", unit: "per hour", price: "from R750", note: "Min 4 hours. Fuel extra." },
  { service: "CCTV System (4 cameras + DVR)", unit: "installed", price: "from R7,500", note: "Includes cabling & mobile app setup.", popular: true },
  { service: "CCTV System (8 cameras + NVR)", unit: "installed", price: "from R14,500", note: "Includes cabling & mobile app setup." },
  { service: "Roller Shutter Door (manual)", unit: "per unit", price: "from R6,500", note: "Custom-sized & fitted." },
  { service: "Roller Shutter Door (motorised)", unit: "per unit", price: "from R12,500", note: "Includes motor & electrical." },
  { service: "Automatic Sliding Gate", unit: "installed", price: "from R15,000", note: "Gate, motor, 2 remotes & wiring." },
  { service: "Electrical Wiring (per point)", unit: "per point", price: "from R350", note: "Certified. CoC issued on request." },
];

// When the rates were last reviewed — adds credibility & is shown on the rates page
export const ratesLastReviewed = "August 2024";

export const rateNotes = [
  "All prices are starting rates and may vary based on site access, scope, and materials.",
  "A free site visit is available for projects in Greater Johannesburg — quotes are issued the same business day.",
  "Plant hire is subject to a minimum hire period. Fuel is charged separately or supplied by the client.",
  "Discounts available for weekly and monthly plant hire, and for bundled service packages.",
  "All work is covered by R5 million public liability insurance. Disposal slips provided for all rubble removal.",
];

export type ServiceArea = {
  name: string;
  description: string;
  postcodes: string;
};

export const serviceAreas: ServiceArea[] = [
  { name: "Johannesburg CBD & Inner City", description: "Yeoville, Hillbrow, Berea, Joubert Park, Doornfontein", postcodes: "2001, 2094, 2198" },
  { name: "Northern Suburbs", description: "Sandton, Rosebank, Randburg, Fourways, Midrand", postcodes: "2196, 2194, 2128, 1685, 1686" },
  { name: "Eastern Suburbs", description: "Bedfordview, Edenvale, Germiston, Boksburg, Kempton Park", postcodes: "2008, 1609, 2090, 1419" },
  { name: "Western Suburbs", description: "Roodepoort, Honeydew, Constantia Kloof, Weltevreden Park", postcodes: "1724, 2169, 1709" },
  { name: "Southern Suburbs", description: "Soweto, Lenasia, Ennerdale, Orange Farm, Kibler Park", postcodes: "1818, 1820, 1832" },
  { name: "Alexandra & surrounds", description: "Alexandra, Marlboro, Wynberg, Kew, Lombardy East", postcodes: "2090, 2018, 2094" },
];

export const certifications = [
  "Public Liability Insurance (R5M)",
  "Certified Shot-Firers on Staff",
  "COID Registration (Workmen's Comp)",
  "City of Johannesburg Permits",
  "Electrical CoC Issued on Request",
  "PSIRA Registered (Security)",
];

export const safetyPractices = [
  { title: "Daily Risk Assessment", desc: "Every site starts with a documented Hazard Identification & Risk Assessment (HIRA) signed off by the supervisor before any work begins." },
  { title: "Certified Shot-Firers", desc: "All rock blasting is supervised by certified shot-firers with valid blasting licences. A blast plan is drawn up for every job." },
  { title: "PPE On Every Site", desc: "Hard hats, safety boots, high-viz, eye and ear protection issued to every crew member, every shift. No exceptions." },
  { title: "Public Liability Cover", desc: "R5 million public liability insurance protects our clients and their neighbours on every project, big or small." },
  { title: "COID Registered", desc: "We are registered with the Compensation Fund (COID) — all our workers are covered for on-site injury." },
  { title: "Permits & Notifications", desc: "Demolition and blasting permits, and neighbour notifications within 50 m, are handled in full before any work begins." },
];

/**
 * clientTypes replaces the old fake "clientLogos" list (which were generic
 * made-up company names presented as real clients — a classic AI tell).
 * These are honest categories of clients we work for — no fake brand names.
 */
export const clientTypes: string[] = [
  "Homeowners",
  "Body corporates",
  "Building contractors",
  "Retail shops & restaurants",
  "Schools & churches",
  "Property developers",
];
