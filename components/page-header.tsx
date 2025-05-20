import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description: string
  icon?: ReactNode
}

export default function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
