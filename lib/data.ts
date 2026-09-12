export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  // Optional real photo/graphic for the services list card — falls back to
  // a gradient + icon placeholder when not set.
  photo?: string;
  icon:
    | "id-card"
    | "receipt"
    | "certificate"
    | "shield"
    | "passport"
    | "vote"
    | "printer"
    | "graduation"
    | "car"
    | "ration"
    | "building"
    | "ticket"
    | "legal";
};

export const services: Service[] = [
  {
    slug: "rto-services",
    title: "RTO / Motor Vehicle Services",
    summary: "Driving licence and RC services, without the RTO queue.",
    description:
      "From a new learner's licence to a vehicle ownership transfer, we handle your Regional Transport Office applications correctly the first time.",
    features: [
      "Driving Licence — new, renewal, duplicate, address change, IDP",
      "Learner's Licence application",
      "RC services — ownership transfer, duplicate RC, hypothecation",
      "RC address change, NOC, fitness, renewal & road tax payment",
    ],
    photo: "/services/rto.png",
    icon: "car",
  },
  {
    slug: "certificates",
    title: "Government Certificates",
    summary: "Income, marriage, encumbrance and more — done right the first time.",
    description:
      "We assist with a wide range of government certificates and legal documents, guiding you through documentation and submission.",
    features: [
      "Income, caste & residence certificates",
      "Marriage Certificate & Special Marriage Certificate",
      "Encumbrance Certificate & Certified Copy",
      "Jeevan Pramaan — digital life certificate for pensioners",
    ],
    photo: "/services/certificate.jpg",
    icon: "certificate",
  },
  {
    slug: "pan-card",
    title: "PAN Card Services",
    summary: "New PAN applications, corrections and reprints.",
    description:
      "We help you apply for a new PAN card, correct existing details, or get a reprint — no confusing forms, no repeat trips.",
    features: [
      "New PAN card application (individuals)",
      "Correction of name, date of birth or photo",
      "Duplicate / reprint of PAN card",
      "Guidance on required documents",
    ],
    photo: "/services/pan-card.jpg",
    icon: "id-card",
  },
  {
    slug: "passport",
    title: "Passport Services",
    summary: "New, Tatkal, renewal and correction applications.",
    description:
      "We guide you through the online Passport Seva application, document checklist and appointment booking process.",
    features: [
      "New passport application",
      "Tatkal (urgent) passport application",
      "Renewal and reissue applications",
      "Correction of passport details",
    ],
    photo: "/services/passport.jpg",
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
    photo: "/services/voter-id.jpg",
    icon: "vote",
  },
  {
    slug: "insurance",
    title: "Insurance Services",
    summary: "Health and vehicle insurance, sorted quickly.",
    description:
      "Get enrolled in health and vehicle insurance policies, with help understanding your cover and filing claims.",
    features: [
      "Health insurance enrollment",
      "Vehicle insurance — new policy & renewal",
      "Help understanding policy documents",
      "Assistance with claims",
    ],
    photo: "/services/insurance.jpg",
    icon: "shield",
  },
  {
    slug: "ration-card",
    title: "Ration Card Services",
    summary: "New cards, member updates and transfers.",
    description:
      "We handle new ration card applications and updates to your existing card through the Civil Supplies Department.",
    features: [
      "New ration card application",
      "Add a family member",
      "Reduction of member",
      "Transfer of ration card",
    ],
    photo: "/services/ration-card.jpg",
    icon: "ration",
  },
  {
    slug: "bill-payments",
    title: "Bill Payments & Recharges",
    summary: "Utility bills and recharges, paid on the spot.",
    description:
      "Skip the queues. Pay your taxes, utility bills, and recharge your mobile, FASTag or DTH right here, with an instant receipt.",
    features: [
      "Land Tax & Building Tax payments",
      "KSEB electricity & water bill payments",
      "Mobile, landline & broadband bill payments",
      "PNG gas & cable TV bill payments",
      "Mobile, FASTag & DTH recharge",
    ],
    photo: "/services/bill-payments.png",
    icon: "receipt",
  },
  {
    slug: "land-municipality",
    title: "Land & Municipality Services",
    summary: "Municipality licences and land conversion (Tharam Maattam).",
    description:
      "Assistance with local body licences and land classification change applications through the Revenue Department.",
    features: [
      "Municipality Licence — new & renewal",
      "Tharam Maattam (land conversion) — Form 5",
      "Tharam Maattam (land conversion) — Form 6",
    ],
    photo: "/services/land-municipality.png",
    icon: "building",
  },
  {
    slug: "student-support",
    title: "Student Support Services",
    summary: "Exam forms, admissions and learning support.",
    description:
      "From filling online exam applications to college admissions, we help students and job seekers stay on track.",
    features: [
      "School / college application assistance",
      "Fee remittance",
      "Entrance exam forms — NEET, KEAM, JEE, PG",
      "PSC, SSC & banking exam applications",
      "Access to learning apps & online courses",
    ],
    photo: "/services/student-support.png",
    icon: "graduation",
  },
  {
    slug: "printing-lamination",
    title: "Printing, Lamination & PVC Cards",
    summary: "Print, laminate and get durable PVC ID cards made.",
    description:
      "Quick, affordable printing and document services, plus durable lamination and PVC card printing for your ID documents.",
    features: [
      "Scan, print & email; colour & B/W photocopy; photo printing",
      "Lamination — ID cards, ration cards, A3/A4/legal size",
      "PVC card printing — PAN, ration, driving licence, e-Shram & more",
      "Typing (English & Malayalam), resumes & deed preparation",
    ],
    photo: "/services/printing-lamination.png",
    icon: "printer",
  },
  {
    slug: "travel-ticketing",
    title: "Travel & Ticket Booking",
    summary: "Air, train and bus tickets booked for you.",
    description:
      "Book your travel tickets with us — no need to juggle multiple apps and websites.",
    features: ["Air ticket booking", "Train ticket booking (IRCTC)", "Bus ticket booking"],
    photo: "/services/travel-ticketing.png",
    icon: "ticket",
  },
  {
    slug: "tele-law",
    title: "Tele Law",
    summary: "Free legal advice, connected over video call.",
    description:
      "Speak with a panel lawyer over video call for guidance on common legal issues, under the Tele-Law scheme.",
    features: [
      "Consultation with panel lawyers",
      "Guidance on common legal issues",
      "Support for eligible citizens under the Tele-Law scheme",
    ],
    photo: "/services/tele-law.png",
    icon: "legal",
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
    description: "An outreach camp helping residents enroll in health and vehicle insurance.",
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
