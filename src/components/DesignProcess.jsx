import React from 'react'

export default function DesignProcess() {
  const steps = [
    'Research',
    'Define',
    'Wireframe',
    'Prototype',
    'Test',
    'Final UI'
  ]
  
  return (
    <section className="py-24 md:py-32 px-6 bg-text/[0.02]">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-on-scroll">
          Design Process
        </h2>
        
        <div className="hidden md:flex items-center justify-between max-w-4xl mx-auto animate-on-scroll">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center font-bold mb-3">
                  {index + 1}
                </div>
                <div className="text-sm font-medium text-center">{step}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-teal/30 mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="md:hidden space-y-4 animate-on-scroll">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                {index + 1}
              </div>
              <div className="font-medium">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
