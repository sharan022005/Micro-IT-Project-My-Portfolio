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
          whileHover={{ rotate: 15 }}
          className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 text-blue-600 dark:text-blue-100 mb-4"
        >
          {icon}
        </motion.div>
        <h3 className="font-semibold mb-1">{title}</h3>
        {link ? (
          <Link href={link} className="text-sm text-blue-600 hover:underline">
            {content}
          </Link>
        ) : (
          <p className="text-sm text-muted-foreground">{content}</p>
        )}
      </CardContent>
    </Card>
  )
}
