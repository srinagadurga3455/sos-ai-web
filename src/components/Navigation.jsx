import React from 'react'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-text/5">
      <div className="max-w-content mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-text tracking-tight">SOS-AI</div>
          <div className="flex space-x-8 text-[15px]">
            <a href="#work" className="text-text/70 hover:text-text transition-colors">Work</a>
            <a href="#about" className="text-text/70 hover:text-text transition-colors">About</a>
            <a href="#contact" className="text-text/70 hover:text-text transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
