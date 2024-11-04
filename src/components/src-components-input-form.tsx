'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface InputFormProps {
  onSubmit: (url: string) => void
  isLoading: boolean
}

export function InputFormComponent({ onSubmit, isLoading }: InputFormProps) {
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(url)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="url" className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          YouTube URL:
        </label>
        <Input
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube URL"
          disabled={isLoading}
          className="bg-background text-foreground"
        />
      </div>
      <Button type="submit" disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90">
        {isLoading ? 'Processing...' : 'Summarize'}
      </Button>
    </form>
  )
}