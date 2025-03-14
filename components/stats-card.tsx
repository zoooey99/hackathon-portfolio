import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  subtitle: string
  className?: string
}

export default function StatsCard({ title, value, subtitle, className = "" }: StatsCardProps) {
  return (
    <Card className={`overflow-hidden bg-gray-800/50 backdrop-blur-md border-gray-700 shadow-lg ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        <CardDescription className="text-gray-500">{subtitle}</CardDescription>
      </CardContent>
    </Card>
  )
}