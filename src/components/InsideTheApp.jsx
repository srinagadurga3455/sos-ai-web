import React from 'react'
import sosTriggered from '../wireframes/sos-triggered.jpeg'
import locationAcquiring from '../wireframes/loctaion acqquiring.jpeg'
import aiResponding from '../wireframes/sos-ai responding.jpeg'
import voiceAgentCall from '../wireframes/voice-agent emergency call.png'
import messageSent from '../wireframes/message sent.png'

export default function InsideTheApp() {
  const screens = [
    {
      title: "SOS Triggered",
      description: "3s countdown to cancel",
      image: sosTriggered
    },
    {
      title: "Acquiring Location",
      description: "Finding nearby hospitals",
      image: locationAcquiring
    },
    {
      title: "SOS-AI Responding",
      description: "AI responds in real time",
      image: aiResponding
    },
    {
      title: "AI Agent Call",
      description: "Voice agent initiating emergency call",
      image: voiceAgentCall
    },
    {
      title: "Message Sent",
      description: "SMS alert sent to emergency contacts",
      image: messageSent
    }
  ]
  
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            3. Doing the Groundwork
          </h2>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 animate-on-scroll">Screens & Flows</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {screens.map((screen, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="phone-frame mb-4">
                  <div className="phone-frame-inner aspect-[9/19.5]">
                    <img 
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm text-text/70 text-center">{screen.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Usability Study</h3>
          <p className="text-lg text-text/80 leading-relaxed">
            I conducted informal testing with 5 participants, walking them through the SOS flow and hospital filter. 
            One consistent piece of feedback: <strong className="font-semibold text-text">users wanted a visual countdown 
            before the SOS alert went out</strong>, in case they triggered it accidentally. I added a 3-second cancellation 
            window. Another insight: <strong className="font-semibold text-text">users preferred seeing hospital specialties 
            as filter chips</strong> rather than a dropdown, making triage faster and more scannable.
          </p>
        </div>
      </div>
    </section>
  )
}
