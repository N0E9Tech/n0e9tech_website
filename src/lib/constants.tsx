// Consists of Company Contact Information or Other Static data that could be used across the websites

export const COMPANY = {
  name: "N0E9Tech",
  email: "ntprocs@n0e9tech.com",
  phone: "+977-9871234567",
  address: "New Baneswor,Kathamandu",
  city: "Kathmandu",
  state: "Bagmati",
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
    bio: "Builds modern web and mobile applications with a focus on performance, accessibility, and scalable architecture.",
    specialties: ["React/Next.js", "Flutter"],
  },
  {
    name: "Aashish Adhikari",
    role: "Backend Developer",
    bio: "Builds reliable, scalable server‑side systems and APIs with strong attention to security, performance, and maintainability.",
    specialties: ["REST APIs", "databases", "Node.js"],
  },
    {
    name: "Samip",
    role: "Software Developer",
    bio: "Full-stack developer with expertise in Next.js, React, and Node.js. Focused on building clean, performant web applications and APIs.",
    specialties: ["React/Next.js", "Nodejs"],
  },
    {
    name: "Sujan Bomjan Tamang",
    role: "AI/ML Developer(Beginner)",
    bio: "Early‑career AI/ML developer building foundational skills in machine learning, data preprocessing, and model deployment. Focused on practical projects and continuous learning.",
    specialties: ["Python", "basic ML models"],
  },
] as const;
