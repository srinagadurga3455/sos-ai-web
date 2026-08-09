import React from 'react'

export default function PainPointsSolutions() {
  const painPoints = [
    {
      pain: "Typing during an emergency is slow or impossible",
      solution: "Voice-first AI emergency assistant (\"SOS-AI\")"
    },
    {
      pain: "Finding a hospital that treats the specific issue, not just the nearest one",
      solution: "Specialty-filtered hospital discovery (\"TriageMap\")"
    },
    {
      pain: "Uncertainty about medicine authenticity and identification",
      solution: "Medicine scanner with instant detection and verification"
    },
    {
      pain: "Forgetting medication doses and timing",
      solution: "Smart medicine reminders with detection (\"PillPath\")"
    },
    {
      pain: "Uncertainty about symptom severity",
      solution: "AI symptom checker with severity flagging"
    }
  ]
  
  return (
    <section className="py-24 md:py-32 px-6 bg-text/[0.02]">
      <div className="max-w-content mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            2. Analyzing the Challenges
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          <div className="animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Pain Points</h3>
            <ul className="space-y-5">
              {painPoints.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-coral mr-3 mt-1 font-bold">•</span>
                  <span className="text-text/80">{item.pain}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Proposed Solutions</h3>
            <ul className="space-y-5">
              {painPoints.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal mr-3 mt-1 font-bold">•</span>
                  <span className="text-text/80">{item.solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
