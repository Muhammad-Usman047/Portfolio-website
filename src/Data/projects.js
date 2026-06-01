import skylink1 from '../assets/skylink-1.png';
import skylink2 from '../assets/skylink-2.png';
import skylink3 from '../assets/skylink-3.png';
import oro1 from '../assets/orotracker-1.png';
import oro2 from '../assets/orotracker-2.png';
import oro3 from '../assets/orotracker-3.png';
import oro4 from '../assets/orotracker-4.png';
import cap1 from '../assets/capregsoft-1.png';
import cap2 from '../assets/capregsoft-2.png';
import jira1 from '../assets/jira-1.png';
import jira2 from '../assets/jira-2.png';
import jira3 from '../assets/jira-3.png';

export const projects = [
  {
    slug: 'orotracker',
    title: 'OroTracker',
    kicker: 'Live precious-metals platform · Production',
    year: '2025',
    blurb:
      'A live gold & silver price-tracking platform serving investors worldwide — real-time prices, interactive charts, and finance tooling.',
    cover: oro1,
    accent: '#e6a817',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    role: 'Frontend Developer',
    live: 'https://orotracker.com',
    featured: true,
    gallery: [
      { src: oro1, caption: 'Landing — live precious-metal prices with unit & currency switching' },
      { src: oro2, caption: 'Interactive price-history charting (line / candle / area, multi-range)' },
      { src: oro3, caption: 'Blog & insights — editorial content hub' },
      { src: oro4, caption: 'Zakat calculator with purity, unit and live-price logic' },
    ],
    problem:
      'Investors worldwide needed a single place to track live gold and silver prices and act on them — across currencies, units (gram, tola, ounce, kilo) and purities — without wrestling with sluggish, desktop-only tools.',
    contribution: [
      'Owned the frontend build using React, Next.js, Tailwind CSS and TypeScript.',
      'Built core platform features: live price views, interactive multi-mode price charts (line / candle / area) with selectable time ranges, a Zakat calculator, and a currency converter.',
      'Delivered a fully responsive interface tuned for both desktop and mobile users across global markets.',
    ],
    process:
      'I worked component-first in a typed Next.js codebase, modelling prices, currencies and purity tiers as reusable typed structures so new tools (Zakat, conversions, alerts) plugged into the same data layer. Charts were built to stay readable from a 1-day view down to long-range history, and the whole UI was validated against real mobile breakpoints before shipping.',
    outcome: [
      'A live product (orotracker.com) used by a global investor audience.',
      'High-performance, fully responsive UI that holds up on desktop and mobile alike.',
      'A consistent design language across charts, calculators and the content hub.',
    ],
  },
  {
    slug: 'skylink',
    title: 'SkyLink',
    kicker: 'Call-center management platform · Production',
    year: '2025',
    blurb:
      'A call-center operations platform with real-time call tracking, agent & campaign management, broadcast tools, AI insights and analytics dashboards.',
    cover: skylink1,
    accent: '#27c46b',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    role: 'Frontend Developer',
    live: null,
    featured: true,
    gallery: [
      { src: skylink1, caption: 'Super-admin dashboard — call status, SIP balance, cost & duration' },
      { src: skylink2, caption: 'Operations view — filters, pickup-rate and hourly/weekly overviews' },
      { src: skylink3, caption: 'AI Insights — sentiment, best calling window, campaign signals' },
    ],
    problem:
      'Call-center teams were juggling agents, campaigns, broadcasts and billing across disconnected tools, with no single dashboard to see call status, costs and performance in real time.',
    contribution: [
      'Built frontend features across the platform with React, Next.js, Tailwind CSS and TypeScript.',
      'Implemented data-dense dashboards: call-status tiles, SIP balance & cost cards, pickup-rate and average-pickup-time panels.',
      'Created the analytics surface — hourly / weekly / monthly overviews, agent, source, country and campaign breakdowns — plus an AI-insights view for sentiment and coaching signals.',
    ],
    process:
      'The challenge was density without clutter. I leaned on a strict card system, consistent iconography and a calm green-on-light palette so operators could scan dozens of live metrics at a glance. Filters (status, campaign, country, agent, source, date range) were designed to recompose the whole dashboard predictably, and empty/zero states were treated as first-class so the product never looked broken before data arrived.',
    outcome: [
      'A cohesive operations cockpit unifying calls, agents, campaigns and billing.',
      'Real-time, filterable analytics that turn raw call logs into decisions.',
      'A scalable component system reused across every dashboard tab.',
    ],
  },
  {
    slug: 'jira-automation',
    title: 'Jira Automation System',
    kicker: 'End-to-end workflow automation',
    year: '2025',
    blurb:
      'A fully automated Jira ticketing pipeline: a Next.js dashboard syncs staff to Supabase, then an n8n + AI pipeline captures requests from Telegram & Gmail, classifies intent, de-dupes, and auto-assigns tickets — no manual intervention.',
    cover: jira3,
    accent: '#6d6af0',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'n8n', 'AI / NLP'],
    role: 'Full Stack Developer',
    live: null,
    featured: true,
    gallery: [
      { src: jira3, caption: 'TeamBoard dashboard — staff, roles, skills & Jira IDs synced to Supabase' },
      { src: jira1, caption: 'n8n pipeline — trigger capture, AI validation/intent, DB & Jira fetching' },
      { src: jira2, caption: 'n8n pipeline — ticket creation, duplicate routing & confirmation responses' },
    ],
    problem:
      'Creating and routing Jira tickets by hand was slow and error-prone: requests arrived across Telegram and Gmail, duplicates slipped through, and assigning the right person meant someone manually cross-checking roles and availability.',
    contribution: [
      'Built a Next.js + TypeScript dashboard (TeamBoard) to manage team members, roles and skills, syncing staff data to Supabase.',
      'Designed and implemented a multi-stage n8n pipeline triggered from Telegram, Gmail, Slack and webhooks.',
      'Wired AI-based intent classification (create / update), duplicate detection, smart auto-assignment by role & availability, Jira ticket creation with priority and description, and confirmation messages back to the requester.',
    ],
    process:
      'I broke the automation into labelled stages — input capture, AI validation & intent classification, database/Jira fetching, duplicate checks, ticket creation, and a final notification stage — so each segment was independently testable. The dashboard is the system of record: it pushes the team roster into Supabase, which the pipeline reads to make assignment decisions. The result is a request that lands in chat or email and becomes a correctly-assigned, de-duplicated Jira ticket with zero human steps in the middle.',
    outcome: [
      'Tickets created, de-duplicated and assigned end-to-end with no manual intervention.',
      'Requests accepted from Telegram, Gmail, Slack and webhooks into one pipeline.',
      'A single dashboard as the source of truth for team data feeding the automation.',
    ],
  },
  {
    slug: 'capregsoft',
    title: 'Capregsoft Website',
    kicker: 'Company marketing site',
    year: '2025',
    blurb:
      "Contributed to the Capregsoft company website — implementing a dynamic interactive particles animation and resolving multiple frontend UI issues to raise the overall visual polish.",
    cover: cap1,
    accent: '#3b82f6',
    tags: ['React', 'Next.js', 'Animation', 'UI Polish'],
    role: 'Frontend Developer',
    live: 'https://www.capregsoft.com',
    featured: true,
    gallery: [
      { src: cap1, caption: 'Hero — interactive particle-network background animation' },
      { src: cap2, caption: 'Portfolio section — product showcase with media & feature highlights' },
    ],
    problem:
      "The company's marketing site needed a hero that felt alive and a frontend free of nagging UI inconsistencies — the kind of polish that decides whether a visitor trusts a software house in the first five seconds.",
    contribution: [
      'Implemented a dynamic, interactive particle-network animation for the hero background.',
      'Diagnosed and resolved multiple frontend UI issues across the site.',
      'Improved overall visual polish and the end-to-end user experience.',
    ],
    process:
      'The particle field had to read as premium without hurting performance or distracting from the message, so it stayed subtle and GPU-friendly. The UI fixes were a methodical pass over spacing, alignment and responsive behaviour — small corrections that compound into a site that simply feels finished.',
    outcome: [
      'A more engaging, modern hero that reinforces the brand on first impression.',
      'A cleaner, more consistent frontend after resolving outstanding UI issues.',
      'Measurably better perceived polish across the live site (capregsoft.com).',
    ],
  },
];

export const moreProjects = [
  {
    title: 'AutoGrade — Final Year Project',
    description:
      'AI-powered exam evaluation platform automating MCQ & descriptive grading via OCR, NLP semantic similarity, rubric scoring and cheating detection. Architecture finalised; AI pipeline in progress (~30%).',
    tech: ['Next.js', 'NestJS', 'FastAPI', 'PostgreSQL'],
    type: 'In progress',
    url: 'https://github.com/Muhammad-Usman047',
  },
  {
    title: 'E-Commerce Website',
    description:
      'React storefront with a 50+ item catalog, cart add/remove, category filtering, auth pages and fully responsive design.',
    tech: ['React 18', 'Context API', 'React Router'],
    type: 'Web app',
    url: 'https://github.com/Muhammad-Usman047/E_commerce-website',
  },
  {
    title: 'Warehouse Management System',
    description:
      'Java OOP warehouse system showcasing object-oriented design, inventory tracking and clean data management.',
    tech: ['Java', 'OOP', 'NetBeans'],
    type: 'Desktop',
    url: 'https://github.com/Muhammad-Usman047/Warehouse-management-System',
  },
];