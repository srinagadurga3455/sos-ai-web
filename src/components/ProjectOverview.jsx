import React from 'react'

export default function ProjectOverview() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 mb-20 animate-on-scroll">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Goals</h2>
            <ul className="space-y-4 text-text/80">
              <li className="flex items-start">
                <span className="text-teal mr-3 mt-1">•</span>
                <span>Reduce time-to-help using voice instead of typing</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-3 mt-1">•</span>
                <span>Help users find the right hospital by specialty, not just the nearest one</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-3 mt-1">•</span>
                <span>Provide AI-guided preliminary symptom triage without replacing a doctor</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-3 mt-1">•</span>
                <span>Enable medicine identification through scanner detection for safety</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-3 mt-1">•</span>
                <span>Support medication adherence through smart reminders</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Solution</h2>
            <p className="text-lg text-text/80 leading-relaxed">
              I designed and built SOS-AI, an app where a single tap starts an AI-guided emergency 
              flow — acquiring location, alerting emergency contacts, and walking the user through 
              what to do next entirely by voice.
            </p>
          </div>
        </div>
        
        <div className="bg-text/[0.03] p-8 md:p-12 rounded-2xl animate-on-scroll">
          <p className="text-2xl md:text-3xl font-bold text-center leading-relaxed">
            "In an emergency, users don't have time to search, filter, and decide — 
            the app needs to think and act for them."
          </p>
        </div>
      </div>
    </section>
  )
}
