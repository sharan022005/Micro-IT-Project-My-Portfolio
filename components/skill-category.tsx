import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface SkillCategoryProps {
  title: string
  icon: ReactNode
  description: string
  children: ReactNode
}

export function SkillCategory({ title, icon, description, children }: SkillCategoryProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 p-6 bg-primary/5">
        <div className="rounded-full bg-background p-2 text-primary">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">{children}</CardContent>
    </Card>
  )
}
