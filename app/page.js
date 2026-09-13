'use client'

import { Github, Linkedin, Mail, ExternalLink, Download, Award } from 'lucide-react'

const projects = [
  {
    title: 'AsyncFlow',
    description: 'Distributed asynchronous job-processing platform with persistent job tracking, background workers, retries with exponential backoff, dead-letter handling, idempotency, cancellation, timeouts, priorities, and concurrent processing.',
    tech: ['TypeScript', 'Node.js', 'Fastify', 'BullMQ', 'Redis', 'PostgreSQL', 'Prisma', 'Next.js'],
    github: 'https://github.com/namitha-dsouza/AsyncFlow',
    demo: 'https://async-flow-dashboard.vercel.app',
  },
  {
    title: 'CollabChat',
    description: 'Full-stack real-time multi-room chat application with JWT authentication, WebSocket messaging, typing indicators, Redis-backed presence, persistent message history, and cursor-based pagination.',
    tech: ['Node.js', 'Express', 'TypeScript', 'React', 'PostgreSQL', 'Redis', 'Socket.io'],
    github: 'https://github.com/namitha-dsouza/collab-chat',
    demo: 'https://collab-chat-one.vercel.app',
  },
]

const certifications = [
  { name: 'Introduction to Artificial Intelligence', issuer: 'ARISA', date: 'September 2026', file: '/certifications/introduction-to-ai-arisa.pdf' },
  { name: 'Programming for Everybody (Getting Started with Python)', issuer: 'University of Michigan · Coursera', date: 'March 2022', file: '/certifications/python-for-everybody-coursera.pdf' },
  { name: 'MongoDB Overview: Core Concepts and Architecture', issuer: 'MongoDB', date: 'September 2026', file: '/certifications/mongodb-overview.pdf' },
]

const skillGroups = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Fastify', 'REST APIs', 'Socket.io', 'Temporal'] },
  { title: 'Databases & Messaging', items: ['PostgreSQL', 'MongoDB', 'Redis', 'BullMQ'] },
  { title: 'Cloud / Deployment', items: ['Microsoft Azure', 'Vercel', 'Render', 'Neon', 'Upstash'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Swagger', 'Prisma'] },
]

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-bold text-white"></a>
          <div className="hidden gap-6 text-sm md:flex">
            {['About', 'Projects', 'Experience', 'Certifications', 'Skills'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="section flex min-h-screen items-center pt-28">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technical Portfolio
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Hi, I'm Namitha Dsouza.
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-300 md:text-3xl">
            Software Engineer | Backend & Distributed Systems
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I build reliable, scalable, and user-focused software applications using modern technologies.
            I enjoy turning complex problems into simple, efficient technical solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-950">
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:border-slate-500"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex gap-5">
            <a href="https://github.com/namitha-dsouza" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/in/namitha-dsouza-1ba857241/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="mailto:namithadsouza47@gmail.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          I am an MSc Computer Science (Applied) student at Maynooth University with professional backend engineering experience.
          I enjoy building reliable APIs and distributed systems, solving integration problems, and learning new technologies through hands-on projects.
        </p>
      </section>

      <section id="projects" className="section">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => <span key={item} className="badge">{item}</span>)}
              </div>
              <div className="mt-6 flex gap-4 text-sm font-semibold">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                  GitHub <ExternalLink size={14} />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                  Live Demo <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2 className="text-3xl font-bold text-white">Experience</h2>
        <div className="mt-8 space-y-6">
          <div className="card">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-bold text-white">IT Operations Intern</h3>
                <p className="text-slate-400">Unum · Carlow, Ireland</p>
              </div>
              <p className="text-sm text-slate-500">June 2026</p>
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-400">
              <li>Gained practical exposure to enterprise IT environments and the platforms and tools supporting global business operations.</li>
              <li>Observed Agile ways of working across cross-functional teams and learned about professional workflows and collaborative engineering culture.</li>
            </ul>
          </div>

          <div className="card">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-bold text-white">Systems Engineer</h3>
                <p className="text-slate-400">Tata Consultancy Services</p>
              </div>
              <p className="text-sm text-slate-500">Oct 2023 – Aug 2025</p>
            </div>
            <p className="mt-1 text-sm text-slate-500">Client: Ericsson · ESDT</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-400">
              <li>Developed and tested RESTful APIs using TypeScript and NestJS to store, retrieve, and update Ericsson telecommunications site information in MongoDB, validating functionality with Postman and Swagger before deployment and QA testing.</li>
              <li>Implemented and maintained workflows using Temporal to orchestrate sequential site activities across multiple third-party systems, integrating external APIs and Azure messaging services to manage task dependencies, completion states, and permissions.</li>
              <li>Analysed and resolved backend and integration issues involving APIs, MongoDB, asynchronous queues, and third-party services through debugging and log analysis.</li>
              <li>Independently designed and delivered a site-reporting tool, developing RESTful APIs to retrieve and consolidate site data using multiple dynamic filters, from requirements gathering and testing through direct client delivery.</li>
              <li>Worked in a cross-functional Agile team using two-week sprints, participating in sprint planning, stand-ups, reviews, and retrospectives while translating requirements from business analysts and product owners into backend solutions.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="flex items-center gap-3">
          <Award className="text-cyan-400" />
          <h2 className="text-3xl font-bold text-white">Certifications</h2>
        </div>
        <p className="mt-4 text-slate-400">
          Recruiters can open your certification documents directly from here.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <article key={cert.name} className="card">
              <h3 className="text-xl font-bold text-white">{cert.name}</h3>
              <p className="mt-2 text-slate-400">{cert.issuer}</p>
              <p className="mt-1 text-sm text-slate-500">{cert.date}</p>
              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-400 hover:text-cyan-300"
              >
                View Certificate <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="card">
              <h3 className="font-bold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => <span key={item} className="badge">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-10 text-center text-sm text-slate-500">
        © 2026 Namitha Dsouza. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  )
}
