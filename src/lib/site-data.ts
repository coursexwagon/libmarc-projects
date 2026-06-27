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
  founded: 2015,
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
};

export const stats = [
  { value: 9, suffix: "+", label: "Years Serving Gauteng" },
  { value: 850, suffix: "+", label: "Projects Completed" },
  { value: 40, suffix: "+", label: "Machines in Fleet" },
  { value: 100, suffix: "%", label: "Safety Compliance" },
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
  process: { step: string; title: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "demolition-rock-blasting",
    title: "Demolition & Rock Blasting",
    short: "Controlled demolition of structures & precision rock blasting.",
    description:
      "From partial strip-outs to full structural demolition, our team handles residential, commercial, and industrial demolition safely and efficiently. Where solid rock stands in the way of your foundation, our controlled rock blasting service breaks it down to grade — fully permitted, insured, and supervised by certified shot-firers.",
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
      { step: "01", title: "Site Survey", detail: "We inspect the structure or rock, check utilities, and assess dust, noise, and vibration risk to neighbours." },
      { step: "02", title: "Permits & Plan", detail: "We secure all demolition/blasting permits from the City of Johannesburg and prepare a method statement." },
      { step: "03", title: "Execution", detail: "Demolition or blasting carried out with the right machinery, supervision, and safety zone control." },
      { step: "04", title: "Clearance", detail: "All rubble is removed and the site is left clean, level, and ready for your next phase." },
    ],
  },
  {
    slug: "rubble-removal",
    title: "Rubble Removal",
    short: "Fast, affordable removal of building rubble & garden waste.",
    description:
      "Whether you're clearing a building site, demolishing a wall, or tidying up the garden, our rubble removal service gets the waste off your property quickly. We supply the bakkie, truck, and labour — you get a clean site. We dispose legally at licensed municipal landfill sites and recycling centres.",
    icon: Recycle,
    image: "/images/services/rubble-removal.png",
    features: [
      "Building rubble & concrete removal",
      "Garden refuse & green waste",
      "Sand, soil & stone removal",
      "Mixed construction waste",
      "Bakkie & truck loads available",
      "Same-day service available",
    ],
    process: [
      { step: "01", title: "Book", detail: "Call or WhatsApp us with your address and a photo of the rubble — we confirm the right vehicle size." },
      { step: "02", title: "Quote", detail: "You get a transparent upfront price per load. No hidden fees, no surprises on site." },
      { step: "03", title: "Load", detail: "Our team arrives with the vehicle and loads all the rubble — labour included." },
      { step: "04", title: "Dispose", detail: "Waste is transported to a licensed landfill or recycling facility. You get a clean site." },
    ],
  },
  {
    slug: "plant-hire",
    title: "Plant Hire",
    short: "TLBs, excavators, trucks & bakkies for hire — with or without operator.",
    description:
      "Our plant hire fleet keeps your project moving. Hire TLBs, excavators, tipper trucks, and bakkies by the hour, day, or week — with or without a qualified operator. Every machine is serviced, roadworthy, and ready to work across Gauteng.",
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
      { step: "01", title: "Enquire", detail: "Tell us the job, site address, and dates. We recommend the right machine and operator." },
      { step: "02", title: "Quote", detail: "Get an hourly or daily rate with operator and fuel options clearly itemised." },
      { step: "03", title: "Deliver", detail: "The machine is delivered to your site, fuelled and checked, ready to work." },
      { step: "04", title: "Support", detail: "On-site support and rapid swap-out if a machine has any issue during your hire." },
    ],
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    short: "HD & IP camera systems for homes, shops & businesses.",
    description:
      "Protect what matters with a professionally installed CCTV system. We supply and install HD and IP camera systems — from a 4-camera home setup to a 32-channel business solution with remote viewing on your phone, night vision, and off-site backup.",
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
      { step: "01", title: "Site Walk", detail: "We walk your property, identify blind spots, and recommend camera positions and coverage." },
      { step: "02", title: "Quote", detail: "You receive a fixed-quote for cameras, DVR/NVR, cabling, and installation — no surprises." },
      { step: "03", title: "Install", detail: "Neat cabling, camera mounting, and DVR setup — usually completed in a single day." },
      { step: "04", title: "Handover", detail: "We configure your phone app, show you how to review footage, and hand over all logins." },
    ],
  },
  {
    slug: "roller-shutter-gates",
    title: "Roller Shutter Doors & Automatic Gates",
    short: "Secure doors, automated gates & electrical wiring installations.",
    description:
      "Secure your property with custom roller shutter doors and automatic gates — supplied, installed, and wired by one team. We also handle the electrical wiring, motors, and automation so your gate or door works perfectly from day one.",
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
      { step: "01", title: "Measure", detail: "We measure your opening, discuss style and motor options, and confirm automation needs." },
      { step: "02", title: "Manufacture", detail: "Your door or gate is fabricated to size and powder-coated in your chosen colour." },
      { step: "03", title: "Install", detail: "Doors/gates are fitted, motors installed, and electrical wiring is run safely to code." },
      { step: "04", title: "Test", detail: "Remotes are paired, safety sensors tested, and we show you how to operate and maintain it." },
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
      "We carried out the full structural demolition of a condemned 4-storey apartment block in Yeoville. Working in a tight residential street, we managed dust, noise, and traffic control, then removed all 180m³ of rubble within five working days — leaving the site clean and ready for redevelopment.",
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
      "A new commercial development in Rosebank required a 9-metre-deep basement in solid dolomite rock. Our certified shot-firers carried out a series of controlled blasts over three weeks, breaking the rock to grade while keeping vibration within strict limits for neighbouring structures.",
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
      "After a housing development in Soweto, the contractor was left with 240m³ of mixed rubble. Our team deployed two tipper trucks and a TLB, clearing the entire site in two days and disposing of all waste at a licensed landfill — with disposal slips provided for the contractor's records.",
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
      "A Sandton developer hired our 20-ton excavator with operator on a monthly contract for the bulk excavation of a new office park basement. Over six weeks we moved over 12,000m³ of soil, hitting every milestone on schedule and supplying a relief machine during routine servicing.",
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
      "A 24-unit residential complex in Honeydew needed full perimeter security. We designed and installed a 16-channel HD CCTV system with night vision, a central NVR with 30-day backup, and a mobile app so the body corporate and security could monitor the complex from anywhere.",
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
      "A retail client in Randburg needed to secure their shopfront and loading yard. We manufactured and installed a motorised roller shutter door for the shopfront and an automated sliding gate with two remotes and an intercom for the yard — all fully wired with a CoC issued.",
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
      "A civil contractor in Midrand hired our TLB with operator for 1.2km of stormwater trenching on a new housing estate. The TLB ran for 18 working days, and our operator worked alongside the pipe-laying crew to keep the trench open and backfilled in sequence.",
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
      "Ahead of a full renovation, a Brixton homeowner needed the interior of their 1950s house stripped to brick. We removed ceilings, partition walls, floor coverings, built-in cupboards, and all fixtures — completing the strip-out and rubble removal in a single day.",
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
    bio: "Marc founded Libmarc Projects in 2015 with a single TLB and a commitment to honest pricing. Today he oversees strategy, key client relationships, and the plant fleet.",
    image: "/images/team/team-1.png",
    expertise: ["Demolition", "Plant Hire", "Operations"],
  },
  {
    name: "Lerato Mokoena",
    role: "Operations Manager",
    bio: "Lerato runs the daily schedule — coordinating machines, crews, and deliveries across up to a dozen active sites in Gauteng without missing a deadline.",
    image: "/images/team/team-2.png",
    expertise: ["Scheduling", "Logistics", "Client Service"],
  },
  {
    name: "Sipho Dlamini",
    role: "Site Supervisor & Shot-Firer",
    bio: "A certified shot-firer and demolition supervisor with 14 years on the tools. Sipho runs our demolition and rock-blasting crews with a relentless focus on safety.",
    image: "/images/team/team-3.png",
    expertise: ["Demolition", "Rock Blasting", "Safety"],
  },
  {
    name: "Thandiwe Khumalo",
    role: "Installations Lead",
    bio: "Thandiwe leads our CCTV, roller shutter, and gate installation team. Certified electrician with a sharp eye for neat, code-compliant work.",
    image: "/images/team/team-4.png",
    expertise: ["CCTV", "Automation", "Electrical"],
  },
  {
    name: "Johan Pretorius",
    role: "Plant & Fleet Manager",
    bio: "Johan keeps our fleet of 40+ machines running. Every excavator, TLB, and truck is serviced, roadworthy, and ready to roll because of him.",
    image: "/images/team/team-5.png",
    expertise: ["Fleet", "Maintenance", "Logistics"],
  },
  {
    name: "David Chen",
    role: "Quotations & Estimating",
    bio: "David turns site visits into transparent quotes — fast. Most enquiries get a written quote within the same business day.",
    image: "/images/team/team-6.png",
    expertise: ["Estimating", "Client Service"],
  },
];

