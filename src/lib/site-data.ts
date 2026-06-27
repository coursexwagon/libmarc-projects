import {
  Home,
  Building2,
  HardHat,
  Hammer,
  Wrench,
  Ruler,
  Construction,
  Building,
  Factory,
  PaintRoller,
  Trees,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "BUILDCORE",
  tagline: "Construction & Engineering Excellence",
  founded: 2009,
  phone: "+1 (415) 555-0192",
  email: "hello@buildcore.co",
  address: "1840 Industrial Parkway, Suite 200, Oakland, CA 94621",
  hours: "Mon - Fri: 7:00 AM - 6:00 PM",
  license: "CSLB #847291 • Class A General Engineering",
};

export const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 1500, suffix: "+", label: "Projects Completed" },
  { value: 750, suffix: "+", label: "Skilled Workers" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Pricing", href: "/pricing" },
  { title: "Team", href: "/team" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Blog", href: "/blog" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  process: { step: string; title: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "residential-construction",
    title: "Residential Construction",
    short: "Custom homes & multi-family builds crafted to last.",
    description:
      "From custom luxury homes to multi-family developments, we build residential spaces that blend architectural beauty with structural integrity. Our end-to-end service covers design coordination, foundations, framing, finishes, and handover.",
    icon: Home,
    image: "/images/projects/project-2.png",
    features: [
      "Custom & spec home construction",
      "Multi-family & townhome developments",
      "Foundation to finish carpentry",
      "Smart home & energy-efficient systems",
      "ADUs and garage conversions",
    ],
    process: [
      { step: "01", title: "Consultation", detail: "We discuss your vision, budget, and site constraints, then provide a feasibility roadmap." },
      { step: "02", title: "Design & Permit", detail: "Architects and engineers finalize plans; we handle all permitting and approvals." },
      { step: "03", title: "Construction", detail: "Site prep, foundation, framing, MEP, finishes — managed with weekly milestones." },
      { step: "04", title: "Handover", detail: "Final inspection, punch-list, walkthrough, and warranty documentation delivered." },
    ],
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    short: "Offices, retail, and hospitality built on schedule.",
    description:
      "We deliver commercial buildings that meet the demands of modern business — on time, on budget, and built to code. Our teams specialize in mid-rise offices, retail centers, and hospitality venues with fast-tracked delivery options.",
    icon: Building2,
    image: "/images/projects/project-4.png",
    features: [
      "Mid-rise office buildings",
      "Retail centers & shopping plazas",
      "Hotels & hospitality venues",
      "Tenant improvements & fit-outs",
      "LEED-certified green building",
    ],
    process: [
      { step: "01", title: "Programming", detail: "Stakeholder workshops define space needs, budget envelope, and schedule targets." },
      { step: "02", title: "Pre-construction", detail: "Value engineering, GMP pricing, subcontractor bidding, and permit submission." },
      { step: "03", title: "Build", detail: "Site mobilization through TCO with lean scheduling and weekly OAC meetings." },
      { step: "04", title: "Commissioning", detail: "Systems commissioning, training, and 12-month post-occupancy support." },
    ],
  },
  {
    slug: "industrial-construction",
    title: "Industrial Construction",
    short: "Warehouses, plants & heavy industrial facilities.",
    description:
      "Heavy industrial construction demands precision engineering and rigorous safety protocols. We build warehouses, manufacturing plants, and distribution centers with heavy equipment capabilities and industrial-grade materials.",
    icon: Factory,
    image: "/images/projects/project-5.png",
    features: [
      "Warehouses & distribution centers",
      "Manufacturing plants",
      "Cold storage facilities",
      "Heavy equipment foundations",
      "Industrial MEP & process piping",
    ],
    process: [
      { step: "01", title: "Site Analysis", detail: "Geotechnical, environmental, and utility studies inform the master plan." },
      { step: "02", title: "Engineering", detail: "Structural, civil, and process engineering tailored to your operations." },
      { step: "03", title: "Construction", detail: "Tilt-up or pre-engineered metal building erection with parallel MEP rough-in." },
      { step: "04", title: "Start-up", detail: "Equipment installation, calibration, and operational readiness verification." },
    ],
  },
  {
    slug: "civil-infrastructure",
    title: "Civil & Infrastructure",
    short: "Roads, bridges, and public works engineering.",
    description:
      "From highways and bridges to utilities and site development, our civil engineering teams deliver public and private infrastructure that connects communities and withstands the test of time.",
    icon: Construction,
    image: "/images/projects/project-3.png",
    features: [
      "Highway & roadway construction",
      "Bridge construction & rehabilitation",
      "Underground utilities & piping",
      "Site development & grading",
      "Stormwater management systems",
    ],
    process: [
      { step: "01", title: "Survey", detail: "Topographic survey, right-of-way, and environmental clearance." },
      { step: "02", title: "Design-Build", detail: "Integrated design-build delivery accelerates schedule and reduces risk." },
      { step: "03", title: "Construction", detail: "Earthwork, paving, structures, and utilities sequenced for minimal disruption." },
      { step: "04", title: "Acceptance", detail: "Load testing, final inspection, and agency acceptance documentation." },
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    short: "Transform existing spaces with modern upgrades.",
    description:
      "Breathe new life into existing structures. Our renovation specialists handle everything from kitchen and bath remodels to full structural retrofits and historic preservation with meticulous attention to detail.",
    icon: Hammer,
    image: "/images/projects/project-6.png",
    features: [
      "Kitchen & bathroom remodels",
      "Whole-home renovations",
      "Commercial tenant improvements",
      "Historic restoration & preservation",
      "Structural retrofitting & seismic upgrades",
    ],
    process: [
      { step: "01", title: "Assessment", detail: "Existing conditions survey, structural assessment, and scope definition." },
      { step: "02", title: "Design", detail: "Renderings, material selection, and fixed-price proposal." },
      { step: "03", title: "Renovation", detail: "Controlled demolition, build-back, and finishes with daily clean-up." },
      { step: "04", title: "Reveal", detail: "Final walkthrough, touch-ups, and one-year craftsmanship warranty." },
    ],
  },
  {
    slug: "design-build",
    title: "Design-Build Services",
    short: "One team, one contract, streamlined delivery.",
    description:
      "Our integrated design-build approach unifies architecture, engineering, and construction under one contract — delivering projects 33% faster with single-point accountability and cost certainty from day one.",
    icon: Ruler,
    image: "/images/about-site.png",
    features: [
      "Single-source accountability",
      "Architect & engineer in-house",
      "Guaranteed maximum price (GMP)",
      "Accelerated schedule delivery",
      "Value engineering from concept",
    ],
    process: [
      { step: "01", title: "Discovery", detail: "Charrette sessions define goals, budget, and aesthetic direction." },
      { step: "02", title: "Design", detail: "Schematic, design development, and construction documents in-house." },
      { step: "03", title: "GMP", detail: "Transparent guaranteed maximum price locked before construction begins." },
      { step: "04", title: "Delivery", detail: "Seamless handoff from design team to build team under one roof." },
    ],
  },
  {
    slug: "project-management",
    title: "Construction Management",
    short: "Expert oversight for owner-led projects.",
    description:
      "For owners with their own contractors, we provide professional construction management — managing schedule, budget, quality, and safety so your project stays on track from groundbreaking to ribbon-cutting.",
    icon: HardHat,
    image: "/images/cta-bg.png",
    features: [
      "Schedule & budget control",
      "Subcontractor management",
      "Quality assurance inspections",
      "Safety program administration",
      "Change order & risk management",
    ],
    process: [
      { step: "01", title: "Onboarding", detail: "Project takeover review, document audit, and stakeholder alignment." },
      { step: "02", title: "Controls", detail: "Establish schedule of values, cost reports, and KPI dashboards." },
      { step: "03", title: "Oversight", detail: "Daily field reports, weekly OAC meetings, monthly owner reporting." },
      { step: "04", title: "Closeout", detail: "Punch-list, commissioning, warranties, and final reconciliation." },
    ],
  },
  {
    slug: "interior-fitout",
    title: "Interior Fit-Out",
    short: "Turnkey interior build-outs for workspaces.",
    description:
      "From open-plan offices to specialized medical and retail interiors, our fit-out teams deliver turnkey interiors with millwork, lighting, acoustic treatments, and branded finishes — ready for occupancy.",
    icon: PaintRoller,
    image: "/images/projects/project-6.png",
    features: [
      "Office & workspace fit-outs",
      "Retail & showroom interiors",
      "Medical & dental build-outs",
      "Custom millwork & casework",
      "AV, lighting & acoustic systems",
    ],
    process: [
      { step: "01", title: "Programming", detail: "Space planning, adjacency studies, and FF&E strategy." },
      { step: "02", title: "Design", detail: "Mood boards, finish schedules, and 3D visualizations." },
      { step: "03", title: "Fit-Out", detail: "After-hours and phased construction to minimize business disruption." },
      { step: "04", title: "Move-In", detail: "Furniture install, IT cutover, and post-occupancy tuning." },
    ],
  },
  {
    slug: "landscape-hardscape",
    title: "Landscape & Hardscape",
    short: "Outdoor spaces that elevate the built environment.",
    description:
      "We extend our craftsmanship outdoors — designing and building landscapes, hardscapes, retaining walls, and outdoor living spaces that complement architecture and stand up to the elements.",
    icon: Trees,
    image: "/images/projects/project-2.png",
    features: [
      "Site landscaping & planting",
      "Hardscape: patios, decks, walkways",
      "Retaining walls & site walls",
      "Irrigation & drainage systems",
      "Outdoor kitchens & living areas",
    ],
    process: [
      { step: "01", title: "Site Plan", detail: "Topography, soil analysis, and conceptual landscape design." },
      { step: "02", title: "Selection", detail: "Plant palette, hardscape materials, and lighting plan confirmed." },
      { step: "03", title: "Install", detail: "Grading, hardscape, irrigation, planting, and lighting installation." },
      { step: "04", title: "Establish", detail: "90-day grow-in period with maintenance handoff and care guide." },
    ],
  },
  {
    slug: "pre-construction",
    title: "Pre-Construction",
    short: "Planning, estimating & value engineering.",
    description:
      "The smartest money on any project is spent before a shovel hits dirt. Our pre-construction services — estimating, value engineering, constructability review, and scheduling — set your project up for success.",
    icon: Wrench,
    image: "/images/blog/blog-3.png",
    features: [
      "Conceptual & detailed estimating",
      "Value engineering workshops",
      "Constructability analysis",
      "Master schedule development",
      "Permitting strategy & expediting",
    ],
    process: [
      { step: "01", title: "Feasibility", detail: "Budget validation against scope, site, and market conditions." },
      { step: "02", title: "VE", detail: "Alternative materials and methods evaluated for cost and schedule impact." },
      { step: "03", title: "Schedule", detail: "Critical path method schedule with milestones and long-lead items." },
      { step: "04", title: "GMP", detail: "Guaranteed maximum price proposal with transparent backup." },
    ],
  },
  {
    slug: "safety-compliance",
    title: "Safety & Compliance",
    short: "Zero-incident culture, fully certified.",
    description:
      "Safety isn't a department — it's a culture. Our EMR of 0.71 reflects a zero-incident mindset backed by OSHA-trained crews, daily safety briefings, and a full-time HSE team on every active site.",
    icon: ShieldCheck,
    image: "/images/blog/blog-4.png",
    features: [
      "Full-time HSE managers on site",
      "OSHA 30-trained supervisors",
      "Daily Job Hazard Analysis (JHA)",
      "EMR 0.71 — top 5% in industry",
      "Third-party safety audits",
    ],
    process: [
      { step: "01", title: "Plan", detail: "Site-specific safety plan and hazard register developed pre-mobilization." },
      { step: "02", title: "Train", detail: "Orientation, JHA reviews, and tool-box talks every shift." },
      { step: "03", title: "Monitor", detail: "Daily inspections, near-miss reporting, and leading-indicator tracking." },
      { step: "04", title: "Improve", detail: "Monthly safety committee reviews drive continuous improvement." },
    ],
  },
  {
    slug: "demolition-site-prep",
    title: "Demolition & Site Prep",
    short: "Safe demolition and full site readiness.",
    description:
      "Before we build, we prepare. Our demolition and site-prep crews handle selective and full demolition, hazardous material abatement, grading, and utility installation to make every site build-ready.",
    icon: Building,
    image: "/images/projects/project-5.png",
    features: [
      "Selective & total demolition",
      "Asbestos & lead abatement",
      "Site clearing & grubbing",
      "Mass grading & excavation",
      "Utility installation & capping",
    ],
    process: [
      { step: "01", title: "Survey", detail: "Structural survey, hazardous material audit, and utility locates." },
      { step: "02", title: "Abatement", detail: "Licensed abatement of asbestos, lead, and mold with air monitoring." },
      { step: "03", title: "Demolition", detail: "Mechanical or hand demolition with dust, noise, and vibration control." },
      { step: "04", title: "Site Prep", detail: "Grading, compaction, and rough utilities ready for foundation." },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  value: string;
  duration: string;
  image: string;
  summary: string;
  description: string;
  scope: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "meridian-tower",
    title: "Meridian Tower",
    category: "Commercial",
    location: "San Francisco, CA",
    year: "2024",
    client: "Meridian Properties",
    value: "$48M",
    duration: "26 months",
    image: "/images/projects/project-1.png",
    summary: "A 24-story Class-A office tower with LEED Platinum certification in the heart of the financial district.",
    description:
      "Meridian Tower rises 24 stories above the San Francisco financial district, delivering 480,000 sq ft of Class-A office space with a LEED Platinum envelope, double-skin facade, and a sky-garden amenity floor. The project was delivered two months ahead of schedule using an integrated design-build delivery and topped out with a 0.71 EMR safety record.",
    scope: [
      "Design-build delivery",
      "24-story structural steel frame",
      "Double-skin high-performance facade",
      "LEED Platinum certification",
      "Sky-garden amenity floor",
      "Three levels of below-grade parking",
    ],
    gallery: [
      "/images/projects/project-1.png",
      "/images/projects/project-4.png",
      "/images/about-site.png",
    ],
  },
  {
    slug: "harbor-view-residence",
    title: "Harbor View Residence",
    category: "Residential",
    location: "Sausalito, CA",
    year: "2023",
    client: "Private",
    value: "$4.2M",
    duration: "14 months",
    image: "/images/projects/project-2.png",
    summary: "A 6,800 sq ft custom luxury home with panoramic bay views and a fully integrated smart-home system.",
    description:
      "Perched on the Sausalito hillside, Harbor View Residence is a 6,800 sq ft custom home engineered for seismic resilience and net-zero energy. Floor-to-ceiling glass, a cantilevered infinity pool, and a hidden subterranean wine cellar make this a showcase of residential craftsmanship.",
    scope: [
      "Custom architectural build",
      "Net-zero energy design",
      "Seismic base-isolation system",
      "Cantilevered infinity pool",
      "Subterranean wine cellar",
      "Fully integrated smart-home automation",
    ],
    gallery: [
      "/images/projects/project-2.png",
      "/images/projects/project-6.png",
      "/images/projects/project-2.png",
    ],
  },
  {
    slug: "bay-bridge-connector",
    title: "Bay Bridge Connector",
    category: "Infrastructure",
    location: "Oakland, CA",
    year: "2022",
    client: "Caltrans",
    value: "$112M",
    duration: "38 months",
    image: "/images/projects/project-3.png",
    summary: "A 1.4-mile elevated connector with seismic isolators serving 90,000 daily commuters.",
    description:
      "The Bay Bridge Connector is a 1.4-mile elevated roadway linking I-880 to the MacArthur Maze, engineered with base isolators to withstand a 1-in-2,475-year seismic event. Delivered under a design-build-finance-operate contract, the project improved commute times by 22%.",
    scope: [
      "Design-build-finance-operate delivery",
      "1.4-mile elevated viaduct",
      "Seismic base isolation",
      "22 precast segmental spans",
      "ITS and dynamic message signage",
      "Landside and marine foundations",
    ],
    gallery: [
      "/images/projects/project-3.png",
      "/images/projects/project-5.png",
      "/images/about-site.png",
    ],
  },
  {
    slug: "fountain-plaza",
    title: "Fountain Plaza Offices",
    category: "Commercial",
    location: "San Jose, CA",
    year: "2023",
    client: "Fountain Realty",
    value: "$31M",
    duration: "20 months",
    image: "/images/projects/project-4.png",
    summary: "A 180,000 sq ft mid-rise office with ground-floor retail and a rooftop event terrace.",
    description:
      "Fountain Plaza Offices brings 180,000 sq ft of collaborative workspace to downtown San Jose, wrapped around a public plaza with ground-floor retail and a 9,000 sq ft rooftop event terrace. The building achieved LEED Gold and WELL Silver certifications.",
    scope: [
      "Mid-rise concrete structure",
      "Ground-floor retail shell",
      "Rooftop event terrace",
      "LEED Gold + WELL Silver",
      "Structured parking for 420 vehicles",
      "Public plaza and streetscape",
    ],
    gallery: [
      "/images/projects/project-4.png",
      "/images/projects/project-1.png",
      "/images/cta-bg.png",
    ],
  },
  {
    slug: "port-logistics-center",
    title: "Port Logistics Center",
    category: "Industrial",
    location: "Richmond, CA",
    year: "2024",
    client: "Pacific Logistics Group",
    value: "$67M",
    duration: "16 months",
    image: "/images/projects/project-5.png",
    summary: "A 612,000 sq ft cross-dock distribution facility with 56 dock doors and solar-ready roof.",
    description:
      "Port Logistics Center is a 612,000 sq ft cross-dock distribution facility built for Pacific Logistics Group, featuring 56 high-dock doors, 40-foot clear heights, ESFR fire protection, and a 2.4 MW solar-ready roof. Fast-tracked in 16 months using tilt-up concrete panels.",
    scope: [
      "612,000 sq ft tilt-up warehouse",
      "56 cross-dock high doors",
      "40-foot clear height",
      "ESFR fire protection system",
      "2.4 MW solar-ready roof",
      "Heavy-duty truck court",
    ],
    gallery: [
      "/images/projects/project-5.png",
      "/images/projects/project-3.png",
      "/images/about-site.png",
    ],
  },
  {
    slug: "loft-44-renovation",
    title: "Loft 44 Renovation",
    category: "Renovation",
    location: "Oakland, CA",
    year: "2023",
    client: "Private",
    value: "$680K",
    duration: "5 months",
    image: "/images/projects/project-6.png",
    summary: "A 1920s warehouse converted into a 2,400 sq ft industrial-chic live/work loft.",
    description:
      "Loft 44 transformed a derelict 1920s warehouse into a 2,400 sq ft industrial-chic live/work loft, preserving original brick and timber while inserting a mezzanine, chef's kitchen, and fully integrated smart lighting. The renovation earned a local historic preservation commendation.",
    scope: [
      "Historic adaptive reuse",
      "Structural seismic retrofit",
      "New mezzanine level",
      "Chef's kitchen and custom millwork",
      "Smart lighting and AV systems",
      "Roof deck with city views",
    ],
    gallery: [
      "/images/projects/project-6.png",
      "/images/projects/project-2.png",
      "/images/cta-bg.png",
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  expertise: string[];
};

export const team: TeamMember[] = [
  {
    name: "Marcus Holloway",
    role: "Founder & CEO",
    bio: "35 years in commercial construction. Marcus founded BUILDCORE in 2009 with a pickup truck and a zero-incident pledge. Today he leads strategy and client relationships across the firm's portfolio.",
    image: "/images/team/team-1.png",
    linkedin: "#",
    expertise: ["Strategy", "Commercial", "Client Relations"],
  },
  {
    name: "Elena Vasquez",
    role: "Principal Architect",
    bio: "Elena brings 18 years of award-winning design experience across residential and commercial sectors. She leads the in-house design studio and oversees design-build integration.",
    image: "/images/team/team-2.png",
    linkedin: "#",
    expertise: ["Architecture", "Design-Build", "Sustainability"],
  },
  {
    name: "Raymond Castillo",
    role: "Director of Field Operations",
    bio: "A second-generation builder, Raymond runs the field organization — 750+ craftspeople across a dozen active sites — with a relentless focus on schedule, quality, and safety.",
    image: "/images/team/team-3.png",
    linkedin: "#",
    expertise: ["Field Ops", "Safety", "Scheduling"],
  },
  {
    name: "Dr. Aisha Bello",
    role: "VP, Civil Engineering",
    bio: "PhD in structural engineering from UC Berkeley. Aisha leads the civil and infrastructure division, specializing in seismic design and design-build delivery of public works.",
    image: "/images/team/team-4.png",
    linkedin: "#",
    expertise: ["Civil", "Seismic", "Public Works"],
  },
  {
    name: "Tommy Rourke",
    role: "Senior Superintendent",
    bio: "28 years on the tools and 12 in the trailer. Tommy is the firm's go-to superintendent for complex urban builds, known for on-time delivery and a calm, methodical field presence.",
    image: "/images/team/team-5.png",
    linkedin: "#",
    expertise: ["Superintending", "Urban Build", "Logistics"],
  },
  {
    name: "David Chen",
    role: "Director of Pre-Construction",
    bio: "David leads estimating, value engineering, and pre-construction services. His GMP proposals are legendary for their transparency — and for rarely needing a change order.",
    image: "/images/team/team-6.png",
    linkedin: "#",
    expertise: ["Estimating", "VE", "GMP"],
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
    name: "Jonathan Pierce",
    title: "Director of Real Estate",
    company: "Meridian Properties",
    quote:
      "BUILDCORE delivered Meridian Tower two months ahead of schedule and under GMP. Their design-build integration saved us roughly $3.2M in value engineering without compromising the architecture. They are the only GC we use in the Bay Area now.",
    rating: 5,
    avatar: "/images/team/team-6.png",
    project: "Meridian Tower",
  },
  {
    name: "Maria Gonzalez",
    title: "Homeowner",
    company: "Harbor View Residence",
    quote:
      "We dreamed of a net-zero home on the Sausalito hillside and BUILDCORE made it real. Every trade was thoughtful, the schedule was honored, and the seismic engineering gives us total peace of mind. A once-in-a-lifetime build done right.",
    rating: 5,
    avatar: "/images/team/team-2.png",
    project: "Harbor View Residence",
  },
  {
    name: "Robert Kim",
    title: "District Engineer",
    company: "Caltrans District 4",
    quote:
      "On the Bay Bridge Connector, BUILDCORE hit every milestone on a 38-month DBFO contract with zero lost-time incidents. Their seismic isolation expertise and public-agency coordination were best-in-class.",
    rating: 5,
    avatar: "/images/team/team-3.png",
    project: "Bay Bridge Connector",
  },
  {
    name: "Sarah Whitfield",
    title: "COO",
    company: "Pacific Logistics Group",
    quote:
      "Our 612,000 sq ft distribution center was turned over a full month early with every dock door operational. BUILDCORE's tilt-up crew was relentless and their safety culture is genuine, not theater.",
    rating: 5,
    avatar: "/images/team/team-4.png",
    project: "Port Logistics Center",
  },
  {
    name: "James Okafor",
    title: "Asset Manager",
    company: "Fountain Realty",
    quote:
      "From pre-construction through commissioning, BUILDCORE's communication was exceptional. Weekly OAC meetings started and ended on time with clear action items. That discipline shows up in the results.",
    rating: 5,
    avatar: "/images/team/team-1.png",
    project: "Fountain Plaza Offices",
  },
  {
    name: "Lena Petrova",
    title: "Homeowner & Artist",
    company: "Loft 44",
    quote:
      "Converting a 1920s warehouse into my live/work loft was daunting. BUILDCORE preserved every brick I cared about and delivered a space that feels both historic and brand new. Their craftsmanship is on another level.",
    rating: 5,
    avatar: "/images/team/team-5.png",
    project: "Loft 44 Renovation",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$250",
    period: "/sq ft",
    description: "Ideal for smaller residential builds and renovations under 3,000 sq ft.",
    features: [
      "Single-family home construction",
      "Standard material specifications",
      "Fixed-price proposal",
      "Weekly progress reports",
      "1-year craftsmanship warranty",
      "Standard finish package",
    ],
    cta: "Get a Quote",
  },
  {
    name: "Professional",
    price: "$450",
    period: "/sq ft",
    description: "Our most popular package for custom homes and light commercial projects.",
    features: [
      "Custom residential & small commercial",
      "Premium material specifications",
      "Design-build integration",
      "Bi-weekly client walkthroughs",
      "5-year craftsmanship warranty",
      "Premium finish package",
      "Smart-home rough-in included",
    ],
    popular: true,
    cta: "Get a Quote",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored pricing for large commercial, industrial, and infrastructure projects.",
    features: [
      "Commercial, industrial & infrastructure",
      "Guaranteed Maximum Price (GMP)",
      "Full design-build delivery",
      "Dedicated project dashboard",
      "10-year structural warranty",
      "Bespoke finish & systems package",
      "24/7 priority support",
      "LEED certification management",
    ],
    cta: "Contact Sales",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "design-build-vs-hard-bid",
    title: "Design-Build vs. Hard-Bid: Choosing the Right Delivery Method",
    excerpt:
      "Delivery method is the single biggest predictor of project success. We break down when design-build wins, when hard-bid makes sense, and how to choose.",
    category: "Project Delivery",
    author: "David Chen",
    date: "2024-09-12",
    readTime: "8 min",
    image: "/images/blog/blog-1.png",
    content:
      "The delivery method you choose shapes everything that follows — schedule, cost, quality, and even the working relationships on your project. Yet too many owners default to the method they have always used rather than the one that fits.\n\n## Why Delivery Method Matters\n\nIndustry research from the Construction Industry Institute shows design-build projects are delivered 33% faster than design-bid-build, with 6% lower cost growth. The reason is simple: when the designer and builder share a contract, they collaborate instead of litigate.\n\n## When Design-Build Wins\n\nDesign-build shines on projects with aggressive schedules, evolving scope, or where cost certainty must be locked early. The single-point accountability eliminates the finger-pointing that plagues hard-bid projects.\n\n## When Hard-Bid Still Makes Sense\n\nHard-bid remains the right choice for highly prescribed, low-complexity projects where the design is fully complete and the owner's priority is the lowest possible first cost rather than lifecycle value.\n\n## Our Recommendation\n\nFor most private owners in 2024, design-build is the default. The schedule savings alone typically outweigh any premium in unit pricing, and the collaboration produces a better building.",
  },
  {
    slug: "construction-technology-2024",
    title: "5 Construction Technologies Reshaping Job Sites in 2024",
    excerpt:
      "From BIM to drones to robotics, here are the five technologies we have deployed across active job sites this year — and the measurable impact each delivers.",
    category: "Technology",
    author: "Elena Vasquez",
    date: "2024-08-28",
    readTime: "6 min",
    image: "/images/blog/blog-2.png",
    content:
      "Construction has historically been one of the least-digitized industries. That is changing fast. At BUILDCORE we pilot, measure, and scale technology that produces real ROI — not tech for its own sake.\n\n## 1. Building Information Modeling (BIM)\n\nOur in-house BIM team models every project to LOD 350, clash-detecting MEP against structure before a single pipe is ordered. On Meridian Tower this prevented 1,200+ field clashes.\n\n## 2. Drones & Photogrammetry\n\nWeekly drone flights produce orthophoto progress maps and earthwork volume calculations. Owners see their project from above without leaving their office.\n\n## 3. Robotics & Automation\n\nWe have deployed layout robots on three active sites, cutting layout time by 60% and eliminating rework from manual transcription errors.\n\n## 4. Reality Capture & 3D Scanning\n\nLiDAR scans at foundation, framing, and MEP rough-in create an as-built record that feeds our closeout documentation and future facility management.\n\n## 5. Field-Reporting Apps\n\nEvery superintendent logs daily reports from a tablet, with photos and weather auto-captured. This single change improved our schedule accuracy by 18%.",
  },
  {
    slug: "value-engineering-guide",
    title: "A Practical Guide to Value Engineering (Without Cutting Corners)",
    excerpt:
      "Value engineering has a bad reputation because it is often used to mean cost-cutting. Here is how real VE actually improves projects.",
    category: "Pre-Construction",
    author: "David Chen",
    date: "2024-08-10",
    readTime: "7 min",
    image: "/images/blog/blog-3.png",
    content:
      "Value engineering is one of the most misunderstood concepts in construction. Done right, it delivers better buildings for less money. Done wrong, it is the thin end of the wedge that compromises quality.\n\n## What Value Engineering Actually Means\n\nVE is the systematic analysis of a design to identify alternative materials, systems, or methods that deliver equal or better function at lower cost — without sacrificing quality, safety, or lifecycle performance.\n\n## The VE Workshop\n\nWe run VE workshops in early design development. Architects, engineers, estimators, and superintendents brainstorm alternatives, and each idea is scored on cost, schedule, quality, and maintainability.\n\n## A Real Example\n\nOn Port Logistics Center we substituted cast-in-place columns with precast, saving $1.4M and three weeks without reducing clear height or load capacity.\n\n## Red Flags\n\nBeware any VE suggestion that touches life-safety systems, structural redundancy, or envelope performance. Those are not value — they are value destruction.",
  },
  {
    slug: "construction-safety-culture",
    title: "Building a Zero-Incident Safety Culture That Sticks",
    excerpt:
      "An EMR of 0.71 doesn't happen by accident. Here are the five practices that define our safety culture — and how any contractor can adopt them.",
    category: "Safety",
    author: "Raymond Castillo",
    date: "2024-07-22",
    readTime: "9 min",
    image: "/images/blog/blog-4.png",
    content:
      "Safety is not a poster in the trailer. It is the sum of a thousand small decisions made every shift by every person on site. Our EMR of 0.71 — among the top 5% of contractors nationally — reflects a culture we have built deliberately over 15 years.\n\n## 1. Leadership Walks the Talk\n\nEvery project kickoff begins with a safety walkthrough led by a principal. Field crews watch what leadership does, not what they say.\n\n## 2. Job Hazard Analysis Every Shift\n\nNo crew starts work without a JHA specific to that day's tasks, location, and conditions. It takes 10 minutes and prevents the foreseeable.\n\n## 3. Near-Miss Reporting\n\nWe celebrate near-miss reports, not punish them. Each near-miss is a free lesson. In 2023 our crews logged 2,400 near-misses — and zero lost-time incidents.\n\n## 4. Stop-Work Authority\n\nEvery worker, every subcontractor, has unconditional stop-work authority. They have used it 47 times this year. Not once has it been the wrong call.\n\n## 5. Leading Indicators Over Lagging\n\nTRIR is a lagging indicator. We track leading indicators — JHAs completed, observations closed, training hours per craft — because those predict tomorrow's safety performance.",
  },
];

export type FAQ = {
  question: string;
  answer: string;
  category: string;
};

export const faqs: FAQ[] = [
  {
    category: "Getting Started",
    question: "What geographic area does BUILDCORE serve?",
    answer:
      "We are headquartered in Oakland, California and serve the greater Bay Area plus Northern California. For select enterprise clients we have mobilized crews as far as Reno and Sacramento. If you are outside our core region, we are happy to refer a trusted partner.",
  },
  {
    category: "Getting Started",
    question: "What is the minimum project size you take on?",
    answer:
      "Our residential division takes on projects from $250,000. Commercial and industrial projects typically start around $1M, and infrastructure work begins at approximately $5M. We evaluate every inquiry individually — reach out and we will be candid about fit.",
  },
  {
    category: "Getting Started",
    question: "How do I request a quote or proposal?",
    answer:
      "The fastest path is our Contact page. Share your project type, location, and approximate budget. A pre-construction lead will respond within one business day to schedule a discovery call.",
  },
  {
    category: "Pricing & Contracts",
    question: "What contract structures do you offer?",
    answer:
      "We offer lump-sum (hard-bid), guaranteed maximum price (GMP), cost-plus-fee, and design-build contracts. For enterprise clients we also structure design-build-finance-operate (DBFO) arrangements. We recommend the structure that best fits your risk profile and project goals.",
  },
  {
    category: "Pricing & Contracts",
    question: "How is your per-square-foot pricing calculated?",
    answer:
      "Per-square-foot figures on our Pricing page are planning benchmarks for typical builds at standard, premium, and enterprise finish levels. Actual pricing is driven by site conditions, scope, finishes, schedule, and market conditions. We provide a transparent GMP before construction begins.",
  },
  {
    category: "Pricing & Contracts",
    question: "Do you offer financing or payment plans?",
    answer:
      "We do not provide direct financing, but we partner with several construction lenders and can introduce you to preferred financing partners for residential and commercial projects. Construction draw schedules follow AIA standard progress billing.",
  },
  {
    category: "Process & Timeline",
    question: "How long does a typical project take?",
    answer:
      "Timelines vary widely by scope. A kitchen renovation might take 8–12 weeks, a custom home 12–18 months, a mid-rise office 18–30 months, and a major infrastructure project 24–48 months. We provide a critical-path schedule during pre-construction and update it weekly.",
  },
  {
    category: "Process & Timeline",
    question: "What is included in your warranty?",
    answer:
      "Every BUILDCORE project includes a one-year craftsmanship warranty covering workmanship defects. Structural elements carry a ten-year warranty, and manufacturer warranties on systems (roof, HVAC, windows) are passed through in full. We also offer extended warranty programs.",
  },
  {
    category: "Process & Timeline",
    question: "Can I make changes after construction has started?",
    answer:
      "Yes — change orders are a normal part of construction. We document every change with a written change order including scope, price, and schedule impact before the work proceeds. Transparent change-order management is a hallmark of our process.",
  },
  {
    category: "Safety & Compliance",
    question: "What is your safety record?",
    answer:
      "Our Experience Modification Rate (EMR) is 0.71, placing us in the top 5% of contractors nationally. We have maintained zero lost-time incidents for 38 consecutive months across all active sites. Every superintendent is OSHA 30-certified and every project has a dedicated HSE manager.",
  },
  {
    category: "Safety & Compliance",
    question: "Are you licensed, bonded, and insured?",
    answer:
      "Yes. BUILDCORE holds California CSLB License #847291 (Class A General Engineering and Class B General Building). We carry $5M general liability, $2M workers' compensation, and are bonded up to $25M per project. Certificates available on request.",
  },
  {
    category: "Sustainability",
    question: "Do you build green / LEED-certified projects?",
    answer:
      "Sustainability is core to our practice. We have delivered LEED Platinum, LEED Gold, and WELL Silver certified projects, and our in-house team includes LEED APs. We also build net-zero and Passive House projects and can advise on incentives and tax credits.",
  },
];

export const clientLogos = [
  "Meridian Properties",
  "Caltrans",
  "Pacific Logistics",
  "Fountain Realty",
  "Bay Area Council",
  "Port of Oakland",
];

export const certifications = [
  "CSLB Class A General Engineering",
  "OSHA 30 Certified Workforce",
  "LEED AP Accredited Team",
  "EMR 0.71 — Top 5% Safety",
  "$25M Bonding Capacity",
  "ISO 9001 Quality Management",
];
