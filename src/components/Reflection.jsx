import React from 'react'

export default function Reflection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 animate-on-scroll">
          5. The Final Verdict
        </h2>
        
        <div className="max-w-3xl space-y-14">
          <div className="animate-on-scroll">
            <h3 className="text-xl font-medium text-text/60 mb-8">Usability Study — Final Round</h3>
            <p className="text-base leading-relaxed text-text/80 mb-6">
              <strong className="font-semibold text-coral">SOS-AI</strong> hasn't shipped yet, so there is no formal public study with final numbers to report. 
              What we have is a clear projection. The industry-average System Usability Scale (SUS) score 
              sits at <strong className="font-semibold text-coral">68</strong>; our internal builds are 
              targeting a projected <strong className="font-semibold text-coral">SUS of 72</strong> and 
              <strong className="font-semibold text-coral"> 5 of 5 testers completing the full SOS trigger 
              without assistance</strong> — marks we expect to beat once the app is live and formally 
              tested. Stated honestly: these are targets, not results.
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-xl font-medium text-text/60 mb-8">Final Thoughts</h3>
            <p className="text-base leading-relaxed text-text/80">
              <strong className="font-semibold text-coral">SOS-AI</strong> was built to remove friction at the exact moment friction is most dangerous — and 
              that goal held firm through every round of testing. Every core flow — SOS trigger, AI voice 
              triage, hospital discovery, medicine reminders — is fully functional in the current build. 
              <strong className="font-semibold text-coral"> Automated SMS/calling via Twilio is fully 
              integrated at the code level</strong> but not live-demoable due to exhausted trial credits; 
              everything else runs end-to-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}