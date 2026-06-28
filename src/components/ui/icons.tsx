import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  strokeWidth?: number;
};

// A single SVG component that icons import from
function createIcon(children: React.ReactNode, viewBox = "0 0 24 24") {
  return function Icon({
    size = 24,
    strokeWidth = 1.5,
    className,
    ...props
  }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width={size}
        height={size}
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {children}
      </svg>
    );
  };
}

// Phone receiver with handset shape — clean, thick, confident
export const PhoneIcon = createIcon(
  <>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </>
);

// WhatsApp — speech bubble with phone
export const WhatsAppIcon = createIcon(
  <>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </>
);

// Hard hat — industrial
export const HardHatIcon = createIcon(
  <>
    <path d="M5 12V7c0-1 .7-3 2-4" />
    <path d="M19 12V7c0-1-.7-3-2-4" />
    <path d="M2 22c0-4.4 2-8 4-11" />
    <path d="M22 22c0-4.4-2-8-4-11" />
    <path d="M8 7c0-2.2 1.8-4 4-4s4 1.8 4 4" />
    <path d="M6 22c2-5 4-7 6-7s4 2 6 7" />
    <rect x="2" y="18" width="20" height="4" rx="1" />
  </>
);

// Menu — three horizontal bars
export const MenuIcon = createIcon(
  <>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </>
);

// Arrow right — clean arrow
export const ArrowRightIcon = createIcon(
  <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </>
);

// Chevron down
export const ChevronDownIcon = createIcon(
  <>
    <polyline points="6 9 12 15 18 9" />
  </>
);

// Map pin
export const MapPinIcon = createIcon(
  <>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>
);

// Mail
export const MailIcon = createIcon(
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>
);

// Clock
export const ClockIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </>
);

// WhatsApp bubble
export const MessageCircleIcon = createIcon(
  <>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </>
);

// Check circle
export const CheckCircleIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </>
);

// Send (paper plane)
export const SendIcon = createIcon(
  <>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </>
);

// Spinner loader
export const LoaderIcon = createIcon(
  <>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </>
);

// Shield check
export const ShieldCheckIcon = createIcon(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </>
);

// Facebook
export const FacebookIcon = createIcon(
  <>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </>
);

// Instagram
export const InstagramIcon = createIcon(
  <>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
  </>
);

// Truck
export const TruckIcon = createIcon(
  <>
    <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M14 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M5 14V4h11l4 4v6" />
    <path d="M16 8h4l-4-4" />
    <path d="M5 14h11" />
  </>
);

// Excavator / construction
export const BombIcon = createIcon(
  <>
    <circle cx="11" cy="13" r="9" />
    <path d="M14.5 4.5 16 3l2 2 1.5-1.5" />
    <path d="m7 9 4-3" />
  </>
);

// Recycle / Rubble
export const RecycleIcon = createIcon(
  <>
    <path d="M21 12v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
    <path d="m7 8 5-5 5 5" />
    <path d="M12 3v9" />
  </>
);

// Camera / CCTV
export const CameraIcon = createIcon(
  <>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </>
);

// Door / Gate
export const DoorClosedIcon = createIcon(
  <>
    <path d="M4 20V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
    <path d="M2 20h20" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </>
);

// Users / Team
export const UsersIcon = createIcon(
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
);

// Award / Trust
export const AwardIcon = createIcon(
  <>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </>
);

// Star
export const StarIcon = createIcon(
  <>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </>
);

// Target / Precision
export const TargetIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </>
);

export const Icons = {
  phone: PhoneIcon,
  whatsapp: WhatsAppIcon,
  hardHat: HardHatIcon,
  menu: MenuIcon,
  arrowRight: ArrowRightIcon,
  chevronDown: ChevronDownIcon,
  mapPin: MapPinIcon,
  mail: MailIcon,
  clock: ClockIcon,
  messageCircle: MessageCircleIcon,
  checkCircle: CheckCircleIcon,
  send: SendIcon,
  loader: LoaderIcon,
  shieldCheck: ShieldCheckIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  truck: TruckIcon,
  bomb: BombIcon,
  recycle: RecycleIcon,
  camera: CameraIcon,
  doorClosed: DoorClosedIcon,
  users: UsersIcon,
  award: AwardIcon,
  star: StarIcon,
  target: TargetIcon,
};
