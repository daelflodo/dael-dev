// ============================================================
// Portfolio Data – David Elias Flores (Dael)
// ============================================================

export const personal = {
  name: "David Elias Flores",
  alias: "Dael",
  title: "Backend Developer",
  subtitle: "NestJS · Microservices · Event-Driven Architecture",
  bio: "Desarrollador Backend con más de 4 años de experiencia especializado en el diseño y despliegue de arquitecturas escalables, sistemas orientados a eventos (EDA) y microservicios. Experto en NestJS, Node.js y PostgreSQL, con un enfoque riguroso en seguridad, rendimiento y principios SOLID/DDD. Experiencia probada integrando IA (OpenAI) y servicios Cloud (AWS/Azure) para optimizar procesos de negocio.",
  location: "Santo Domingo, Ecuador (Remoto)",
  email: "davidflodo@gmail.com",
  phone: "+593 984765688",
  cvPath: "/assets/CV_DavidFlores.pdf",
  cvLandingUrl: "https://cv-david-flores.vercel.app//",
  whatsapp: "https://wa.me/593984765688",
};

export const socialLinks = [
  { name: "GitHub",   icon: "fa-brands fa-github",   url: "https://github.com/daelflodo" },
  { name: "LinkedIn", icon: "fa-brands fa-linkedin",  url: "https://www.linkedin.com/in/davidflodo/" },
  { name: "Twitter",  icon: "fa-brands fa-twitter",   url: "https://twitter.com/daelflodo" },
];

export const stats = [
  { number: "4+",   label: "Años de Experiencia", icon: "fa-solid fa-calendar" },
  { number: "25+",  label: "Proyectos Completados", icon: "fa-solid fa-code" },
  { number: "200+", label: "APIs Desarrolladas",    icon: "fa-solid fa-server" },
  { number: "25+",  label: "Tecnologías Dominadas", icon: "fa-solid fa-laptop-code" },
];

