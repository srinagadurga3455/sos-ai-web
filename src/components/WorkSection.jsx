import React from 'react'

export default function WorkSection() {
  const projects = [
    {
      title: "SOS-AI",
      category: "Healthcare & Emergency",
      description: "AI-powered emergency response system",
      status: "Active",
      year: "2026"
    }
  ]
  
  return (
    <section id="work" className="py-24 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-content mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work</h2>
          <p className="text-xl text-text/70 max-w-2xl">
            Building products that solve real problems, one pixel at a time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group p-8 bg-text/[0.03] rounded-2xl hover:bg-text/[0.05] transition-all animate-on-scroll"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-teal font-medium mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>
                <div className="text-sm text-text/50">{project.year}</div>
              </div>
              <p className="text-text/70 mb-4">{project.description}</p>
              <div className="inline-flex items-center px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium">
                {project.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
