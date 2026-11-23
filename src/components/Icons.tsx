import {
  Award,
  Building2,
  ClipboardList,
  HeartHandshake,
  ScanLine,
  ShieldCheck,
  Smile,
  type LucideProps,
} from "lucide-react";
import type { DifferentialIcon, TreatmentIcon } from "@/lib/site";

type IconProps = { className?: string };

const TOOTH =
  "M12 5.6c-1.5-1.3-3.6-2-5.2-1.2C4.6 5.4 4.3 8.2 5 10.6c.6 2 1.2 3.2 1.5 5.4.3 2.2.7 4.5 2 4.5 1.4 0 1.5-2.6 1.9-4.2.3-1.2.8-2 1.6-2s1.3.8 1.6 2c.4 1.6.5 4.2 1.9 4.2 1.3 0 1.7-2.3 2-4.5.3-2.2.9-3.4 1.5-5.4.7-2.4.4-5.2-1.8-6.2-1.6-.8-3.7-.1-5.2 1.2Z";

function Svg({ className = "size-6", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ToothIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d={TOOTH} />
    </Svg>
  );
}

function WhiteningIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d={TOOTH} transform="translate(-1.2 1) scale(0.92)" />
      <path d="M19.5 1.8v3.4M17.8 3.5h3.4" />
      <path d="M21 8.2v1.6M20.2 9h1.6" />
    </Svg>
  );
}

function ImplantIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7.5 3h9A2.5 2.5 0 0 1 19 5.5v1A3.5 3.5 0 0 1 15.5 10h-7A3.5 3.5 0 0 1 5 6.5v-1A2.5 2.5 0 0 1 7.5 3Z" />
      <path d="M10 10v2.2h4V10" />
      <path d="M8.8 14.2h6.4M9.4 16.6h5.2M10 19h4M11.2 21.2h1.6" />
    </Svg>
  );
}

function BracesIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d={TOOTH} />
      <path d="M2.5 10.5h19" />
      <rect x="9.6" y="8.9" width="4.8" height="3.2" rx="0.8" />
    </Svg>
  );
}

function CanalIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d={TOOTH} />
      <path d="M10.2 9.5v5.2M13.8 9.5v5.2" />
    </Svg>
  );
}

const lucideProps = (className = "size-6"): LucideProps => ({
  className,
  strokeWidth: 1.6,
  "aria-hidden": true,
});

export function TreatmentGlyph({ name, className }: { name: TreatmentIcon; className?: string }) {
  switch (name) {
    case "whitening":
      return <WhiteningIcon className={className} />;
    case "implant":
      return <ImplantIcon className={className} />;
    case "braces":
      return <BracesIcon className={className} />;
    case "veneers":
      return <Smile {...lucideProps(className)} />;
    case "canal":
      return <CanalIcon className={className} />;
    case "cleaning":
      return <ShieldCheck {...lucideProps(className)} />;
  }
}

export function DifferentialGlyph({
  name,
  className,
}: {
  name: DifferentialIcon;
  className?: string;
}) {
  switch (name) {
    case "heart":
      return <HeartHandshake {...lucideProps(className)} />;
    case "building":
      return <Building2 {...lucideProps(className)} />;
    case "award":
      return <Award {...lucideProps(className)} />;
    case "plan":
      return <ClipboardList {...lucideProps(className)} />;
    case "tech":
      return <ScanLine {...lucideProps(className)} />;
  }
}

export function WhatsAppIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.45 9.43m8.04-17.47A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.05c0 2 .52 3.96 1.52 5.68L.58 23.62l6.03-1.58a11.33 11.33 0 0 0 5.43 1.38h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.32-8.03" />
    </svg>
  );
}

export function SocialIcon({
  name,
  className = "size-5",
}: {
  name: "Instagram" | "Facebook" | "LinkedIn";
  className?: string;
}) {
  if (name === "Instagram") {
    return (
      <Svg className={className}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </Svg>
    );
  }
  if (name === "Facebook") {
    return (
      <Svg className={className}>
        <path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v3.5H8V21h3.5v-7.5H14l.7-3.5h-3.2V7.8c0-.7.5-1.3 1.3-1.3H15Z" />
      </Svg>
    );
  }
  return (
    <Svg className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.2v.1M11 17v-6.5M11 13.5c0-1.8 1.2-3 2.8-3s2.7 1.1 2.7 3V17" />
    </Svg>
  );
}
