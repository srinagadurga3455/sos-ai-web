import React from 'react'

export default function UnderstandingUser() {
  const userTypes = [
    {
      title: "In an active emergency",
      description: "Needs speed, zero decisions, hands-free interaction"
    },
    {
      title: "Caregiver",
      description: "Manages a family member's medications, appointments, and emergency contacts"
    },
    {
      title: "General user",
      description: "Calmly researching symptoms or nearby specialists, no urgency"
    }
  ]
  
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 animate-on-scroll">
          1. Understanding the User
        </h2>
        
        <div className="mb-20">
          <h3 className="text-xl font-medium text-text/60 mb-8 animate-on-scroll">Types of Users</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {userTypes.map((type, index) => (
              <div 
                key={index}
                className="p-8 bg-text/[0.03] rounded-xl hover:bg-text/[0.05] transition-colors animate-on-scroll"
              >
                <h4 className="text-lg font-bold mb-3">{type.title}</h4>
                <p className="text-base text-text/70 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <h3 className="text-xl font-medium text-text/60 mb-8">Competitive Analysis</h3>
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-text/80">
              I analyzed existing health apps like <strong className="font-semibold text-coral">Practo</strong>, 
              <strong className="font-semibold text-coral"> 1mg</strong>, and <strong className="font-semibold text-coral">Apollo 24|7</strong>. 
              They excel at doctor booking, medicine ordering, and health records — but none offer a voice-first 
              emergency flow, none filter hospitals by specialty in real time, and none provide hands-free AI 
              triage. <strong className="font-semibold text-coral">That gap is exactly where SOS-AI is pointing.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}