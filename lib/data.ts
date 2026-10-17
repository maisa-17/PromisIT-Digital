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
    summary: "Driving licence and RC services in Kakkanad, without the RTO queue.",
    description:
      "From a new learner's licence to a vehicle ownership transfer, we handle your Regional Transport Office applications correctly the first time.",
    features: [
      "Driving Licence — new, renewal, duplicate, address change, IDP",
      "Learner's Licence application",
      "RC services — ownership transfer, duplicate RC, hypothecation",
      "RC address change, NOC, fitness, renewal & road tax payment",
    ],
    photo: "/services/rto-v2.webp",
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
    photo: "/services/certificate.webp",
    icon: "certificate",
  },
  {
    slug: "pan-card",
    title: "PAN Card Services",
    summary: "New PAN applications, corrections and reprints — right here in Kakkanad.",
    description:
      "We help you apply for a new PAN card, correct existing details, or get a reprint — no confusing forms, no repeat trips.",
    features: [
      "New PAN card application (individuals)",
      "Correction of name, date of birth or photo",
      "Duplicate / reprint of PAN card",
      "Guidance on required documents",
    ],
    photo: "/services/pan-card.webp",
    icon: "id-card",
  },
  {
    slug: "passport",
    title: "Passport Services",
    summary: "New, Tatkal, renewal and correction applications, from our Kakkanad centre.",
    description:
      "We guide you through the online Passport Seva application, document checklist and appointment booking process.",
    features: [
      "New passport application",
      "Tatkal (urgent) passport application",
      "Renewal and reissue applications",
      "Correction of passport details",
    ],
    photo: "/services/passport.webp",
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
    photo: "/services/voter-id.webp",
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
    photo: "/services/insurance.webp",
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
    photo: "/services/ration-card.webp",
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
    photo: "/services/bill-payments.webp",
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
    photo: "/services/land-municipality.webp",
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
    photo: "/services/student-support-v2.webp",
    icon: "graduation",
  },
  {
    slug: "printing-lamination",
    title: "Printing, Lamination & PVC Cards",
    summary: "Print, laminate and get durable PVC ID cards made — in Kakkanad.",
    description:
      "Quick, affordable printing and document services, plus durable lamination and PVC card printing for your ID documents.",
    features: [
      "Scan, print & email; colour & B/W photocopy; photo printing",
      "Lamination — ID cards, ration cards, A3/A4/legal size",
      "PVC card printing — PAN, ration, driving licence, e-Shram & more",
      "Typing (English & Malayalam), resumes & deed preparation",
    ],
    photo: "/services/printing-lamination.webp",
    icon: "printer",
  },
  {
    slug: "travel-ticketing",
    title: "Travel & Ticket Booking",
    summary: "Air, train and bus tickets booked for you.",
    description:
      "Book your travel tickets with us — no need to juggle multiple apps and websites.",
    features: ["Air ticket booking", "Train ticket booking (IRCTC)", "Bus ticket booking"],
    photo: "/services/travel-ticketing.webp",
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
    photo: "/services/tele-law.webp",
    icon: "legal",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

// Sample testimonials with representative local names and places — swap
// these for genuine, consented customer feedback before publishing live.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Got my PAN card correction done in one visit — no running around to different offices. Very helpful staff.",
    name: "Anoop Menon, Kakkanad",
    role: "PAN Card Service",
    initials: "AM",
  },
  {
    quote:
      "They helped my father apply for his building certificate and explained every step patiently. Truly a relief.",
    name: "Divya Pillai, Ambadimoola",
    role: "Certificate Service",
    initials: "DP",
  },
  {
    quote:
      "Paid my electricity bill and recharged my phone in the same visit. Quick, honest, and close to home.",
    name: "Sudheesh Kumar, NGO Quarters",
    role: "Bill Payment Service",
    initials: "SK",
  },
  {
    quote:
      "Guided me through my passport application from start to finish. I didn't have to figure out the portal myself.",
    name: "Reshma Thomas, Thrikkakara",
    role: "Passport Assistance",
    initials: "RT",
  },
  {
    quote:
      "Corrected my address on the voter ID within a few days. They kept me updated instead of leaving me guessing.",
    name: "Vishnu Nair, Padamugal",
    role: "Voter ID Service",
    initials: "VN",
  },
  {
    quote:
      "Renewed my driving licence here after putting it off for months — the RTO paperwork finally made sense.",
    name: "Latha Varghese, Vazhakkala",
    role: "RTO Service",
    initials: "LV",
  },
  {
    quote:
      "Applied for a new ration card and they double-checked every document before submitting, so it went through the first time.",
    name: "Rahul Krishnan, Infopark",
    role: "Ration Card Service",
    initials: "RK",
  },
  {
    quote:
      "Sorted out my property tax payment at the municipality without a single follow-up trip. Saved me a whole day.",
    name: "Sini Joseph, BMC",
    role: "Land & Municipality Service",
    initials: "SJ",
  },
  {
    quote:
      "Helped my daughter with her scholarship application and college forms — patient with all our questions.",
    name: "Manoj Pillai, Chittethukara",
    role: "Student Support Service",
    initials: "MP",
  },
  {
    quote:
      "Booked our family's train tickets for Onam in minutes, right down the road instead of queuing at the station.",
    name: "Aswathy Balakrishnan, Karimakkad",
    role: "Travel & Ticket Booking",
    initials: "AB",
  },
];

export type GalleryItem = {
  title: string;
  category: string;
  description: string;
  // Optional real photo — falls back to a gradient + initials placeholder
  // when not set.
  photo?: string;
};

// Placeholder gallery entries — swap these for real photos of your centre,
// service counter and camps once you have them.
export const galleryItems: GalleryItem[] = [
  {
    title: "Our Storefront",
    category: "Our Centre",
    description: "The Promis IT Digital Solutions centre in Kakkanad, easy to spot from the road.",
    photo: "/gallery/storefront.webp",
  },
  {
    title: "Our Service Counter",
    category: "Our Centre",
    description: "The front desk where customers are welcomed and guided.",
    photo: "/gallery/service-counter.webp",
  },
  {
    title: "Document Assistance",
    category: "Service Counter",
    description: "Helping a customer complete a certificate application.",
    photo: "/gallery/document-assistance.webp",
  },
  {
    title: "Printing & Xerox Corner",
    category: "Our Centre",
    description: "Our printing, scanning and photocopy setup.",
    photo: "/gallery/printing-corner.webp",
  },
  {
    title: "Our Photocopier",
    category: "Our Centre",
    description: "Scan, copy and print — fast, reliable, and always on hand.",
    photo: "/gallery/photocopier.webp",
  },
  {
    title: "Our Team",
    category: "Our Team",
    description: "The team behind every service, celebrating Onam together at our centre.",
    photo: "/gallery/our-team.webp",
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
