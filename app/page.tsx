'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Phone, Download } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ColorPicker } from "@/components/color-picker";
import { useTheme } from "@/components/theme-provider";
import { MyAvatarSvg } from "@/components/dynamic-svgs";

export default function Home() {
  const { isLoaded, primaryColor } = useTheme();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show loading spinner until theme is loaded
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"
  ];

  const projects = [
    {
      id: "lua-group",
      title: "Lua Group - Influencer Marketing",
      description: "Top influencer marketing platform with self-developed software for campaign optimization, connecting 10M+ influencers with brands worldwide.",
      tech: ["React", "Node.js", "PostgreSQL", "AI/ML"],
      link: "https://luagroup.com/en/",
      type: "Marketing Platform",
      status: "Live",
      image: "/project-images/lua.webp"
    },
    {
      id: "habily",
      title: "Habily - Real Estate Platform",
      description: "Intelligent real estate platform that accompanies first-time homebuyers through every step of the process, making home buying accessible and free of complications for everyone.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      link: "https://habily.es/",
      type: "Real Estate Platform",
      status: "Live",
      image: "/project-images/habily.png"
    },
    {
      id: "bizb",
      title: "BizB - Buy and Sell Online",
      description: "A comprehensive e-commerce platform where users can buy and sell preloved clothes, featuring digital wardrobe management and express delivery options.",
      tech: ["React Native", "Node.js", "MongoDB", "Express.js"],
      link: "https://bizb.store/en",
      type: "E-commerce Platform",
      status: "Live",
      image: "/project-images/bizb.png"
    },
    {
      id: "ranchers-cafe",
      title: "Ranchers Cafe - Food Delivery",
      description: "Mobile app for delicious burgers and pizza delivery, featuring fresh ingredients and innovative cooking techniques for the best dining experience.",
      tech: ["React Native", "Firebase", "Node.js", "Express.js"],
      link: "https://play.google.com/store/apps/details?id=com.ranchers.customer&hl=en_CA&pli=1",
      type: "Mobile App",
      status: "Live",
      image: "/project-images/ranchers.webp"
    },
    {
      id: "united-market",
      title: "United Market - Music Platform",
      description: "AI-powered technology platform empowering musicians worldwide with collaboration tools, business management, and growth solutions.",
      tech: ["React", "AI/ML", "Node.js", "MongoDB"],
      link: "https://unitedmarket.com/",
      type: "Music Platform",
      status: "Live",
      image: "/project-images/united-market.png"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="fixed inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/15" />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
      </div>

      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-secondary/15 to-accent/10 rounded-full blur-3xl"
        />

        {/* Additional floating elements */}
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 150, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/2 left-1/3 w-80 h-80 bg-gradient-to-tl from-accent/12 to-transparent rounded-full blur-2xl"
        />

        {/* Geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary/20 rotate-45 blur-sm"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-accent/15 rounded-full blur-sm"
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6"
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-card rounded-full px-6 py-3"
          >
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Irtaza
            </span>
          </motion.div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <ColorPicker />
          </div>
        </nav>
      </motion.header>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <section className="min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Profile avatar with dynamic SVG */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-transparent p-1"
                />
                <div className="glass-intense rounded-full p-2 sm:p-4 relative overflow-hidden">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 1.1,
                      filter: "blur(4px)"
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)"
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      opacity: { duration: 0.8 },
                      scale: { duration: 1.2 },
                      filter: { duration: 0.8 }
                    }}
                    className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] relative overflow-hidden rounded-full"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <MyAvatarSvg primaryColor={primaryColor} />
                    </div>

                    {/* Subtle overlay animation */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.1, 0] }}
                      transition={{
                        duration: 1.2,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left"
            >
              <div className="space-y-3 sm:space-y-4">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                >
                  Full Stack
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Developer
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                >
                  Crafting exceptional digital experiences with modern technologies.
                  Passionate about creating scalable, user-centric applications that make a difference.
                </motion.p>
              </div>

              {/* CTA buttons */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 border border-primary text-sm sm:text-base"
                >
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Projects
                </motion.button>

                <motion.a
                  href="mailto:irtaza780@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-accent transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get In Touch
                </motion.a>

                <motion.a
                  href="/resume/SYED__MUHAMMAD_IRTAZA_SOFTWARE_ENGINEER_RESUME.pdf"
                  download="Syed_Muhammad_Irtaza_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-accent transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Resume
                </motion.a>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
              >
                <span className="text-sm text-muted-foreground">Follow me:</span>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "https://github.com/irtaza780" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/syed-muhammad-irtaza-211156181/" },
                    { icon: Mail, href: "mailto:irtaza780@gmail.com" },
                    { icon: Phone, href: "tel:+12633552859" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass p-2.5 sm:p-3 rounded-full hover:bg-primary hover:text-primary transition-colors"
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills section */}
        <motion.section
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="glass-section rounded-3xl p-8 mx-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card px-6 py-3 rounded-full font-medium"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects section */}
        <motion.section
          id="projects"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-200 cursor-pointer group"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="space-y-0">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="flex items-center gap-1 text-xs text-white bg-green-500/80 px-2 py-1 rounded-full backdrop-blur-sm">
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      {/* Header */}
                      <div className="flex justify-between items-start">
                        <div className="space-y-2 flex-1">
                          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {project.type}
                          </span>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-xs font-medium glass-card rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">View Details</span>
                          <div className="flex items-center gap-3">
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.link, '_blank', 'noopener,noreferrer');
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 glass-card rounded-full hover:bg-primary hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Enhanced Footer */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mt-32"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* CTA Section */}
          <div className="glass-card rounded-3xl p-12 text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                I'm always interested in hearing about new projects and opportunities.
                Let's create something amazing together!
              </p>
              <motion.a
                href="mailto:irtaza780@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                Start a Conversation
              </motion.a>
            </motion.div>
          </div>

          {/* Footer Content */}
          <div className="glass-section rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Brand Column */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
                    Irtaza
                  </h4>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    Full-stack developer passionate about creating exceptional digital experiences.
                    Specializing in modern web technologies and scalable solutions.
                  </p>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Connect:</span>
                    <div className="flex gap-3">
                      {[
                        { icon: Github, href: "https://github.com/irtaza780", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/syed-muhammad-irtaza-211156181/", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:irtaza780@gmail.com", label: "Email" },
                        { icon: Phone, href: "tel:+12633552859", label: "Phone" }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary transition-colors"
                          title={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Resume Download */}
                  <motion.a
                    href="/resume/SYED__MUHAMMAD_IRTAZA_SOFTWARE_ENGINEER_RESUME.pdf"
                    download="Syed_Muhammad_Irtaza_Resume.pdf"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full hover:bg-primary hover:text-primary transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </motion.a>
                </div>
              </div>

              {/* Quick Links */}
              {/* <div className="space-y-6">
                <h5 className="font-semibold text-foreground">Quick Links</h5>
                <ul className="space-y-3">
                  {[
                    { name: "About", href: "#about" },
                    { name: "Projects", href: "#projects" },
                    { name: "Skills", href: "#skills" },
                    { name: "Contact", href: "#contact" }
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* Tech Stack */}
              <div className="space-y-6">
                <h5 className="font-semibold text-foreground">Tech Focus</h5>
                <ul className="space-y-3">
                  {[
                    "React & Next.js",
                    "TypeScript",
                    "Node.js",
                    "Cloud Solutions"
                  ].map((tech) => (
                    <li key={tech} className="text-muted-foreground text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Irtaza. All rights reserved.
              </div>
              <div className="sm:flex items-center gap-6 text-sm text-muted-foreground">
                <span>Built with Next.js & Tailwind CSS</span>
                <span className="flex items-center gap-1 mt-3 sm:mt-0">
                  Made with <span className="text-red-500">♥</span> in Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
