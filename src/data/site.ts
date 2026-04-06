import { images } from './images';

export const site = {
  name: 'Aqualume',
  tagline: 'Aesthetics & Wellness',
  bookingHref: '/book-consultation',
  phone: '+1 (555) 018-2026',
  email: 'hello@aqualumeclinic.com',
  address: 'Missoula and Kalispell, Montana',
};

export const navLinks = [
  { href: '/treatments', label: 'Treatments' },
  { href: '/#wellness', label: 'Wellness' },
  { href: '/#locations', label: 'Locations' },
  { href: '/#about', label: 'About' },
  { href: '/#results', label: 'Results' },
];

export const heroTrustItems = [
  'Medical aesthetics',
  'Personalized wellness',
  'Missoula & Kalispell',
];

export const treatmentGoals = [
  {
    label: 'Smooth fine lines',
    description: 'Gentle expression softening with a natural finish.',
    href: '/treatments',
  },
  {
    label: 'Improve skin texture',
    description: 'Refine tone, clarity, and surface quality.',
    href: '/treatments',
  },
  {
    label: 'Refresh facial volume',
    description: 'Restore balance while keeping features recognizable.',
    href: '/treatments',
  },
  {
    label: 'Support weight loss',
    description: 'Clinically guided support with steady accountability.',
    href: '/treatments',
  },
  {
    label: 'Balance hormones',
    description: 'A more stable baseline for energy and wellbeing.',
    href: '/treatments',
  },
  {
    label: 'Explore all treatments',
    description: 'See the clinic’s full service direction.',
    href: '/treatments',
  },
];

export const featuredTreatments = [
  {
    name: 'Wrinkle Relaxers',
    category: 'Expression balance',
    description: 'A soft, controlled refresh that eases lines while preserving expression.',
    details: ['Natural finish', 'Quick appointment', 'Subtle refinement'],
    image: images.treatments.wrinkleRelaxers,
    alt: 'A softly lit injectable treatment room with aqua accents and a reclining chair',
    width: 800,
    height: 600,
  },
  {
    name: 'Dermal Fillers',
    category: 'Volume and contour',
    description: 'Measured contouring for lips, cheeks, and facial harmony.',
    details: ['Careful placement', 'Shape support', 'Balanced results'],
    image: images.treatments.dermalFillers,
    alt: 'A refined consultation setting with a treatment chair and softly lit clinical finishes',
    width: 800,
    height: 600,
  },
  {
    name: 'Laser Skin Rejuvenation',
    category: 'Tone and clarity',
    description: 'A polished approach to brightness, texture, and overall skin quality.',
    details: ['Even tone', 'Gentle precision', 'Layered improvement'],
    image: images.treatments.laserSkinRejuvenation,
    alt: 'A modern laser treatment room with cool white finishes and gentle daylight',
    width: 800,
    height: 600,
  },
  {
    name: 'Medical Weight Loss',
    category: 'Guided support',
    description: 'Structured treatment planning for healthier momentum and accountability.',
    details: ['Clinical guidance', 'Follow-up support', 'Steady pacing'],
    image: images.treatments.medicalWeightLoss,
    alt: 'A private consultation desk with wellness notes and calm aqua surfaces',
    width: 800,
    height: 600,
  },
  {
    name: 'Hormone Optimization',
    category: 'Energy and balance',
    description: 'A thoughtful path toward improved stability, vitality, and daily wellbeing.',
    details: ['Measured care', 'Ongoing reviews', 'Whole-body support'],
    image: images.treatments.hormoneOptimization,
    alt: 'A serene clinical consultation room prepared for wellness planning',
    width: 800,
    height: 600,
  },
  {
    name: 'Skin Tightening',
    category: 'Firmness and lift',
    description: 'Targeted technology for a smoother, more supported look over time.',
    details: ['Non-invasive option', 'Textural support', 'Longer-term planning'],
    image: images.treatments.skinTightening,
    alt: 'A polished treatment room with neutral finishes and a comfortable treatment bed',
    width: 800,
    height: 600,
  },
];

export const treatmentCategoryNav = [
  {
    label: 'Injectables',
    description: 'Expression balance, contour, and small refinements.',
    href: '#injectables',
  },
  {
    label: 'Skin Rejuvenation',
    description: 'Texture, clarity, and barrier-focused treatments.',
    href: '#skin-rejuvenation',
  },
  {
    label: 'Laser Treatments',
    description: 'Precision-based treatments for tone and brightness.',
    href: '#laser-treatments',
  },
  {
    label: 'Body Contouring',
    description: 'Support for firmness, shape, and definition.',
    href: '#body-contouring',
  },
  {
    label: 'Medical Weight Loss',
    description: 'Structured support for steady, healthy progress.',
    href: '#medical-weight-loss',
  },
  {
    label: 'Hormone Wellness',
    description: 'Energy, balance, and tailored wellness planning.',
    href: '#hormone-wellness',
  },
];

