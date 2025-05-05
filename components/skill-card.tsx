import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all duration-200 hover:shadow-lg">
      <CardHeader className="flex items-center justify-center p-4 bg-primary/5">
        <div className="text-primary">{icon}</div>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
