"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Database, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { SkillCard } from "@/components/skill-card"
import { ProjectCard } from "@/components/project-card"
import { CertificateCard } from "@/components/certificate-card"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Expertise</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A showcase of my technical skills and proficiencies across various domains.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12"
          >
            <motion.div variants={itemVariants}>
              <SkillCard
                icon={<Code className="h-10 w-10" />}
                title="Frontend Development"
                description="HTML, CSS, JavaScript, React"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SkillCard
                icon={<Database className="h-10 w-10" />}
                title="Backend Development"
                description="Java, Python, C, C++"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SkillCard
                icon={<Layers className="h-10 w-10" />}
                title="AI & Data Science"
                description="AI Foundations, Data Analysis"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SkillCard
                icon={<Zap className="h-10 w-10" />}
                title="Soft Skills"
                description="Communication, Team Collaboration, Problem Solving"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="flex justify-center mt-12"
          >
            <Button asChild variant="outline" className="group">
              <Link href="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A selection of my recent work and projects that showcase my abilities.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 mt-12"
          >
            <motion.div variants={itemVariants}>
              <ProjectCard
                title="My Portfolio Website"
                description="Built a modern, minimalist portfolio website featuring clean design, technical skills showcase, and responsive layout with smooth navigation and interactive elements."
                tags={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
                link="https://github.com/sharan022005/Micro-IT-Project-My-Portfolio"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProjectCard
                title="ERP System"
                description="Developed a comprehensive Enterprise Resource Planning system with integrated modules for inventory management, human resources, and financial tracking."
                tags={["Web Development", "Inventory Management", "HR"]}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="flex justify-center mt-12"
          >
            <Button asChild variant="outline" className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Accomplishments</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Achievements</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional certifications and accomplishments that showcase my expertise.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12"
          >
            <motion.div variants={itemVariants}>
              <CertificateCard
                title="Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate"
                issuer="Oracle"
                date="2025"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CertificateCard title="Oracle AI Vector Search" issuer="Oracle" date="2025" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CertificateCard title="Computer Networks And Internet Protocol" issuer="NPTEL" date="2025" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CertificateCard title="Certified HTML Developer" issuer="Ceeras" date="2023" />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="flex justify-center mt-12"
          >
            <Button asChild variant="outline" className="group">
              <Link href="/achievements">
                View All Achievements
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in collaborating or have a project in mind? Get in touch and let's create something amazing.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