export const treatmentSections = [
  {
    id: 'injectables',
    eyebrow: 'Injectables',
    title: 'Soft refinement with a focus on expression and proportion.',
    description:
      'A premium injectable menu should feel edited and carefully guided. These treatments are framed as subtle, high-trust enhancements rather than dramatic change.',
    treatments: [
      {
        name: 'Wrinkle Relaxers',
        category: 'Injectables',
        description: 'A gentle smoothing approach that softens lines without flattening expression.',
        details: ['Subtle finish', 'Quick visit', 'Maintenance-friendly'],
        image: images.treatments.wrinkleRelaxers,
        alt: 'A softly lit injectable treatment room with aqua accents and a reclining chair',
        width: 800,
        height: 600,
      },
      {
        name: 'Dermal Fillers',
        category: 'Injectables',
        description: 'Measured volume restoration for cheeks, lips, and facial balance.',
        details: ['Careful placement', 'Shape support', 'Natural contour'],
        image: images.treatments.dermalFillers,
        alt: 'A refined consultation setting with a treatment chair and softly lit clinical finishes',
        width: 800,
        height: 600,
      },
      {
        name: 'Lip Enhancement',
        category: 'Injectables',
        description: 'Refined lip definition designed to stay soft, balanced, and believable.',
        details: ['Shape-first', 'Minimal look', 'Personalized volume'],
        image: images.consultationSetting,
        alt: 'A private consultation desk with thoughtful notes and refined aqua accents',
        width: 800,
        height: 600,
      },
    ],
  },
  {
    id: 'skin-rejuvenation',
    eyebrow: 'Skin Rejuvenation',
    title: 'Texture, hydration, and glow with a calm, layered approach.',
    description:
      'These treatments are positioned as skin-quality rituals that build momentum over time rather than one-off fixes.',
    treatments: [
      {
        name: 'Microneedling',
        category: 'Skin Rejuvenation',
        description: 'A measured resurfacing treatment for texture, softness, and renewed brightness.',
        details: ['Texture support', 'Collagen focus', 'Downtime-aware'],
        image: images.consultationSetting,
        alt: 'A private consultation desk with thoughtful notes and refined aqua accents',
        width: 800,
        height: 600,
      },
      {
        name: 'Chemical Peels',
        category: 'Skin Rejuvenation',
        description: 'Tailored peel options designed to gently refresh the surface and improve clarity.',
        details: ['Customized depth', 'Tone support', 'Seasonal planning'],
        image: images.treatments.laserSkinRejuvenation,
        alt: 'A modern laser treatment room with cool white finishes and gentle daylight',
        width: 800,
        height: 600,
      },
      {
        name: 'Hydrating Facials',
        category: 'Skin Rejuvenation',
        description: 'A restorative facial experience centered on moisture, comfort, and calm.',
        details: ['Barrier care', 'Glow boost', 'Relaxed pacing'],
        image: images.sectionSoftSpaDetail,
        alt: 'A softly textured spa detail with calm aqua and white surfaces',
        width: 800,
        height: 600,
      },
    ],
  },
  {
    id: 'laser-treatments',
    eyebrow: 'Laser Treatments',
    title: 'Precision-based technology for tone, brightness, and clarity.',
    description:
      'The laser category is framed as a calm, technical solution set that supports visible refinement without a harsh clinic feel.',
    treatments: [
      {
        name: 'Laser Resurfacing',
        category: 'Laser Treatments',
        description: 'A controlled approach to texture, fine lines, and smoother overall skin quality.',
        details: ['Precision care', 'Tone support', 'Planned recovery'],
        image: images.treatments.laserSkinRejuvenation,
        alt: 'A modern laser treatment room with cool white finishes and gentle daylight',
        width: 800,
        height: 600,
      },
      {
        name: 'Pigment Correction',
        category: 'Laser Treatments',
        description: 'Targeted support for uneven tone, visible pigmentation, and brighter skin.',
        details: ['Even tone', 'Careful targeting', 'Progressive improvement'],
        image: images.locations.kalispell,
        alt: 'A luminous clinic location interior with seafoam-toned finishes and daylight',
        width: 960,
        height: 660,
      },
      {
        name: 'Hair Reduction',
        category: 'Laser Treatments',
        description: 'A practical, polished solution for long-term reduction and simplified upkeep.',
        details: ['Low-fuss care', 'Longer-term plan', 'Comfort-first'],
        image: images.locations.missoula,
        alt: 'A bright Montana clinic reception with natural light and polished finishes',
        width: 960,
        height: 660,
      },
    ],
  },
  {
    id: 'body-contouring',
    eyebrow: 'Body Contouring',
    title: 'Support for firmness, shape, and a more sculpted profile.',
    description:
      'These offerings are presented as steady body-shaping support with a conservative and credible aesthetic tone.',
    treatments: [
      {
        name: 'Skin Tightening',
        category: 'Body Contouring',
        description: 'A supportive treatment for a smoother, firmer-looking finish.',
        details: ['Non-invasive', 'Texture support', 'Measured sessions'],
        image: images.treatments.skinTightening,
        alt: 'A polished treatment room with neutral finishes and a comfortable treatment bed',
        width: 800,
        height: 600,
      },
      {
        name: 'Sculpting Treatments',
        category: 'Body Contouring',
        description: 'Body-shaping support designed to complement healthy habits and consistency.',
        details: ['Contouring plan', 'Progressive', 'Goal-focused'],
        image: images.sectionSoftSpaDetail,
        alt: 'A softly textured spa detail with calm aqua and white surfaces',
        width: 800,
        height: 600,
      },
      {
        name: 'Cellulite / contour support',
        category: 'Body Contouring',
        description: 'A practical support plan for smoother contour and improved confidence.',
        details: ['Supportive care', 'Targeted focus', 'Maintenance-minded'],
        image: images.ctaConsultationLounge,
        alt: 'A comfortable consultation lounge with softly upholstered seating and aqua details',
        width: 960,
        height: 600,
      },
    ],
  },
  {
    id: 'medical-weight-loss',
    eyebrow: 'Medical Weight Loss',
    title: 'Structured support for healthier momentum and lasting progress.',
    description:
      'The focus here is on guided care, accountability, and a plan that feels sustainable rather than extreme.',
    treatments: [
      {
        name: 'Personalized Weight Loss Plans',
        category: 'Medical Weight Loss',
        description: 'A custom program shaped around goals, pace, and sustainable habits.',
        details: ['Tailored support', 'Accountability', 'Steady pacing'],
        image: images.ctaConsultationLounge,
        alt: 'A comfortable consultation lounge with softly upholstered seating and aqua details',
        width: 960,
        height: 600,
      },
      {
        name: 'Semaglutide Support',
        category: 'Medical Weight Loss',
        description: 'Clinical guidance around a medically supported weight management path.',
        details: ['Medical oversight', 'Ongoing review', 'Progress tracking'],
        image: images.treatments.hormoneOptimization,
        alt: 'A serene clinical consultation room prepared for wellness planning',
        width: 800,
        height: 600,
      },
      {
        name: 'Lifestyle-Guided Programs',
        category: 'Medical Weight Loss',
        description: 'A realistic framework for nutrition, movement, and long-term maintenance.',
        details: ['Habit support', 'Balanced approach', 'Long-view planning'],
        image: images.consultationSetting,
        alt: 'A private consultation desk with thoughtful notes and refined aqua accents',
        width: 800,
        height: 600,
      },
    ],
  },
  {
    id: 'hormone-wellness',
    eyebrow: 'Hormone Wellness',
    title: 'Balanced care for energy, vitality, and long-term wellbeing.',
    description:
      'This section positions hormone care as an ongoing wellness conversation, not a one-time intervention.',
    treatments: [
      {
        name: 'Hormone Optimization',
        category: 'Hormone Wellness',
        description: 'A personalized wellness path designed to improve balance and daily stability.',
        details: ['Ongoing review', 'Measured care', 'Individual planning'],
        image: images.treatments.hormoneOptimization,
        alt: 'A serene clinical consultation room prepared for wellness planning',
        width: 800,
        height: 600,
      },
      {
        name: 'Energy and Vitality Support',
        category: 'Hormone Wellness',
        description: 'A focused program for patients wanting more stable energy and resilience.',
        details: ['Whole-body lens', 'Steady support', 'Clinically guided'],
        image: images.team.wellnessSpecialist,
        alt: 'Portrait of a wellness specialist in a bright premium clinic setting',
        width: 800,
        height: 1000,
      },
      {
        name: 'Personalized Wellness Consultations',
        category: 'Hormone Wellness',
        description: 'A conversation-led appointment to map the right care plan and next steps.',
        details: ['Private review', 'Clear next steps', 'Tailored to goals'],
        image: images.team.patientExperienceDirector,
        alt: 'Portrait of a patient experience director in a calm, refined clinic setting',
        width: 800,
        height: 1000,
      },
    ],
  },
];

