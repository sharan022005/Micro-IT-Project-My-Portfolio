"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  skill: string
  percentage: number
}

export function ProgressBar({ skill, percentage }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <motion.span
          className="text-sm font-medium"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {skill}
        </motion.span>
        <motion.span
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
