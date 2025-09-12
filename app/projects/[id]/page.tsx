'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ColorPicker } from "@/components/color-picker";

// Sample project data - will be replaced with dynamic data later
const projectData: { [key: string]: any } = {
  "bizb": {
    title: "BizB - Buy and Sell Online",
    description: "A comprehensive e-commerce platform where users can buy and sell preloved clothes, featuring digital wardrobe management and express delivery options.",
    fullDescription: "BizB revolutionizes the way people buy and sell preloved clothing by creating a digital marketplace that emphasizes sustainability and style. The platform features advanced search capabilities, secure payment processing, and a unique digital wardrobe management system that helps users organize their clothing items efficiently.",
    tech: ["React Native", "Node.js", "MongoDB", "Express.js", "Stripe", "AWS"],
    link: "https://bizb.store/en",
    type: "E-commerce Platform",
    status: "Live",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&crop=center",
    year: "2023",
    team: "4 developers",
    duration: "6 months",
    features: [
      "User authentication and profile management",
      "Product listing and search functionality",
      "Secure payment processing with Stripe",
      "Real-time chat between buyers and sellers",
      "Digital wardrobe management system",
      "Express delivery tracking",
      "Review and rating system",
      "Push notifications for mobile app"
    ],
    challenges: [
      "Implementing real-time chat with Socket.io",
      "Optimizing image upload and processing",
      "Creating a responsive design for all devices",
      "Integrating multiple payment gateways"
    ]
  },
  "lua-group": {
    title: "Lua Group - Influencer Marketing",
    description: "Top influencer marketing platform with self-developed software for campaign optimization, connecting 10M+ influencers with brands worldwide.",
    fullDescription: "Lua Group is a cutting-edge influencer marketing platform that connects brands with over 10 million influencers worldwide. The platform features advanced analytics, campaign management tools, and AI-powered matching algorithms to ensure optimal brand-influencer partnerships.",
    tech: ["React", "Node.js", "PostgreSQL", "AI/ML", "Redis", "Docker"],
    link: "https://luagroup.com/en/",
    type: "Marketing Platform",
    status: "Live",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&crop=center",
    year: "2023",
    team: "8 developers",
    duration: "12 months",
    features: [
      "Influencer discovery and matching",
      "Campaign management dashboard",
      "Analytics and reporting tools",
      "Payment processing for influencers",
      "Content approval workflows",
      "Performance tracking and ROI analysis",
      "Multi-language support",
      "API for third-party integrations"
    ],
    challenges: [
      "Scaling to handle millions of users",
      "Implementing complex analytics algorithms",
      "Creating intuitive dashboard interfaces",
      "Ensuring data privacy and security"
    ]
  }
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectData[params.id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/15" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
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
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-full px-6 py-3 flex items-center gap-3"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Back to Portfolio
              </span>
            </motion.div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <ColorPicker />
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="relative h-96">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm font-medium bg-primary/90 text-primary-foreground rounded-full">
                    {project.type}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-white">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {project.status}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-white/90 text-lg max-w-3xl">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <motion.section
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">About the Project</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-3 glass-section rounded-xl"
                    >
                      <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">Technical Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 glass-section rounded-xl border-l-4 border-primary/50"
                    >
                      <p className="text-muted-foreground">{challenge}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6"
            >
              <h3 className="font-bold mb-6">Project Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-medium">{project.team}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6"
            >
              <h3 className="font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-2 text-sm font-medium glass-section rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6"
            >
              <h3 className="font-bold mb-6">Links</h3>
              <div className="space-y-3">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 w-full p-3 glass-section rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <span className="font-medium">Visit Live Site</span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 w-full p-3 glass-section rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-medium">View Code</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
