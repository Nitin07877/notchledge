// Edit this file to change copy, pricing, and the feature list without
// touching any component code.

export const product = {
  name: "NotchLedge",
  tagline: "Your entire Mac workspace, compressed into a single hover.",
  subheadline:
    "NotchLedge turns the dead space around your MacBook's notch into a high-performance command center — featuring 20 professional tools spanning notes, files, real-time revenue, analytics, and focus.",
  requirement: "macOS 14 Sonoma or later · Apple Silicon & Intel · Simulated notch for non-notch Macs",

  checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "#pricing",
  downloadUrl: process.env.NEXT_PUBLIC_DOWNLOAD_URL ?? "#",

  pricing: {
    price: "$8",
    originalPrice: "$22",
    model: "One-time purchase, launch special",
    bullets: [
      "Lifetime access with all future updates",
      "All 20 power tools unlocked instantly",
      "Zero subscriptions, zero recurring fees",
      "Blazing fast native macOS architecture (Apple Silicon & Intel)",
      "14-day zero-questions money-back guarantee"
    ]
  },

  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "",
  social: {
    twitter: ""
  }
};

export type Tool = {
  id: string;
  name: string;
  hook: string;
  description: string;
  bullets: string[];
  image: string;
  highlight?: boolean;
};

export const tools: Tool[] = [
  {
    id: "home",
    name: "Home Command",
    hook: "Your digital heartbeat, visible at a single glance.",
    description:
      "A master dashboard of your most crucial widgets — notes, live business metrics, weather, screen time, and precision timekeeping, structured precisely how you think.",
    bullets: ["Customizable widget matrix", "Instant contextual launcher", "Always-live data sync"],
    image: "/screens/home.png",
    highlight: true
  },
  {
    id: "message",
    name: "Notch Marquee",
    hook: "Command attention right where people look.",
    description:
      "Cast fluid custom text across your notch with dynamic animations: Scroll, Bounce, Wave, Sparkle, Pulse, or Rainbow. Fully custom colors, velocity control, and emergency flashing.",
    bullets: ["6 dynamic motion presets", "Infinite colour customisation", "Velocity & flash triggers"],
    image: "/screens/message.png"
  },
  {
    id: "focus",
    name: "Focus Matrix",
    hook: "Absolute concentration tailored to your workflow.",
    description:
      "Seamlessly transition between Do Not Disturb, Personal, Work, and Smart Interruption filtering modes so only high-priority signals pierce through your focus.",
    bullets: ["Granular profile switching", "Smart notification filtering", "Contextual workspace triggers"],
    image: "/screens/focus.png"
  },
  {
    id: "analytics",
    name: "Live Analytics",
    hook: "Real-time traffic metrics without opening a browser tab.",
    description:
      "Instant pulse check on active visitors, total pageviews, bounce rates, session lengths, top landing pages, and inbound referral sources across today, 7, or 30 days.",
    bullets: ["Live active visitor counts", "Top path & source breakdown", "Flexible timeframes (Today to 30d)"],
    image: "/screens/analytics.png"
  },
  {
    id: "revenue",
    name: "Revenue Ticker",
    hook: "Your business turnover, updating live as sales drop.",
    description:
      "Link Stripe, Polar, or Dodo Payments securely using a read-only token. Watch incoming sales flash live in your notch the exact second money moves.",
    bullets: ["Stripe, Polar & Dodo integration", "Zero-risk read-only API keys", "Real-time celebratory banners"],
    image: "/screens/revenue.png"
  },
  {
    id: "calculator",
    name: "Pro Calculator",
    hook: "A serious calculation engine built right into your bezel.",
    description:
      "A full precision keypad complete with memory registers (MC/MR/M+/M-) and an expandable running calculation history so you never lose your math trail.",
    bullets: ["Advanced memory functions", "Persistent calculation log", "Instant standard operators"],
    image: "/screens/calculator.png"
  },
  {
    id: "calendar",
    name: "Agenda & Calendar",
    hook: "Your month layout and daily timeline, perfectly synchronized.",
    description:
      "A complete monthly grid paired beside today's actionable agenda. Check off reminders or inject new tasks inline without launching bulky system apps.",
    bullets: ["Full month visual overview", "Inline interactive checklist", "Frictionless event additions"],
    image: "/screens/calendar.png"
  },
  {
    id: "units",
    name: "Unit Matrix",
    hook: "Instant dimensional and currency conversion engine.",
    description:
      "Convert money, length, weight, data storage, and temperature instantly with live foreign exchange rates, custom presets, and rapid lookup tables.",
    bullets: ["Live multi-currency feed", "Comprehensive physics units", "Lightning-fast quick picks"],
    image: "/screens/units.png"
  },
  {
    id: "notes",
    name: "Quick Notes",
    hook: "For sudden genius ideas that refuse to wait.",
    description: "A lightning-fast notepad with a dedicated full editor. Kept one hover away, autosaving character-by-character as your thoughts flow.",
    bullets: ["Instant-launch text editor", "Real-time background autosave", "Zero clutter accessibility"],
    image: "/screens/notes.png"
  },
  {
    id: "files",
    name: "File Converter",
    hook: "Drop, convert, and keep moving. Zero web bloat.",
    description: "Drag any image, graphic, PDF, or document onto the notch to transcode it instantly into JPEG, PNG, HEIC, or optimized PDF formats locally.",
    bullets: ["Drag-and-drop transcoding", "Supports JPEG, PNG, HEIC, PDF", "100% local processing security"],
    image: "/screens/files.png"
  },
  {
    id: "clipboard",
    name: "Clipboard Vault",
    hook: "Infinite memory for everything you've ever copied.",
    description: "A secure, searchable history of your clipboard. Instantly retrieve past text fragments, image snippets, links, or code blocks in a single keystroke.",
    bullets: ["Deep full-text search", "One-click instant re-copying", "Granular history management"],
    image: "/screens/clipboard.png"
  },
  {
    id: "screentime",
    name: "Screen Time",
    hook: "Radical transparency over how you spend your hours.",
    description: "Track your daily active duration, identify your absolute biggest time sinks, analyze a 7-day trend graph, and inspect per-application breakdowns.",
    bullets: ["Daily utilization metrics", "7-day trend analytics graph", "Detailed app usage breakdown"],
    image: "/screens/screentime.png"
  },
  {
    id: "weather",
    name: "Atmosphere",
    hook: "Hyper-local meteorological telemetry worth checking.",
    description: "Real-time atmospheric conditions detailing feels-like temperatures, humidity levels, wind vectors, precipitation chance, hourly trends, and a 7-day outlook.",
    bullets: ["Detailed comfort indices", "Dynamic hour-by-hour forecast", "Complete 7-day outlook view"],
    image: "/screens/weather.png"
  },
  {
    id: "voicememos",
    name: "Voice Memos",
    hook: "Capture your spoken inspiration before it fades.",
    description: "Single-tap voice recording directly from your screen edge. Play back, export, duplicate, or purge your audio notes instantly.",
    bullets: ["One-tap immediate capture", "Organized audio recording list", "Frictionless export & playback"],
    image: "/screens/voicememos.png"
  },
  {
    id: "naturesounds",
    name: "Ambient Audio",
    hook: "Immersive acoustic environments to hyper-charge your output.",
    description: "Choose from Deep Forest, Soft Rain, Ocean Waves, Campfire, Summer Wind, or Thunderstorm. Pure audio isolation running seamlessly in your background.",
    bullets: ["6 studio-grade soundscapes", "One-touch audio activation", "Low-power background engine"],
    image: "/screens/naturesounds.png"
  },
  {
    id: "timer",
    name: "Precision Timing",
    hook: "The exact clocks you reach for throughout your workday.",
    description: "Instant preset triggers for 5, 10, or 25-minute Pomodoro sprints, custom countdown configurations, and a high-accuracy stopwatch bundled into one.",
    bullets: ["Rapid interval presets", "Flexible custom countdowns", "Integrated precision stopwatch"],
    image: "/screens/timer.png"
  },
  {
    id: "systemstats",
    name: "System Vitals",
    hook: "Raw hardware telemetry without menu bar clutter.",
    description: "Live CPU performance loads, RAM usage distribution, free disk volumes, active network throughput speeds, and precise system uptime counters.",
    bullets: ["Live CPU & RAM telemetry", "Disk & network bandwidth meters", "System uptime tracking"],
    image: "/screens/systemstats.png"
  },
  {
    id: "qr",
    name: "QR Generator",
    hook: "Turn any text string or URL into a scannable code instantly.",
    description: "Type or paste links, wifi credentials, or text fragments to generate clean, high-resolution QR codes ready to copy or export as transparent PNGs.",
    bullets: ["Instant dynamic generation", "Export to clean PNG files", "Zero network dependency"],
    image: "/screens/qr.png"
  }
];

