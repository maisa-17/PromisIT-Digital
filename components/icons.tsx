import type { Service } from "@/lib/data";

type IconProps = {
  className?: string;
};

function IdCardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="8.5" cy="10.75" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 15.5c.5-1.4 1.6-2 3-2s2.5.6 3 2M13.5 9.5h5M13.5 12.5h5M13.5 15.5h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReceiptIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3v-17Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8h7M8.5 11.5h7M8.5 15h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CertificateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M7 8h10M7 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9.5" cy="18.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m8 20.3-.8 2.2 2.3-.9 2.3.9-.8-2.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PassportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="9.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 14.5c.7-1.3 1.9-2 3.5-2s2.8.7 3.5 2M8 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function VoteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 10.5 12 4l8 6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="6" y="10.5" width="12" height="9.5" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <path d="m9 14.5 2.2 2.2L15.5 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PrinterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 8.5V4h10v4.5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <rect x="3.5" y="8.5" width="17" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M7 15.5h10V21H7v-5.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M7 12h1.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function GraduationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4 3 8.5 12 13l9-4.5L12 4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M7 10.7v4.3c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4.3" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M20 9v5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function CarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 15.5 6 10a2 2 0 0 1 1.9-1.5h8.2A2 2 0 0 1 18 10l1.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="3" y="15.5" width="18" height="4.5" rx="1.25" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="7.5" cy="20" r="1.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.5" cy="20" r="1.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 15.5h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function RationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 9.5h12l-1.2 10.2a1.5 1.5 0 0 1-1.5 1.3H8.7a1.5 1.5 0 0 1-1.5-1.3L6 9.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M9 9.5V6a3 3 0 0 1 6 0v3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M9.5 13v5M14.5 13v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 20.5V6l7-3 7 3v14.5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M3 20.5h18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M9 20.5v-4a3 3 0 0 1 6 0v4M9 9.5h.01M12 9.5h.01M15 9.5h.01M9 13h.01M12 13h.01M15 13h.01"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TicketIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.5a1.75 1.75 0 0 0 0 3.5V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1.75 1.75 0 0 0 0-3.5V9Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M14 7.5v9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
    </svg>
  );
}

function LegalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3.5v3M4 8l4.5-1.5M19.5 8 15 6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 8h5l-2.5 5.5A2.6 2.6 0 0 1 4 15a2.6 2.6 0 0 1-2.5-1.5L4 8ZM19.5 8h-5l2.5 5.5a2.6 2.6 0 0 0 2.5 1.5 2.6 2.6 0 0 0 2.5-1.5L19.5 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 6.5v14M8 20.5h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

const icons: Record<Service["icon"], (props: IconProps) => React.ReactElement> = {
  "id-card": IdCardIcon,
  receipt: ReceiptIcon,
  certificate: CertificateIcon,
  shield: ShieldIcon,
  passport: PassportIcon,
  vote: VoteIcon,
  printer: PrinterIcon,
  graduation: GraduationIcon,
  car: CarIcon,
  ration: RationIcon,
  building: BuildingIcon,
  ticket: TicketIcon,
  legal: LegalIcon,
};

export function ServiceIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon className={className} />;
}
