import React from 'react'

export default function StyleGuide() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-on-scroll">
          Style Guide
        </h2>
        
        <div className="space-y-16">
          {/* Colors */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="h-32 rounded-xl bg-[#E5484D] mb-3"></div>
                <div className="font-mono text-sm">#E5484D</div>
                <div className="text-sm text-text/60">Coral Red</div>
                <div className="text-xs text-text/50 mt-1">Emergency only</div>
              </div>
              <div>
                <div className="h-32 rounded-xl bg-[#2F9E8F] mb-3"></div>
                <div className="font-mono text-sm">#2F9E8F</div>
                <div className="text-sm text-text/60">Teal</div>
                <div className="text-xs text-text/50 mt-1">Routine actions</div>
              </div>
              <div>
                <div className="h-32 rounded-xl bg-[#F3F1EC] border border-text/10 mb-3"></div>
                <div className="font-mono text-sm">#F3F1EC</div>
                <div className="text-sm text-text/60">Background</div>
                <div className="text-xs text-text/50 mt-1">Warm off-white</div>
              </div>
              <div>
                <div className="h-32 rounded-xl bg-[#1A1A1A] mb-3"></div>
                <div className="font-mono text-sm">#1A1A1A</div>
                <div className="text-sm text-text/60">Text</div>
                <div className="text-xs text-text/50 mt-1">Near-black</div>
              </div>
            </div>
          </div>
          
          {/* Typography */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8">Typography</h3>
            <div className="space-y-6 max-w-3xl">
              <div className="pb-6 border-b border-text/10">
                <div className="text-5xl font-bold mb-2">Display Bold</div>
                <div className="text-sm text-text/60">Inter / Headlines & emphasis</div>
              </div>
              <div className="pb-6 border-b border-text/10">
                <div className="text-lg">Body Regular</div>
                <div className="text-sm text-text/60">Inter / Body text & UI elements</div>
              </div>
            </div>
          </div>
          
          {/* Color Usage */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Color Usage Philosophy</h3>
            <p className="text-lg text-text/80 leading-relaxed max-w-3xl">
              <strong className="font-semibold text-text">Red is reserved exclusively for emergency actions</strong> — 
              the SOS trigger, alerts, and the call-ambulance button — so it always reads as urgent. 
              <strong className="font-semibold text-text"> Teal covers everyday actions</strong> like calling a contact 
              or booking a doctor, creating a clear visual distinction between what's urgent and what's routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
