import React from 'react'

export default function StyleGuide() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 animate-on-scroll">
          Style Guide
        </h2>
        
        <div className="row border-b border-text/5 animate-on-scroll">
          <div className="text-xl font-medium text-text/60">Colors</div>
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
        
        <div className="row border-b border-text/5 animate-on-scroll">
          <div className="text-xl font-medium text-text/60">Typography</div>
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
        
        <div className="row animate-on-scroll">
          <div className="text-xl font-medium text-text/60">Usage Philosophy</div>
          <p className="text-base leading-relaxed text-text/80 max-w-3xl">
            <strong className="font-semibold text-coral">Red is reserved exclusively for emergency actions</strong> — 
            the SOS trigger, alerts, and the call-ambulance button — so it always reads as urgent. 
            <strong className="font-semibold text-coral"> Teal covers everyday actions</strong> like calling a contact 
            or booking a doctor, creating a clear visual distinction between what's urgent and what's routine.
          </p>
        </div>
      </div>
    </section>
  )
}