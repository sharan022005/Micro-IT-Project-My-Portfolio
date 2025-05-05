import type { ReactNode } from "react"

interface TimelineItemProps {
  title: string
  organization: string
  date: string
  description: string
}

export function TimelineItem({ title, organization, date, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-muted last:pb-0 last:before:h-6">
      <div className="absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-background border-2 border-primary" />
      <div className="space-y-1">
        <h4 className="font-semibold">{title}</h4>
        <div className="text-sm text-muted-foreground">
          {organization} • {date}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

interface TimelineProps {
  children: ReactNode
}

export function Timeline({ children }: TimelineProps) {
  return <div className="space-y-6">{children}</div>
}
