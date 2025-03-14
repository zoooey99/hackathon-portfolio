"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

interface LanguageData {
  name: string
  percentage: number
  color: string
}

const defaultLanguages: LanguageData[] = [
    { name: "TypeScript", percentage: 60, color: "#3178c6" },
    { name: "Java", percentage: 13.33, color: "#b07219" },
    { name: "C++", percentage: 6.67, color: "#00599C" },
    { name: "JavaScript", percentage: 6.67, color: "#f7df1e" },
    { name: "HTML", percentage: 6.67, color: "#e34c26" },
    { name: "R", percentage: 6.67, color: "#276DC3" },
  ];
  

interface LanguageStatsCardProps {
  languages?: LanguageData[]
  title?: string
  subtitle?: string
}

export default function LanguageStatsCard({
  languages = defaultLanguages,
  title = "Programming Languages",
  subtitle = "Distribution",
}: LanguageStatsCardProps) {
  const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null)

  return (
    <Card className="overflow-hidden bg-gray-800/50 backdrop-blur-md border-gray-700 shadow-lg w-full">
      <CardHeader className="pb-2">
        
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="space-y-1"
              onMouseEnter={() => setHoveredLanguage(lang.name)}
              onMouseLeave={() => setHoveredLanguage(null)}
            >
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-300">{lang.name}</span>
                <span className={`font-mono ${hoveredLanguage === lang.name ? "text-white" : "text-gray-400"}`}>
                  {lang.percentage}%
                </span>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300 ease-in-out"
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color,
                    boxShadow: hoveredLanguage === lang.name ? `0 0 8px ${lang.color}` : "none",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <CardDescription className="text-gray-500 mt-3"></CardDescription>
      </CardContent>
    </Card>
  )
}

