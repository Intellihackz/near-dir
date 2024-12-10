'use client'

import { useState } from 'react'
import { projects, categories } from '@/lib/data'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from 'next/image'

export default function Home() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProjects = projects.filter(project => 
    (selectedCategory ? project.category === selectedCategory : true) &&
    (project.name.toLowerCase().includes(search.toLowerCase()) || 
     project.twitter.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold text-center mb-8">NEAR Ecosystem Directory</h1>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="w-full max-w-2xl mx-auto">
          <Input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12"
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            onClick={() => setSelectedCategory(null)}
            variant={selectedCategory === null ? "default" : "outline"}
          >
            All
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.name} className="overflow-hidden">
              <div className="p-6">
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
                <a
                  href={`https://twitter.com/${project.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @{project.twitter}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

