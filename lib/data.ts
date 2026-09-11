export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  icon: "id-card" | "receipt" | "certificate" | "shield" | "passport" | "vote" | "printer" | "graduation";
};

export const services: Service[] = [
  {
    slug: "pan-card",
    title: "PAN Card Services",
    summary: "New PAN applications and corrections, handled for you.",
    description:
      "We help you apply for a new PAN card or correct existing details — no confusing forms, no repeat trips.",
    features: [
      "New PAN card application (individuals)",
      "Correction of name, date of birth or photo",
      "Guidance on required documents",
      "Application status tracking",
    ],
    icon: "id-card",
  },
  {
    slug: "bill-payments",
    title: "Bill Payments & Recharge",
    summary: "Electricity, water, mobile and DTH — paid on the spot.",
    description:
      "Skip the queues. Pay your utility bills and recharge your mobile or DTH connection right here, with an instant receipt.",
    features: [
      "Electricity & water bill payments",
      "Mobile and DTH recharge (BBPS)",
      "Instant payment receipt",
      "All major operators and providers",
    ],
    icon: "receipt",
  },
  {
    slug: "certificates",
    title: "Government Certificates",
    summary: "Income, caste, domicile, birth & death certificates.",
    description:
      "We assist with applications for essential government certificates, guiding you through documentation and submission.",
    features: [
      "Income certificate",
      "Caste certificate",
      "Domicile / residence certificate",
      "Birth and death certificates",
    ],
    icon: "certificate",
  },
  {
    slug: "insurance",
    title: "Insurance Schemes",
    summary: "PMJJBY, PMSBY and PMFBY enrollment assistance.",
    description:
      "Get enrolled in government insurance schemes offering life, accident and crop cover at affordable premiums.",
    features: [
      "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
      "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
      "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      "Help with claims and renewals",
    ],
    icon: "shield",
  },
  {
    slug: "passport",
    title: "Passport Assistance",
    summary: "Support with your Passport Seva application.",
    description:
      "We guide you through the online Passport Seva application, document checklist and appointment booking process.",
    features: [
      "New passport applications",
      "Renewal and reissue applications",
      "Document checklist guidance",
      "Appointment slot booking support",
    ],
    icon: "passport",
  },
  {
    slug: "voter-id",
    title: "Voter ID / Election Services",
    summary: "New registration and corrections for your Voter ID.",
    description:
      "Apply for a new Voter ID or update existing details such as address and name through the Election Commission portal.",
    features: [
      "New voter registration",
      "Name, address or photo correction",
      "Shifting of constituency",
      "Application status check",
    ],
    icon: "vote",
  },
  {
    slug: "printing",
    title: "Printing, Xerox & Scanning",
    summary: "Document printing, photocopying, scanning and photos.",
    description:
      "Quick, affordable printing and document services for all your personal and application needs.",
    features: [
      "Black & white and colour printing",
      "Photocopying and scanning",
      "Passport-size photos",
      "Document lamination",
    ],
    icon: "printer",
  },
  {
    slug: "education",
    title: "Education Services",
    summary: "Exam forms, admit cards, results and tele-law support.",
    description:
      "From filling online exam applications to printing admit cards and results, we help students and job seekers stay on track.",
    features: [
      "Online exam form filling",
      "Admit card & result printouts",
      "Scholarship application assistance",
      "Tele-law and legal aid services",
    ],
    icon: "graduation",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

// Placeholder testimonials — replace with real feedback from your customers
// before publishing this site live.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Got my PAN card correction done in one visit — no running around to different offices. Very helpful staff.",
    name: "Customer, Kakkanad",
    role: "PAN Card Service",
    initials: "K",
  },
  {
    quote:
      "They helped my father apply for his income certificate and explained every step patiently. Truly a relief.",
    name: "Customer, Kakkanad",
    role: "Certificate Service",
    initials: "K",
  },
  {
    quote:
      "Paid my electricity bill and recharged my phone in the same visit. Quick, honest, and close to home.",
    name: "Customer, Kakkanad",
    role: "Bill Payment Service",
    initials: "K",
  },
  {
    quote:
      "Guided me through my passport application from start to finish. I didn't have to figure out the portal myself.",
    name: "Customer, Kakkanad",
    role: "Passport Assistance",
    initials: "K",
  },
];

export type GalleryItem = {
  title: string;
  category: string;
  description: string;
};

// Placeholder gallery entries — swap these for real photos of your centre,
// service counter and camps once you have them.
export const galleryItems: GalleryItem[] = [
  {
    title: "Our Service Counter",
    category: "Our Centre",
    description: "The front desk where customers are welcomed and guided.",
  },
  {
    title: "Document Assistance",
    category: "Service Counter",
    description: "Helping a customer complete a certificate application.",
  },
  {
    title: "Printing & Xerox Corner",
    category: "Our Centre",
    description: "Our printing, scanning and photocopy setup.",
  },
  {
    title: "Insurance Enrollment Camp",
    category: "Community Camps",
    description: "An outreach camp helping residents enroll in PMSBY/PMJJBY.",
  },
  {
    title: "Certificate Collection",
    category: "Service Counter",
    description: "A customer collecting a completed government certificate.",
  },
  {
    title: "Waiting & Reception Area",
    category: "Our Centre",
    description: "A clean, comfortable space for customers waiting to be served.",
  },
];

export const values = [
  {
    title: "Trust & authenticity",
    description:
      "As an authorized CSC Digital Seva Kendra, every service is processed through official government channels.",
  },
  {
    title: "Accessible to everyone",
    description:
      "We serve every resident of Kakkanad, regardless of age or comfort with technology, in simple, clear language.",
  },
  {
    title: "Accurate & compliant",
    description:
      "Applications are filled carefully and correctly the first time, so your service isn't delayed or rejected.",
  },
  {
    title: "Community first",
    description:
      "We're your neighbours. Our goal is to make essential government services easy to reach, close to home.",
  },
];