export const technologies = [
  // Backend
  { name: "NestJS",          category: "Backend",    icon: "https://img.shields.io/badge/-NestJS-E0234E?style=flat&logo=nestjs&logoColor=white" },
  { name: "Node.js",         category: "Backend",    icon: "https://img.shields.io/badge/-Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" },
  { name: "Express",         category: "Backend",    icon: "https://img.shields.io/badge/-Express-000000?style=flat&logo=express&logoColor=white" },
  { name: "RabbitMQ",        category: "Backend",    icon: "https://img.shields.io/badge/-RabbitMQ-FF6600?style=flat&logo=rabbitmq&logoColor=white" },
  { name: "Spring Boot",     category: "Backend",    icon: "https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat&logo=springboot&logoColor=white" },
  { name: "Spring Security", category: "Backend",    icon: "https://img.shields.io/badge/-Spring%20Security-6DB33F?style=flat&logo=springsecurity&logoColor=white" },
  // Languages
  { name: "TypeScript",  category: "Lenguajes",  icon: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" },
  { name: "JavaScript",  category: "Lenguajes",  icon: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" },
  { name: "Java",        category: "Lenguajes",  icon: "https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white" },
  // Frontend
  { name: "React",        category: "Frontend",   icon: "https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black" },
  { name: "Angular",      category: "Frontend",   icon: "https://img.shields.io/badge/-Angular-DD0031?style=flat&logo=angular&logoColor=white" },
  { name: "Redux",        category: "Frontend",   icon: "https://img.shields.io/badge/-Redux-764ABC?style=flat&logo=redux&logoColor=white" },
  { name: "HTML",         category: "Frontend",   icon: "https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white" },
  { name: "CSS",          category: "Frontend",   icon: "https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white" },
  { name: "Tailwind CSS", category: "Frontend",   icon: "https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" },
  // Databases
  { name: "PostgreSQL",  category: "Bases de Datos", icon: "https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" },
  { name: "MySQL",       category: "Bases de Datos", icon: "https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=white" },
  { name: "MongoDB",     category: "Bases de Datos", icon: "https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" },
  { name: "Redis",       category: "Bases de Datos", icon: "https://img.shields.io/badge/-Redis-DC382D?style=flat&logo=redis&logoColor=white" },
  // ORM
  { name: "TypeORM",     category: "ORM",        icon: "https://img.shields.io/badge/-TypeORM-FE0803?style=flat&logo=typeorm&logoColor=white" },
  { name: "Prisma",      category: "ORM",        icon: "https://img.shields.io/badge/-Prisma-2D3748?style=flat&logo=prisma&logoColor=white" },
  { name: "Sequelize",   category: "ORM",        icon: "https://img.shields.io/badge/-Sequelize-52B0E7?style=flat&logo=sequelize&logoColor=white" },
  // DevOps
  { name: "Docker",      category: "DevOps",     icon: "https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white" },
  { name: "Azure",       category: "DevOps",     icon: "https://img.shields.io/badge/-Azure-0078D4?style=flat&logo=microsoftazure&logoColor=white" },
  // { name: "AWS",         category: "DevOps",     icon: "https://img.shields.io/badge/-AWS-232F3E?style=flat&logo=amazonaws&logoColor=white" },
];

export const skills = [
  {
    category: "Backend Development",
    icon: "fa-solid fa-server",
    items: [
      "API REST & GraphQL Design",
      "Microservicios & Event-Driven Architecture",
      "Autenticación JWT & OAuth2",
      "WebSockets & Real-time Apps",
      "Message Queues (RabbitMQ)",
      "OpenAI API Integration",
      "Testing (Jest, Supertest)",
    ],
  },
  {
    category: "Database & ORM",
    icon: "fa-solid fa-database",
    items: [
      "PostgreSQL Multi-schema & Multi-database",
      "MySQL & MongoDB",
      "Redis para Caché",
      "TypeORM, Prisma, Sequelize",
      "Migraciones y Seeders",
      "Diseño de esquemas complejos",
      "Optimización de queries",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "fa-solid fa-cloud",
    items: [
      "Azure (Blob Storage, Web Apps, Pipelines)",
      "AWS (Lambda, EC2, S3)",
      "Docker & Docker Compose",
      "CI/CD con Azure DevOps",
      "Nginx & Linux Server",
    ],
  },
  {
    category: "Seguridad & Arquitectura",
    icon: "fa-solid fa-shield-halved",
    items: [
      "Rate Limiting & Throttling",
      "Bcrypt & Hashing",
      "CORS & SSL/TLS",
      "Auditoría de Cambios",
      "Logs con Pino Logger",
      "Metodologías Ágiles (Scrum)",
    ],
  },
];

// Frontend projects: shown with image + URL
export const frontendProjects = [
  {
    id: 1,
    title: "Living Soft",
    description: "App de búsqueda de alojamientos con sistema de ofertas/contraofertas, reservaciones y correos automatizados.",
    image: "/assets/potf1.jpg",
    url: "https://livinng.vercel.app/",
    technologies: ["Node.js", "Express", "React", "PostgreSQL", "Prisma"],
  },
  {
    id: 2,
    title: "Store E-commerce",
    description: "E-commerce Full Stack con Angular, gestión completa de productos y panel de administración.",
    image: "/assets/potf9.jpg",
    url: "https://github.com/daelflodo/Store",
    technologies: ["Angular", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Foccus E-commerce",
    description: "E-commerce para óptica con sistema de recetas, gestión de roles, notificaciones y administración de personal.",
    image: "/assets/potf8.jpg",
    url: "https://codepartners.com.co/",
    technologies: ["NestJS", "React", "NextJS", "PostgreSQL", "MongoDB", "AWS S3"],
  },
];

// Backend projects: shown as activity cards
export const backendProjects = [
  {
    id: 1,
    title: "CHW Learning Hub",
    company: "El Sol Neighborhood Educational Center",
    period: "Jul 2024 – Ene 2026",
    description: "Plataforma educativa empresarial con arquitectura multi-esquema, +50 módulos, integración con Moodle LMS y sistema completo de gestión de contenidos.",
    activities: [
      "+50 módulos y +200 endpoints documentados con Swagger",
      "Autenticación multinivel con JWT, roles jerárquicos y rate limiting",
      "Integración completa con Moodle LMS mediante API REST y SSO",
      "PostgreSQL multi-schema con 7 esquemas y +30 entidades",
      "Caché con Redis para optimización de rendimiento",
      "Auditoría con Pino Logger y middleware de correlación",
      "Notificaciones por correo con SendGrid e i18n",
    ],
    technologies: ["NestJS", "PostgreSQL", "TypeORM", "Azure", "Redis", "Docker"],
    url: "https://chwlearninghub.org/home",
  },
  {
    id: 2,
    title: "MS-Logistics Olaclick",
    company: "Olaclick",
    period: "Mar 2025 – Oct 2025",
    description: "Microservicio para integración de múltiples proveedores de delivery en tiempo real con arquitectura event-driven e integración de OpenAI.",
    activities: [
      "Factory Pattern para integración de múltiples proveedores de delivery",
      "Arquitectura orientada a eventos con Event Emitter para comunicación asíncrona",
      "Gestión de múltiples bases de datos PostgreSQL con Sequelize, migraciones y seeders",
      "Integración de OpenAI para optimización inteligente de rutas",
      "Resolución de incidencias logísticas en entornos dockerizados",
    ],
    technologies: ["NestJS", "PostgreSQL", "Sequelize", "OpenAI", "Docker", "Event-Driven"],
    url: null,
  },
  {
    id: 3,
    title: "API Superflights",
    company: "Proyecto Personal",
    period: "2023",
    description: "Sistema de microservicios con NestJS, RabbitMQ y despliegue en AWS. Arquitectura escalable con comunicación asíncrona entre servicios.",
    activities: [
      "Arquitectura de microservicios con API Gateway",
      "Comunicación asíncrona mediante RabbitMQ",
      "Despliegue en AWS con Docker Compose",
      "Autenticación JWT entre microservicios",
      "Documentación con Swagger",
    ],
    technologies: ["NestJS", "MongoDB", "RabbitMQ", "Docker", "AWS"],
    url: "https://github.com/daelflodo/microservices-superflights",
  },
  {
    id: 4,
    title: "Eclub Microservices",
    company: "Proyecto Personal",
    period: "2023",
    description: "Arquitectura distribuida con Gateway, Order Service e Inventory Service. Comunicación asíncrona mediante RabbitMQ.",
    activities: [
      "API Gateway con NestJS para orquestar microservicios",
      "Order Service e Inventory Service independientes",
      "Comunicación asíncrona por RabbitMQ",
      "Contenedores Docker por cada servicio",
      "PostgreSQL por microservicio (DB independientes)",
    ],
    technologies: ["NestJS", "PostgreSQL", "RabbitMQ", "Docker", "Microservices"],
    url: null,
  },
  {
    id: 5,
    title: "Goldenpass",
    company: "Goldenpass (Argentina)",
    period: "Nov 2023 – Feb 2024",
    description: "Sistema de venta de tickets e-commerce con validaciones exhaustivas y seguridad avanzada.",
    activities: [
      "Sistema de venta de tickets con validaciones exhaustivas",
      "Seguridad con Bcrypt y Prisma",
      "Middleware de autorización de roles",
      "Gestión segura de participantes y creadores de eventos",
      "Documentación de la API con Swagger UI",
    ],
    technologies: ["Node.js", "Express", "React", "PostgreSQL", "Prisma"],
    url: null,
  },
];

export const experience = [
  {
    period: "Jul 2024 – Ene 2026",
    role: "Backend Developer",
    company: "El Sol Neighborhood Educational Center",
    location: "Remoto",
    description: "Arquitectura backend escalable para plataforma educativa empresarial destinada a Community Health Workers con +50 módulos.",
    achievements: [
      "+50 módulos y +200 endpoints documentados",
      "Autenticación multinivel JWT, roles jerárquicos y rate limiting",
      "Integración con Moodle LMS mediante API REST y SSO",
      "PostgreSQL multi-schema con 7 esquemas y +30 entidades",
      "Caché Redis y auditoría completa con Pino Logger",
      "Notificaciones con SendGrid e i18n",
    ],
  },
  {
    period: "Mar 2025 – Oct 2025",
    role: "Backend Developer",
    company: "Olaclick",
    location: "Remoto · Perú",
    description: "Diseño de microservicio logístico (ms-logistics) para integración de múltiples proveedores de delivery.",
    achievements: [
      "Factory Pattern para múltiples proveedores de delivery",
      "Event-Driven Architecture con Event Emitter",
      "Múltiples DB PostgreSQL con Sequelize, migraciones y seeders",
      "OpenAI para optimización inteligente de rutas logísticas",
      "Gestión del ciclo de vida de datos en entornos dockerizados",
    ],
  },
  {
    period: "Jun 2023 – May 2024",
    role: "Backend Developer",
    company: "Foccus",
    location: "Remoto · Colombia",
    description: "Backend de plataforma e-commerce de alto tráfico para óptica con NestJS y PostgreSQL.",
    achievements: [
      "Arquitectura backend para e-commerce de alto tráfico",
      "Autenticación JWT, control de roles y registro de actividades",
      "Colas y notificaciones automatizadas",
      "Documentación de API con Swagger",
    ],
  },
  {
    period: "Nov 2023 – Feb 2024",
    role: "Fullstack Developer",
    company: "Goldenpass",
    location: "Remoto · Argentina",
    description: "Sistema de venta de tickets e-commerce con validaciones y seguridad avanzada.",
    achievements: [
      "E-commerce de tickets con seguridad con Bcrypt y Prisma",
      "Middleware de autorización de roles",
      "Documentación de la API con Swagger UI",
    ],
  },
];
