"use client"

import { motion } from "framer-motion"
import { CertificateCard } from "@/components/certificate-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AchievementsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const nptelCertifications = [
    {
      title: "Joy of Computing using Python",
      issuer: "NPTEL",
      date: "2023",
      description: "Comprehensive course covering Python programming concepts and applications.",
    },
    {
      title: "Soft Skill Development",
      issuer: "NPTEL",
      date: "2023",
      description: "Course focused on developing essential soft skills for professional growth.",
    },
  ]

  const oracleCertifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "2023",
      description: "Professional certification validating expertise in AI foundations on Oracle Cloud Infrastructure.",
    },
  ]

  const otherCertifications = [
    {
      title: "Certified HTML Developer",
      issuer: "Ceeras",
      date: "2023",
      description: "Certification demonstrating proficiency in HTML development.",
    },
    {
      title: "AI Foundation Certification",
      issuer: "Infosys | Springboard",
      date: "2023",
      description: "Certification validating knowledge of AI foundations and applications.",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-5xl space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Achievements & Accomplishments</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and notable accomplishments that showcase my expertise and knowledge.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="nptel" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="nptel">NPTEL</TabsTrigger>
              <TabsTrigger value="oracle">Oracle</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>

            <TabsContent value="nptel" className="mt-6">
              <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {nptelCertifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CertificateCard
                      title={cert.title}
                      issuer={cert.issuer}
                      date={cert.date}
                      description={cert.description}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="oracle" className="mt-6">
              <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {oracleCertifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CertificateCard
                      title={cert.title}
                      issuer={cert.issuer}
                      date={cert.date}
                      description={cert.description}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="other" className="mt-6">
              <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {otherCertifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CertificateCard
                      title={cert.title}
                      issuer={cert.issuer}
                      date={cert.date}
                      description={cert.description}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}