export const treatmentPathways = [
  {
    label: 'I want smoother skin',
    description: 'Start with texture, glow, and surface refinement.',
    href: `mailto:${site.email}?subject=Smoother%20skin%20consultation`,
  },
  {
    label: 'I want facial rejuvenation',
    description: 'Explore injectables, laser, and lift-focused treatments.',
    href: `mailto:${site.email}?subject=Facial%20rejuvenation%20consultation`,
  },
  {
    label: 'I want wellness support',
    description: 'Discuss weight loss or hormone-focused care paths.',
    href: `mailto:${site.email}?subject=Wellness%20support%20consultation`,
  },
];

export const treatmentCareNotes = [
  {
    question: 'How are treatments chosen?',
    answer: 'Every recommendation starts with your goals, your timeline, and the level of change that feels right.',
  },
  {
    question: 'Can the plan combine aesthetics and wellness?',
    answer: 'Yes. The proposal is built around a clinic model that connects skin, contour, and internal wellbeing.',
  },
  {
    question: 'Will the results stay natural?',
    answer: 'That is the standard. The direction is always measured, conservative, and designed to feel believable.',
  },
];

export const whyPatientsChoose = [
  {
    title: 'Personalized plans',
    description: 'Each recommendation is shaped around the person, the timeline, and the desired level of change.',
  },
  {
    title: 'Advanced techniques',
    description: 'Modern tools and conservative technique are used to keep results precise and credible.',
  },
  {
    title: 'Natural-looking results',
    description: 'The aesthetic direction is refined, subtle, and designed to age well beyond the appointment.',
  },
  {
    title: 'Experienced care',
    description: 'A calm, high-trust experience from consultation through follow-up and maintenance.',
  },
];

