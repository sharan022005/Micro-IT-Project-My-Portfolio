"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

type Category = "All" | "Web Development" | "Data Science"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const categories: Category[] = ["All", "Web Development", "Data Science"]

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

  const projects = [
    {
      title: "ERP System",
      description:
        "A comprehensive Enterprise Resource Planning system with modules for inventory management, human resources, and financial tracking. Implemented using modern web technologies.",
      tags: ["Web Development", "Inventory Management", "HR", "Financial Tracking"],
      category: "Web Development",
      link: "#",
    },
    {
      title: "TITANIC",
      description: "Data analysis and machine learning project using the Titanic dataset to predict survival rates.",
      tags: ["Jupyter Notebook", "Data Analysis", "Machine Learning"],
      category: "Data Science",
      link: "https://github.com/Sharanbabu-1089/TITANIC",
    },
    {
      title: "IMDB",
      description: "Analysis of IMDB movie data to extract insights about ratings, genres, and other factors.",
      tags: ["Jupyter Notebook", "Data Analysis"],
      category: "Data Science",
      link: "https://github.com/Sharanbabu-1089/IMDB",
    },
    {
      title: "SALESPREDICTION",
      description:
        "Sales prediction model using machine learning techniques to forecast future sales based on historical data.",
      tags: ["Jupyter Notebook", "Machine Learning", "Forecasting"],
      category: "Data Science",
      link: "https://github.com/Sharanbabu-1089/SALESPREDICTION",
    },
    {
      title: "Apollo Clone",
      description: "A TypeScript implementation of an Apollo GraphQL client clone.",
      tags: ["TypeScript", "GraphQL", "API"],
      category: "Web Development",
      link: "https://github.com/Sharanbabu-1089/apollo-clone-",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-6xl space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and projects that demonstrate my skills and expertise.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