export type Testimonial = {
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Bongani M.",
    title: "Homeowner",
    company: "Brixton",
    quote:
      "Libmarc stripped out the inside of my old house in a single day and took all the rubble with them. The team was professional, on time, and the price was exactly what they quoted. Highly recommended.",
    rating: 5,
    avatar: "/images/team/team-3.png",
    project: "Brixton House Strip-Out",
  },
  {
    name: "Sarah N.",
    title: "Body Corporate Chair",
    company: "Honeydew Complex",
    quote:
      "We needed CCTV for our 24-unit complex and Thandiwe's team did a neat, professional job. The mobile app works perfectly and we finally feel secure. Thank you Libmarc Projects.",
    rating: 5,
    avatar: "/images/team/team-4.png",
    project: "Honeydew CCTV",
  },
  {
    name: "Frans v.d. Merwe",
    title: "Site Agent",
    company: "Sandton Developer",
    quote:
      "We hired their 20-ton excavator with operator for six weeks. Machine was reliable, operator was skilled, and the relief machine during servicing meant zero downtime. Will hire again.",
    rating: 5,
    avatar: "/images/team/team-5.png",
    project: "Sandton Excavation",
  },
  {
    name: "Palesa K.",
    title: "Shop Owner",
    company: "Randburg",
    quote:
      "New roller shutter door and auto gate for my shop. Done in one day, neatly wired, and the remotes work from down the street. Very happy with the quality.",
    rating: 5,
    avatar: "/images/team/team-2.png",
    project: "Randburg Shopfront",
  },
  {
    name: "Thabo R.",
    title: "Contractor",
    company: "Midrand",
    quote:
      "Hired their TLB for two weeks of trenching. Fair hourly rate, reliable machine, and the operator knew his stuff. Libmarc is now my first call for plant hire.",
    rating: 5,
    avatar: "/images/team/team-1.png",
    project: "Midrand Trenching",
  },
  {
    name: "Naledi M.",
    title: "Homeowner",
    company: "Soweto",
    quote:
      "After my builder vanished, Libmarc came and cleared all the rubble left on site in two days. Two tipper trucks, friendly crew, and disposal slips provided. Lifesavers.",
    rating: 5,
    avatar: "/images/team/team-6.png",
    project: "Soweto Clearance",
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

export const rateNotes = [
  "All prices are starting rates and may vary based on site access, scope, and materials.",
  "A free site visit is available for projects in Greater Johannesburg — quotes are issued same business day.",
  "Plant hire is subject to a minimum hire period. Fuel is charged separately or supplied by the client.",
  "Discounts available for weekly and monthly plant hire, and for bundled service packages.",
  "All work is covered by public liability insurance. Disposal slips provided for all rubble removal.",
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
  { title: "Daily Risk Assessment", desc: "Every site starts with a documented Hazard Identification & Risk Assessment (HIRA) signed off by the supervisor." },
  { title: "Certified Shot-Firers", desc: "All rock blasting is supervised by certified shot-firers with valid blasting licences and blast plans." },
  { title: "PPE On Every Site", desc: "Hard hats, safety boots, high-viz, eye and ear protection issued to every crew member, every shift." },
  { title: "Public Liability Cover", desc: "R5 million public liability insurance protects our clients and their neighbours on every project." },
  { title: "COID Registered", desc: "We are registered with the Compensation Fund (COID) — all workers covered for on-site injury." },
  { title: "Permits & Notifications", desc: "Demolition and blasting permits, and neighbour notifications, handled in full before work begins." },
];

export const clientLogos = [
  "Johannesburg Housing",
  "Gauteng Civils",
  "Rosebank Developments",
  "Soweto Builders",
  "Sandton Retail",
  "Honeydew Body Corp",
];
