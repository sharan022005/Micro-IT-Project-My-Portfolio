"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}

export function ContactCard({ icon, title, content, link }: ContactCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all duration-200 hover:shadow-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 text-blue-600 dark:text-blue-100 mb-4"
        >
          {icon}
        </motion.div>
        <motion.h3
          className="font-semibold mb-1"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {title}
        </motion.h3>
        {link ? (
          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link href={link} className="text-sm text-blue-600 hover:underline">
              {content}
            </Link>
          </motion.div>
        ) : (
          <p className="text-sm text-muted-foreground">{content}</p>
        )}
      </CardContent>
    </Card>
  )
}