export const toolCount = 20;

// Which two tools headline the page as full-width features.
export const heroToolIds = ["revenue", "analytics"];

// Card size for every other tool in the bento grid — deliberately mixed
// so the section doesn't read as one long uniform row of screenshots.
export const toolSizes: Record<string, "sm" | "md" | "lg"> = {
  message: "md",
  focus: "sm",
  calculator: "sm",
  calendar: "md",
  units: "sm",
  notes: "md",
  files: "lg",
  clipboard: "md",
  screentime: "sm",
  weather: "md",
  voicememos: "sm",
  naturesounds: "sm",
  timer: "sm",
  systemstats: "lg",
  qr: "sm"
};

export type Integration = { name: string; category: string };
export const integrations: Integration[] = [
  { name: "Stripe", category: "Revenue" },
  { name: "Polar", category: "Revenue" },
  { name: "Dodo Payments", category: "Revenue" },
  { name: "Google Analytics", category: "Analytics" },
  { name: "Plausible", category: "Analytics" },
  { name: "Fathom", category: "Analytics" }
];

export const highlights = ["Lifetime License", "Zero Accounts Required", `All 20 Professional Tools`, "14-Day Refund Guarantee"];

export const faqs = [
  {
    question: "Does it function on older or notchless MacBooks?",
    answer:
      "Absolutely. Simply toggle on the simulated notch option inside Settings, and NotchLedge anchors a gorgeous interactive notch right at the top of your display — compatible across MacBook Air, iMac, Studio Display, and external monitors."
  },
  {
    question: "How do I control which tools appear?",
    answer:
      `Complete control is yours. Launch "Add Tools" straight from the notch interface and toggle any combination of the ${toolCount} modules on or off. Your dock adapts dynamically to display solely what you use.`
  },
  {
    question: "Is my business data completely secure?",
    answer:
      "Extremely secure. Revenue and Analytics establish connection exclusively through restricted, read-only API keys generated by you. NotchLedge reads telemetry numbers but possesses zero capability to touch funds or edit backend settings. Furthermore, notes, files, and clipboard histories never leave your local machine."
  },
  {
    question: "Is this a recurring monthly subscription?",
    answer: "Never. You pay once, own it forever, and secure free lifetime updates going forward. No software accounts or cloud signups required."
  },
  {
    question: "What is your refund policy?",
    answer: "Zero risk. If NotchLedge doesn't dramatically optimize your daily workflow within 14 days, drop us a line for a complete, hassle-free refund."
  }
];

