import React from 'react'

export default function ProjectOverview() {
  const goals = [
    {
      lead: "Reduce time-to-help",
      rest: "by letting users speak instead of type during an emergency"
    },
    {
      lead: "Find the right hospital by specialty",
      rest: ", not just the nearest one"
    },
    {
      lead: "AI-guided preliminary symptom triage",
      rest: " that never replaces a doctor"
    },
    {
      lead: "Medicine identification",
      rest: " through scanner detection for safety"
    },
    {
      lead: "Medication adherence",
      rest: " through smart reminders"
    }
  ]

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-5xl font-extrabold tracking-tight text-text mb-16 animate-on-scroll">
          Project Overview
        </h2>

        <div className="space-y-16 md:space-y-20">
          <div className="bg-[#F5E6E8] rounded-3xl px-8 py-10 md:px-12 md:py-12 animate-on-scroll">
            <div className="grid md:grid-cols-[280px_1fr] gap-8">
              <div className="text-xl md:text-2xl text-[#6B6B6B]">Problem Statement</div>
              <p className="text-[17px] leading-[1.6] text-text/90">
                In a medical emergency, users don't have time to unlock their phone, find contacts, 
                and explain their situation calmly. Most health apps assume deliberate, unhurried 
                use — but <span className="font-semibold text-text">emergencies don't wait</span>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] gap-8 animate-on-scroll">
            <div className="text-xl md:text-2xl text-[#6B6B6B]">Goals</div>
            <ul className="space-y-5">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal mr-4 mt-1 font-bold text-sm">•</span>
                  <span className="text-[17px] leading-[1.6] text-text/90">
                    <span className="font-semibold text-text">{goal.lead}</span>
                    {goal.rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] gap-8 animate-on-scroll">
            <div className="text-xl md:text-2xl text-[#6B6B6B]">Solution</div>
            <p className="text-[17px] leading-[1.6] text-text/90">
              I designed and built SOS-AI, an app where 
              <span className="font-semibold text-text"> a single tap starts an AI-guided emergency 
              flow</span> — acquiring location, alerting emergency contacts, and walking the user 
              through what to do next <span className="font-semibold text-text">entirely by voice</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}