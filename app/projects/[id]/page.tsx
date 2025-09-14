'use client';
import { use } from 'react'
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
    tech: ["Next.js", "Node.js", "GraphQL", "MongoDB", "Stripe Payments", "Google Cloud"],
    link: "https://bizb.store/en",
    type: "E-commerce Platform",
    status: "Live",
    image: "/project-images/bizb.png",
    year: "2023",
    team: "4 developers",
    duration: "6 months",
    features: [
      "User authentication and profile management",
      "Product listing and search functionality",
      "Secure payment processing with Stripe",
      "Digital wardrobe management system",
      "Express delivery tracking",
      "Review and rating system",
      "Push notifications for mobile app",
      "Advanced search capabilities"
    ],
    challenges: [
      "Migrating project from Webpack to SWC and upgrading to Next.js 13",
      "Using MongoDB transactions to fix cart syncing issues",
      "Implementing Next.js Image Optimization API",
      "Refactoring codebase to TypeScript"
    ]
  },
  "lua-group": {
    title: "Lua Group - Influencer Marketing",
    description: "Top influencer marketing platform with self-developed software for campaign optimization, connecting 10M+ influencers with brands worldwide.",
    fullDescription: "Lua Group is a cutting-edge influencer marketing platform that connects brands with over 10 million influencers worldwide. The platform features advanced analytics, campaign management tools, and AI-powered matching algorithms to ensure optimal brand-influencer partnerships.",
    tech: ["React", "Vite", "Next.js", "Monorepo", "Node.js", "PostgreSQL", "Redis", "Firebase"],
      link: "https://luagroup.com/en/",
      type: "Marketing Platform",
      status: "Live",
      image: "/project-images/lua.webp",
      year: "2023",
      team: "8 developers",
      duration: "Ongoing",
    features: [
      "Creating marketing campaigns",
      "Client and user invoices and invoice reconciliation",
      "Scraping users data from Instagram and TikTok",
      "Influencer discovery and matching - large database of influencers with multiple complex filters",
      "Multi-language support (EN and ES)",
      "White labelling to give to specific clients with their custom brand colors",
      "Campaign management dashboard",
      "Analytics and reporting tools"
    ],
    challenges: [
      "Cut S3 storage costs by 50% by redesigning the media architecture: segmented media into prod/staging/dev buckets, enabled versioning and lifecycle rules for automated cleanup, activated access logging to analyze usage patterns, and adopted Intelligent-Tiering for infrequently accessed assets",
      "Refactored monolithic APIs into modular endpoints, replacing Sequelize with raw queries to reduce query time from 6 seconds to 1.2 seconds",
      "Revamped portal UI and filters for better UX and performance; added debounce + cancellation for rapid API calls",
      "Introduced a dynamic Quick Payment feature allowing direct payments to creators reducing time to pay creators by 10%"
    ]
  },
  "habily": {
    title: "Habily - Real Estate Platform",
    description: "Intelligent real estate platform that accompanies first-time homebuyers through every step of the process, making home buying accessible and free of complications for everyone.",
    fullDescription: "At Habily we combine more than 20 years of experience in the real estate sector. We know how difficult buying your first home can be, which is why we have created the first intelligent model that accompanies you at every step of the process. We want buying a home to be accessible and free of complications for everyone.",
    tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "ScrapingBee", "Flowise"],
    link: "https://habily.es/",
    type: "Real Estate Platform",
    status: "Live",
    image: "/project-images/habily.png",
    year: "2023",
    team: "2 developers",
    duration: "10 months",
    features: [
      "Revamped data scraping logic using ScrapingBee, adding fallbacks to ensure availability and reliability of rental listings",
      "Created advanced filters for property search (price, size, type, etc.), enabling targeted user experiences",
      "Optimized query performance by redesigning price maps and reducing redundant scraping operations",
      "Built Flowise AI agents that generate contextual reports from property URLs",
      "Chat bot to suggest properties based on user affinity",
      "Step-by-step buying guidance",
      "Document management system",
      "Real-time market analytics"
    ],
    challenges: [
      "Revamped data scraping logic using ScrapingBee, adding fallbacks to ensure availability and reliability of rental listings",
      "Created advanced filters for property search (price, size, type, etc.), enabling targeted user experiences",
      "Optimized query performance by redesigning price maps and reducing redundant scraping operations",
      "Built Flowise AI agents that generate contextual reports from property URLs"
    ]
  },
  "united-market": {
    title: "United Market - Music Platform",
    description: "AI-powered technology platform empowering musicians worldwide with collaboration tools, business management, and growth solutions.",
    fullDescription: "United Market is a comprehensive platform designed to empower musicians with cutting-edge tools for collaboration, business management, and career growth. The platform leverages AI to provide personalized recommendations and insights.",
    tech: ["React", "AI/ML", "Node.js", "MongoDB", "WebRTC", "Stripe", "Kafka"],
    link: "https://unitedmarket.com/",
    type: "Music Platform",
    status: "Live",
    image: "/project-images/united-market.png",
    year: "2023",
    team: "5 developers",
    duration: "8 months",
    features: [
      "Music collaboration tools",
      "AI-powered recommendations",
      "Business management dashboard",
      "Revenue tracking and analytics",
      "Social networking for musicians",
      "Digital distribution platform",
      "Copyright protection system",
      "Live streaming capabilities"
    ],
    challenges: [
      "Implementing real-time audio collaboration",
      "Building AI recommendation algorithms",
      "Creating secure payment processing",
      "Optimizing for global music distribution"
    ]
  },
  "ranchers-cafe": {
    title: "Ranchers Cafe - Food Delivery",
    description: "Mobile app for delicious burgers and pizza delivery, featuring fresh ingredients and innovative cooking techniques for the best dining experience.",
    fullDescription: "Ranchers Cafe brings the best burgers and pizzas directly to your door through an intuitive mobile application. The app focuses on fresh ingredients, innovative cooking techniques, and exceptional customer service.",
    tech: ["React Native", "Firebase", "Node.js", "Express.js", "Google Maps", "Stripe", "GraphQL", "Google Maps Geocoding"],
    link: "https://play.google.com/store/apps/details?id=com.ranchers.customer&hl=en_CA&pli=1",
    type: "Mobile App",
    status: "Live",
    image: "/project-images/ranchers.webp",
    year: "2023",
    team: "4 developers",
    duration: "5 months",
    isApp: true,
    features: [
      "Online food ordering system",
      "Real-time order tracking",
      "Multiple payment options",
      "User reviews and ratings",
      "Loyalty rewards program",
      "Push notifications",
      "GPS-based delivery tracking",
      "Custom meal builder"
    ],
    challenges: [
      "Implementing real-time GPS tracking",
      "Optimizing for offline functionality",
      "Creating smooth payment integration",
      "Building efficient order management system"
    ]
  }
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = projectData[id]

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
                  <span className="font-medium">{project.isApp ? "Download App" : "Visit Live Site"}</span>
                </motion.a>
                {/* <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 w-full p-3 glass-section rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-medium">View Code</span>
                </motion.a> */}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
