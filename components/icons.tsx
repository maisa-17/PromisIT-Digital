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

const icons: Record<Service["icon"], (props: IconProps) => React.ReactElement> = {
  "id-card": IdCardIcon,
  receipt: ReceiptIcon,
  certificate: CertificateIcon,
  shield: ShieldIcon,
  passport: PassportIcon,
  vote: VoteIcon,
  printer: PrinterIcon,
  graduation: GraduationIcon,
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
