import React from 'react'
import LessonsCallout from './LessonsCallout'
import WireframeCarousel from './WireframeCarousel'
import sosTriggered from '../wireframes/image1.jpeg'
import locationAcquiring from '../wireframes/image6.jpeg'
import aiResponding from '../wireframes/image9.jpeg'
import voiceAgentCall from '../wireframes/voice-agent emergency call.png'
import messageSent from '../wireframes/message sent.png'
import sketchHome from '../wireframes/sketchs/01-home-sos.png'
import sketchCallChat from '../wireframes/sketchs/02-emergency-call-chat.png'
import sketchProfile from '../wireframes/sketchs/03-profile.png'
import sketchDoctors from '../wireframes/sketchs/04-doctors-list.png'
import sketchContacts from '../wireframes/sketchs/05-emergency-contacts.png'
import sketchMap from '../wireframes/sketchs/06-hospitals-map.png'
import sketchTriage from '../wireframes/sketchs/07-emergency-call-triage.png'
import sketchReminders from '../wireframes/sketchs/08-reminders.png'
import sketchScanner from '../wireframes/sketchs/09-medicine-scanner.png'

export default function InsideTheApp() {
  const sketches = [
    {
      title: "Home / SOS trigger",
      image: sketchHome
    },
    {
      title: "Emergency call & chat",
      image: sketchCallChat
    },
    {
      title: "Profile & medical info",
      image: sketchProfile
    },
    {
      title: "Doctor search",
      image: sketchDoctors
    },
    {
      title: "Emergency contacts",
      image: sketchContacts
    },
    {
      title: "Hospitals map",
      image: sketchMap
    },
    {
      title: "AI triage call",
      image: sketchTriage
    },
    {
      title: "Medication reminders",
      image: sketchReminders
    },
    {
      title: "Medicine scanner",
      image: sketchScanner
    }
  ]

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
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 animate-on-scroll">
          3. Doing the Groundwork
        </h2>

        <div className="mb-20">
          <h3 className="text-xl font-medium text-text/60 mb-8 animate-on-scroll">Low-Fidelity Wireframes</h3>
          <p className="text-base leading-relaxed text-text/80 mb-10 max-w-3xl">
            Before touching Figma, I sketched the full emergency journey by hand — the home-screen SOS
            trigger, the AI triage conversation, doctor discovery, emergency contacts, reminders, and the
            medicine scanner. The goal was to settle structure before pixels. <strong className="font-semibold text-coral">
            Layouts that buried the SOS trigger or overloaded the home screen were discarded at this stage.</strong>
          </p>
          <WireframeCarousel sketches={sketches} />
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {screens.map((screen, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="phone-frame mb-4 !p-1 !border-2">
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

        <div className="max-w-3xl mb-20 animate-on-scroll">
          <h3 className="text-xl font-medium text-text/60 mb-8">Usability Study — Round 1</h3>
          <p className="text-base leading-relaxed text-text/80">
            I conducted informal testing with 5 participants, walking them through the SOS flow and hospital
            filter to test <strong className="font-semibold text-coral">structure, not polish</strong>.
            One consistent piece of feedback: <strong className="font-semibold text-coral">users wanted a visual countdown
            before the SOS alert went out</strong>, in case they triggered it accidentally. I added a 3-second cancellation
            window. Another insight: <strong className="font-semibold text-coral">users preferred seeing hospital specialties
            as filter chips</strong> rather than a dropdown, making triage faster and more scannable.
          </p>
        </div>

        <LessonsCallout>
          <p>
            <strong className="font-semibold text-coral">What users wanted:</strong> a safeguard against
            accidental triggers — delivered by the 3-second cancel countdown. Faster, more scannable
            hospital filtering — delivered by filter chips.
          </p>
          <p>
            <strong className="font-semibold text-coral">What users were satisfied with:</strong> none of
            the 5 asked for more screens or flashier visuals. At this stage, structure was the product.
          </p>
        </LessonsCallout>
      </div>
    </section>
  )
}
