"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
  image?: string
}

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all duration-200 hover:shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Badge
                variant="secondary"
                className="font-normal bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
      {link && (
        <CardFooter className="p-6 pt-0">
          <Link href={link} className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
            View Project <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}
