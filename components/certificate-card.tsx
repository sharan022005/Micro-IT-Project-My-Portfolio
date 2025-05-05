"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  image: string
  description?: string
}

export function CertificateCard({ title, issuer, date, image, description }: CertificateCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all duration-200 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 p-6">
        <motion.div whileHover={{ rotate: 5 }} className="h-16 w-16 overflow-hidden rounded-md bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${issuer} logo`}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
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
