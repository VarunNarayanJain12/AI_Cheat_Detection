"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

interface Feature {
  title: string
  description: string
  emoji: string
}

interface MonitoringCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  emoji: string
  features: Feature[]
  buttonHref: string
  buttonText: string
}

export default function MonitoringCard({
  id,
  title,
  description,
  icon,
  emoji,
  features,
  buttonHref,
  buttonText,
}: MonitoringCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className={cn(
        "border-primary/10 transition-all duration-300",
        isExpanded ? "border-primary" : "hover:border-primary/30",
      )}
    >
      <CardHeader
        className={cn("flex flex-row items-center justify-between cursor-pointer", isExpanded && "pb-0")}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <div>
            <CardTitle className="flex items-center gap-2">
              {title} <span className="text-xl">{emoji}</span>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="shrink-0">
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </Button>
      </CardHeader>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={`${id}-feature-${index}`} className="flex flex-col gap-2 p-4 rounded-lg bg-secondary">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{feature.emoji}</span>
                      <h3 className="font-medium">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex justify-end pt-0 pb-6">
              <Link href={buttonHref}>
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

