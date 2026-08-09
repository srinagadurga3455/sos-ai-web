import React from 'react'
import FeatureBlock from './FeatureBlock'
import aiVoiceImage from '../wireframes/ai-voice screenshot.jpeg'
import doctorsImage from '../wireframes/available doctors.jpeg'
import symptomCheckerImage from '../wireframes/symptom checkers.jpeg'
import medicineScannerImage from '../wireframes/medicine scanner.png'
import pillReminderImage from '../wireframes/pill reminder.jpeg'
import emergencyContactsImage from '../wireframes/emergency contacts.jpeg'

export default function Features() {
  const features = [
    {
      title: "SOS-AI Voice Emergency Assistant",
      description: "Once triggered, SOS-AI speaks first — 'Help is on the way. Tell me what happened.' The user responds by voice while the AI asks targeted follow-up questions and surfaces a direct 'Call Ambulance' fallback if alert delivery fails.",
      image: aiVoiceImage,
      imagePosition: "right"
    },
    {
      title: "Find & Book Doctors",
      description: "Browse specialists by category — General Physician, Cardiologist, Dermatologist, Orthopedic — with distance, hospital affiliation, and rating shown for each.",
      image: doctorsImage,
      imagePosition: "left"
    },
    {
      title: "AI Symptom Checker",
      description: "Users describe symptoms in plain language and receive a severity rating, clear guidance, and follow-up questions — framed explicitly as preliminary assistance, not a diagnosis.",
      image: symptomCheckerImage,
      imagePosition: "right"
    },
    {
      title: "Medicine Scanner & Detection",
      description: "Users can scan medicine packaging or pills to instantly identify medications, verify authenticity, and access detailed information about dosage, side effects, and interactions — making medication management safer and more accessible.",
      image: medicineScannerImage,
      imagePosition: "left"
    },
    {
      title: "PillPath — Smart Medicine Reminders",
      description: "Set daily reminder times for medications with smart notifications that help users stay on track. The system reduces manual entry and minimizes the risk of missing doses or mixing up look-alike medications.",
      image: pillReminderImage,
      imagePosition: "right"
    },
    {
      title: "Emergency Contacts",
      description: "Import contacts from the phone or add manually, tag as Primary or Emergency, and reach any of them in one tap. Critical information is always accessible when seconds matter.",
      image: emergencyContactsImage,
      imagePosition: "left"
    }
  ]
  
  return (
    <section className="py-24 md:py-32 px-6 bg-text/[0.02]">
      <div className="max-w-content mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            4. Prototyping the Design
          </h2>
        </div>
        
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureBlock key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
