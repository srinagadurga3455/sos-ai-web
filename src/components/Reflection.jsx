import React from 'react'

export default function Reflection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-on-scroll">
          Final Thoughts
        </h2>
        
        <div className="max-w-3xl space-y-12">
          <div className="animate-on-scroll">
            <p className="text-lg text-text/80 leading-relaxed mb-6">
              SOS-AI was built to remove friction at the exact moment friction is most dangerous. 
              Every core flow — SOS trigger, AI voice triage, hospital discovery, medicine reminders — 
              is fully functional in the current build. 
              <strong className="font-semibold text-text"> Automated SMS/calling via Twilio is fully 
              integrated at the code level</strong> but not live-demoable due to exhausted trial credits; 
              everything else runs end-to-end.
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">What's Next</h3>
            <p className="text-lg text-text/80 leading-relaxed">
              Restoring live SMS/calling with production Twilio credits, expanding medicine detection 
              accuracy with a larger training dataset, and adding multilingual voice support to serve 
              non-English-speaking users.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
