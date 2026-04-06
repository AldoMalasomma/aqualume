export const creatorBridge = {
  label: 'Design and development',
  name: 'Aldo G. Malasomma',
  business: 'CopyCodeAI',
  website: 'https://copycodeai.online',
  email: 'hello@copycodeai.online',
  href: 'mailto:hello@copycodeai.online',
  location: 'Tallinn, Estonia',
} as const;

export const footerDisclosure = {
  label: 'Portfolio',
  text: 'Portfolio concept. Fictional brand and venue details.',
} as const;

export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Portfolio Disclosure', href: '/portfolio-disclosure' },
] as const;

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageContent = {
  pageTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  note?: string;
};

export const legalPageContent = {
  privacy: {
    pageTitle: 'Privacy Policy | Aqualume',
    description: 'Privacy policy for the Aqualume portfolio concept and consultation surfaces.',
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    intro:
      'This site is a portfolio concept presented as a fictional medical aesthetics and wellness brand. Any information submitted through forms, or needed for technical site operation, is handled by the real operator behind the portfolio: Aldo G. Malasomma / CopyCodeAI, Tallinn, Estonia.',
    sections: [
      {
        title: 'Information you submit',
        body: [
          'Consultation and contact details are used only to review requests and reply to you.',
          'The site does not currently process payments, user accounts, or customer databases.',
        ],
      },
      {
        title: 'Technical data',
        body: [
          'Basic request metadata or server logs may be processed to keep the site secure, reliable, and debuggable.',
          'If the technical setup changes, this page will be updated before any broader use of the data.',
        ],
      },
      {
        title: 'Contact',
        body: [`Questions about privacy or data handling can be sent to ${creatorBridge.email}.`],
      },
    ],
  },
  terms: {
    pageTitle: 'Terms & Conditions | Aqualume',
    description: 'Terms and conditions for the Aqualume portfolio concept and consultation surfaces.',
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    intro:
      'This site presents a portfolio concept for a fictional clinic brand and is not a live booking contract.',
    sections: [
      {
        title: 'Concept status',
        body: [
          'The brand, location details, treatment menu, and consultation flow are fictional and used to demonstrate design, UX, and content strategy.',
          'Any live deployment would require formal legal review, clinical review, and business-specific terms before use.',
        ],
      },
      {
        title: 'Original work',
        body: [
          'The design, development, UX, and technical implementation are original work by Aldo G. Malasomma / CopyCodeAI.',
          'The portfolio should be considered a presentation artifact until it is formally converted into a live client website.',
        ],
      },
    ],
  },
  disclosure: {
    pageTitle: 'Portfolio Disclosure | Aqualume',
    description: 'Portfolio disclosure for the Aqualume concept project.',
    eyebrow: 'Portfolio',
    title: 'Portfolio Disclosure',
    intro:
      'A concise note on the boundary between the fictional clinic world and the real operator behind the build.',
    sections: [
      {
        title: 'Project',
        body: [
          'Aqualume is a fictional medical aesthetics and wellness concept built to demonstrate branding, copy, UX, and responsive Astro execution.',
          'The site keeps the feel of a real clinic proposal while remaining a portfolio case study.',
        ],
      },
      {
        title: 'Real operator',
        body: [
          'Aldo G. Malasomma / CopyCodeAI is the real operator and compliance contact behind the portfolio project.',
          `Contact: ${creatorBridge.email}.`,
        ],
      },
      {
        title: 'Stack',
        body: ['Astro, semantic HTML, scoped CSS, and a content-first structure that can be extended toward a CMS layer.'],
      },
    ],
    note: footerDisclosure.text,
  },
} satisfies Record<string, LegalPageContent>;
