// Consists of Company Contact Information or Other Static data that could be used across the websites

export const siteConfig = {
  name: "N0E9Tech",
  shortName: "N0E9",
  description:
    "Expert cybersecurity, IoT, and software development solutions. We build secure, scalable systems for modern businesses.",
  url: "https://n0e9tech.com",
  ogImage: "/logo.png",
  links: {
    twitter: "https://twitter.com/n0e9tech",
    github: "https://github.com/yn0e9tech",
    linkedin: "https://linkedin.com/company/n0e9tech",
  },
  keywords: [
    "cybersecurity",
    "IoT solutions",
    "web development",
    "Raspberry Pi",
    "network security",
    "embedded systems",
    "Next.js development",
  ] as string[],
};

export const COMPANY = {
  name: "N0E9Tech",
  email: "ntprocs@n0e9tech.com",
  phone: "+977-9871234567",
  address: "New Baneswor, Kathmandu",
  country: "Nepal",
  zip: "42006",
} as const;

export const STATS = {
  services: "3+",
  servicesLabel: "Core Service Areas",
  technologies: "10+",
  technologiesLabel: "Technologies Mastered",
  response: "<24h",
  responseLabel: "Response Time",
} as const;

export const team = [
  {
    name: "Nirajan Thapa",
    role: "Founder & CEO",
    bio: "Cybersecurity enthusiast with a passion for building secure, scalable systems. Founded N0E9Tech to make enterprise-grade technology accessible to every business.",
    specialties: ["Cybersecurity", "Strategy"],
  },
  {
    name: "Sijan Bhusal",
    role: "Web & App Developer",
    bio: "Exploring web and mobile development, with an emphasis on performant, accessible, and scalable apps",
    specialties: ["React/Next.js", "Flutter"],
  },
  {
    name: "Aashish Adhikari",
    role: "Backend Developer",
    bio: "Builds reliable, scalable server‑side systems and APIs with strong attention to security, performance, and maintainability.",
    specialties: ["REST APIs",  "Node.js"],
  },
    {
    name: "Samip Aryal",
    role: "Full Stack Developer",
    bio: "Full-stack developer with expertise in Next.js, React, and Node.js. Focused on building clean, performant web applications and APIs.",
    specialties: ["React/Next.js", "Nodejs"],
  },
    {
    name: "Sujan Bomjan Tamang",
    role: "AI/ML Developer",
    bio: "Early‑career AI/ML developer building foundational skills in machine learning, data preprocessing, and model deployment. Focused on practical projects and continuous learning.",
    specialties: ["Python", "Basic ML Models"],
  },
] as const;

export const subjects = [
  "Cybersecurity Assessment",
  "IoT / Raspberry Pi Project",
  "Web or Mobile Development",
  "General Inquiry",
] as const;
