// ─────────────────────────────────────────────────────────
// Edit everything in this file to personalize your portfolio.
// No need to touch any component code.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Nikunj Mistry",
  role: "Full Stack Developer",
  tagline: "Building scalable, user-focused web applications from frontend to backend.",
  location: "Anand, Gujarat, India",
  email: "nikunjmistry810@gmail.com",
  github: "https://github.com/Nikss08",
  linkedin: "https://linkedin.com/in/Nikunj-mistry",
  resumeUrl: "/resume.pdf", // drop your resume.pdf into client/public/
};

export const about = {
  paragraphs: [
    "I am a dedicated Full Stack Developer with a strong passion for building modern, scalable, and user-centric web applications." ,
    "I believe in continuous learning and consistently enhance my skills by staying up to date with the latest technologies and industry best practices.",
    "Every project is an opportunity for me to grow, solve real-world problems, and deliver high-quality digital solutions with clean and efficient code."
  ],
};

export const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "React.js", "JavaScript"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Database", items: ["MongoDB", "Mongoose"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
];

export const experience = [
  {
    type: "education",
    title: "B.E. — IT Engineering",
    org: "Gujarat Technological University",
    period: "2023 — 2027",
    description: "Currently pursuing Information Technology with a strong emphasis on software engineering, full-stack development, database systems, and continuous learning to stay aligned with modern industry standards.",
  },
  // Add work experience entries here, same shape, type: "work"
];

export const projects = [
  {
    title: "ShopSphere - E-Commerce Platform",
    description:
      "A full-stack e-commerce platform featuring user authentication, product management, shopping cart, secure checkout, order tracking, and an admin dashboard for managing products and orders.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "",
    live: "",
  },
  {
    title: "TaskFlow - Project Management System",
    description:
      "A full-stack project management application that allows teams to create projects, assign tasks, track progress, manage deadlines, and collaborate through a clean and responsive dashboard.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "",
    live: "",
  },
  {
    title: "BookNest - Online Book Store",
    description:
      "A modern full-stack online bookstore with user authentication, book browsing, search and filtering, shopping cart, order history, payment integration, and an admin panel for inventory management.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    github: "",
    live: "",
  },
];