export type Testimonial = { quote: string; name: string; role?: string };
export const testimonials: Testimonial[] = [];

export type HowToStep = { title: string; description: string; image?: string };

export const howToSteps: HowToStep[] = [
  {
    title: "Instant Download & Setup",
    description:
      "Mount the DMG package, drop NotchLedge into your Applications directory, and launch. It nestles gracefully against your camera notch — zero background clutter."
  },
  {
    title: "Hover to Activate",
    description:
      "Glide your cursor to the top edge. The Home command center deploys instantly with your configured widgets — notes, weather, time, and revenue ready to view.",
    image: "/screens/home.png"
  },
  {
    title: "Navigate via the Tool Dock",
    description:
      "The minimal icon strip along the bottom is your navigation hub. Click any application icon — Calculator, Weather, File Converter — to switch environments instantly.",
    image: "/screens/weather.png"
  },
  {
    title: "Curate Your Personal Workspace",
    description:
      `Click the plus trigger to access the tool drawer. Effortlessly toggle any of the ${toolCount} modules on or off to keep your workspace razor-sharp.`,
    image: "/screens/add-tools.png"
  },
  {
    title: "Plug in Business Telemetry",
    description:
      "Configure your preferred gateway (Stripe, Polar, or Dodo Payments) and paste a read-only credential to watch financial metrics tick live. Analytics connects with identical ease.",
    image: "/screens/revenue.png"
  },
  {
    title: "Personalize Your Environment",
    description:
      "Activate a Focus preset, run a neon marquee message across your screen edge, or isolate with ambient rain sounds — NotchLedge stays invisible until summoned.",
    image: "/screens/message.png"
  }
];