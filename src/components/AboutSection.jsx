import React from 'react'

export default function AboutSection() {
  const skills = [
    "Product Design",
    "UX Research",
    "React & React Native",
    "Figma",
    "UI Design",
    "Prototyping",
    "AI Integration",
    "Mobile Development"
  ]
  
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-text/[0.02] scroll-mt-20">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
            <div className="space-y-4 text-lg text-text/80 leading-relaxed">
              <p>
                I'm a <strong className="font-semibold text-text">product designer and developer</strong> focused 
                on building experiences that matter — especially when it comes to healthcare and emergency response.
              </p>
              <p>
                With SOS-AI, I combined voice AI, real-time location services, and human-centered design to create 
                something that could genuinely save lives. Every decision was driven by one question: 
                <strong className="font-semibold text-text"> "What would I need if I couldn't think clearly?"</strong>
              </p>
              <p>
                I believe the best products aren't just usable — they're invisible when you need them most.
              </p>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8">Skills & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="px-5 py-3 bg-text/[0.05] hover:bg-teal/10 hover:text-teal rounded-lg text-sm font-medium transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-teal/5 rounded-xl border-l-4 border-teal">
              <div className="text-sm font-medium text-teal mb-2">Currently</div>
              <div className="text-text/80">
                Working on expanding SOS-AI's medicine detection accuracy and adding multilingual voice support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
