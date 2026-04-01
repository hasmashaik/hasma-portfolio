export const personal = {
  name: "Hasma Shaik",
  title: "Java Full Stack Developer",
  email: "hasma200114@gmail.com",
  phone: "+91 7993283458",
  location: "Andhra Pradesh, India",
  linkedin: "https://linkedin.com/in/hasma-shaik-a531b4280",
  github: "https://github.com/hasmashaik",
  summary:
    "Motivated Full Stack Developer with hands-on internship experience building scalable web applications. Proficient in MVC architecture, CRUD operations, and frontend-backend integration. Passionate about clean, efficient code and responsive user interfaces.",
};

export const skills = [
  { category: "Languages",      icon: "⌨️", color: "#00f5d4", items: ["Java", "JavaScript"] },
  { category: "Backend",        icon: "⚙️", color: "#7c3aed", items: ["Spring Boot", "Node.js", "Express.js", "REST APIs"] },
  { category: "Frontend",       icon: "🎨", color: "#f72585", items: ["React.js", "HTML5", "CSS3", "Bootstrap"] },
  { category: "Database",       icon: "🗄️", color: "#ffd60a", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Cloud & Deploy", icon: "☁️", color: "#00b4d8", items: ["AWS EC2", "AWS S3", "Firebase", "Render"] },
  { category: "Tools",          icon: "🛠️", color: "#ff6b35", items: ["Git", "Postman", "VS Code", "Eclipse", "pgAdmin"] },
];

export const experience = [
  {
    role: "Java Full Stack Developer Intern",
    company: "Career School IT Solutions",
    location: "Nellore",
    period: "Jan 2025 – Nov 2025",
    tech: ["Java", "Spring Boot", "Node.js", "React.js", "MySQL", "PostgreSQL", "Postman", "Git"],
    highlights: [
      "Developed backend REST APIs using Java Spring Boot and Node.js to support web application features.",
      "Implemented CRUD operations using MySQL and PostgreSQL with proper data validation and error handling.",
      "Designed backend architecture following MVC pattern ensuring clean separation of concerns.",
      "Integrated frontend modules (React.js, HTML/CSS/JS) with backend REST APIs.",
      "Tested and documented APIs using Postman; maintained code using Git version control.",
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Web Application",
    desc: "Full-stack shopping platform with product catalog, cart, and order management. RESTful APIs for product management integrated with MySQL for persistent storage.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "Bootstrap", "JavaScript"],
    github: "https://github.com/hasmashaik",
    icon: "🛒",
    color: "#00f5d4",
  },
  {
    title: "Real-Time Activity Tracker",
    desc: "Real-time monitoring system using Node.js and Socket.io with WebSockets. Backend APIs to track user actions and system events in real time.",
    tech: ["Node.js", "Socket.io", "WebSockets", "JavaScript"],
    github: "https://github.com/hasmashaik",
    icon: "📡",
    color: "#7c3aed",
  },
  {
    title: "Stripe Payment Integration",
    desc: "Secure online payment processing using Stripe Payment Gateway API. Backend APIs to manage payment requests, transaction validation, and order storage.",
    tech: ["Node.js", "Stripe API", "REST APIs", "JavaScript"],
    github: "https://github.com/hasmashaik",
    icon: "💳",
    color: "#f72585",
  },
  {
    title: "MERN Image Upload + AWS S3",
    desc: "Image upload system using MERN stack with AWS S3 cloud storage. Secure backend APIs for uploading and retrieving images with a React.js frontend.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS S3"],
    github: "https://github.com/hasmashaik",
    icon: "🖼️",
    color: "#ffd60a",
  },
  {
    title: "Artist Portfolio Website",
    desc: "Responsive portfolio website with Home, About, Portfolio, and Contact sections. Built with smooth navigation and creative visual design.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/hasmashaik",
    icon: "🎨",
    color: "#ff6b35",
  },
];

export const education = [
  { degree: "BSc – Computer Science", institution: "Krishna Degree College (VSU)", year: "2022", cgpa: "9.1" },
  { degree: "Intermediate – MPC",     institution: "Sri Chaitanya Junior College",  year: "2019", cgpa: "9.4" },
];

export const certifications = [
  { name: "Java Full Stack Development", issuer: "Career School IT Solutions" },
  { name: "Certified Java",             issuer: "HackerRank" },
  { name: "Certified SQL",              issuer: "HackerRank" },
];

export const languages = [
  { name: "English", level: 5 },
  { name: "Telugu",  level: 5 },
  { name: "Hindi",   level: 3 },
];
