"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  image?: string
  description?: string
}

export function CertificateCard({ title, issuer, date, description }: CertificateCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all duration-200 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 p-6">
        <motion.div
          whileHover={{ rotate: 15 }}
          className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 text-blue-600 dark:text-blue-100"
        >
          <Award className="h-6 w-6" />
        </motion.div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {issuer} • {date}
          </p>
        </div>
      </CardHeader>
      {description && (
        <CardContent className="p-6 pt-0">
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      )}
    </Card>
  )
}
