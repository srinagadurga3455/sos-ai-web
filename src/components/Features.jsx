import React from 'react'
import FeatureBlock from './FeatureBlock'
import aiVoiceImage from '../wireframes/ai-voice screenshot.jpeg'
import doctorsImage from '../wireframes/image3.jpeg'
import symptomCheckerImage from '../wireframes/image4.jpeg'
import medicineScannerImage from '../wireframes/image11.jpeg'
import pillReminderImage from '../wireframes/image10.jpeg'
import emergencyContactsImage from '../wireframes/image5.jpeg'

export default function Features() {
  const features = [
    {
      title: "SOS-AI Voice Emergency Assistant",
      description: "Typing during an emergency is slow or impossible — so once triggered, SOS-AI speaks first: 'Help is on the way. Tell me what happened.' The user responds by voice while the AI asks targeted follow-up questions and surfaces a direct 'Call Ambulance' fallback if alert delivery fails.",
      image: aiVoiceImage,
      imagePosition: "right"
    },
    {
      title: "Find & Book Doctors",
      description: "The nearest hospital isn't always the right one — so users browse specialists by category, from General Physician to Cardiologist to Orthopedic, with distance, hospital affiliation, and rating shown for each, and reach the facility that treats the specific issue.",
      image: doctorsImage,
      imagePosition: "left"
    },
    {
      title: "AI Symptom Checker",
      description: "It's hard to tell whether symptoms need urgent care — so users describe them in plain language and receive a severity rating, clear guidance, and follow-up questions, framed explicitly as preliminary assistance, not a diagnosis.",
      image: symptomCheckerImage,
      imagePosition: "right"
    },
    {
      title: "Medicine Scanner & Detection",
      description: "Medicine authenticity and identification are uncertain — so users scan packaging or pills to instantly identify medications, verify authenticity, and access detailed information about dosage, side effects, and interactions, making medication management safer and more accessible.",
      image: medicineScannerImage,
      imagePosition: "left"
    },
    {
      title: "PillPath — Smart Medicine Reminders",
      description: "Medication doses and timing get forgotten — so users set daily reminder times with smart notifications that help them stay on track, reducing manual entry and minimizing the risk of missing doses or mixing up look-alike medications.",
      image: pillReminderImage,
      imagePosition: "right"
    },
    {
      title: "Emergency Contacts",
      description: "The people who matter are buried in the address book — so users import contacts or add them manually, tag them as Primary or Emergency, and reach any of them in one tap, keeping critical information accessible when seconds matter.",
      image: emergencyContactsImage,
      imagePosition: "left"
    }
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-text/[0.02]">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 animate-on-scroll">
          4. Prototyping the Design
        </h2>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureBlock key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}