export const testimonials = [
  {
    label: 'Patient story',
    quote:
      'The clinic feels composed from the first interaction. I never felt rushed, and the result still looks like me.',
    name: 'Alyssa R.',
    role: 'Missoula patient',
  },
  {
    label: 'Trusted locally',
    quote:
      'Everything about the experience feels premium but not intimidating. It is exactly the tone I want in a wellness clinic.',
    name: 'Jordan M.',
    role: 'Kalispell patient',
  },
  {
    label: 'Patient story',
    quote:
      'The team explained every step clearly and built a plan that made sense for my goals and schedule.',
    name: 'Tessa W.',
    role: 'Long-term patient',
  },
];

export const team = [
  {
    name: 'Dr. Nadia Hale',
    title: 'Lead Aesthetic Physician',
    focus: 'Facial balancing, injectables, and conservative treatment planning.',
    image: images.team.leadAestheticPhysician,
    alt: 'Portrait of Dr. Nadia Hale, lead aesthetic physician, in soft natural light',
    width: 800,
    height: 1000,
  },
  {
    name: 'Amina Patel',
    title: 'Wellness Specialist',
    focus: 'Medical weight loss, infusion support, and patient follow-up.',
    image: images.team.wellnessSpecialist,
    alt: 'Portrait of Amina Patel, wellness specialist, in a bright premium clinic setting',
    width: 800,
    height: 1000,
  },
  {
    name: 'Grace Lind',
    title: 'Patient Experience Director',
    focus: 'Consultation flow, scheduling clarity, and long-term care coordination.',
    image: images.team.patientExperienceDirector,
    alt: 'Portrait of Grace Lind, patient experience director, in a calm refined setting',
    width: 800,
    height: 1000,
  },
];

export const locations = [
  {
    name: 'Missoula',
    address: 'Downtown Missoula, Montana',
    hours: 'Mon-Fri, 9:00 AM - 5:30 PM',
    services: 'Consultations, injectables, laser care, and wellness visits',
    linkLabel: 'Book Missoula consultation',
    linkHref: `mailto:${site.email}?subject=Missoula%20consultation`,
    description: 'A calm urban destination shaped around privacy, clear consultation flow, and premium care.',
    image: images.locations.missoula,
    alt: 'A bright Montana clinic reception with natural light and polished finishes',
    width: 960,
    height: 660,
  },
  {
    name: 'Kalispell',
    address: 'Kalispell, Montana',
    hours: 'Tue-Sat, 10:00 AM - 6:00 PM',
    services: 'Wellness support, maintenance visits, and tailored treatment programs',
    linkLabel: 'Book Kalispell consultation',
    linkHref: `mailto:${site.email}?subject=Kalispell%20consultation`,
    description: 'A refined retreat-like setting for patients who want a calm, elevated experience.',
    image: images.locations.kalispell,
    alt: 'A luminous clinic location interior with seafoam-toned finishes and daylight',
    width: 960,
    height: 660,
  },
];
