import React from 'react'

export default function LessonsCallout({ title = "Lessons", children }) {
  return (
    <div className="mt-16 bg-coral/5 border-l-4 border-coral rounded-r-xl p-8 md:p-10 animate-on-scroll">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-lg text-text/80 leading-relaxed space-y-4">{children}</div>
    </div>
  )
}
