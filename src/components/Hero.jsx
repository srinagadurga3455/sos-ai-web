import React from 'react'
import heroImage from '../wireframes/image1.jpeg'
import DownloadButton from './DownloadButton'

function Annotation({ title, desc, side, className }) {
  const row = side === 'left' || side === 'right'
  const line = row
    ? (
      <>
        <div className="w-6 xl:w-8 border-t-2 border-dashed border-coral/40" />
        <span className="w-2 h-2 rounded-full border-2 border-coral/50 bg-white flex-shrink-0" />
      </>
    ) : side === 'top'
      ? (
        <>
          <div className="h-6 xl:h-8 border-l-2 border-dashed border-coral/40" />
          <span className="w-2 h-2 rounded-full border-2 border-coral/50 bg-white flex-shrink-0" />
        </>
      )
      : (
        <>
          <span className="w-2 h-2 rounded-full border-2 border-coral/50 bg-white flex-shrink-0" />
          <div className="h-6 xl:h-8 border-l-2 border-dashed border-coral/40" />
        </>
      )

  const bubble = (
    <div className="bg-white/95 border-2 border-dashed border-text/20 rounded-xl px-4 py-3 shadow-sm w-40">
      <div className="text-xs font-semibold text-text whitespace-nowrap">{title}</div>
      <div className="text-[10px] italic text-text/60 mt-0.5 whitespace-nowrap">{desc}</div>
    </div>
  )

  let order
  if (row) {
    order = (side === 'left')
      ? <>{bubble}{line}</>
      : <>{line}{bubble}</>
  } else if (side === 'top') {
    order = <>{bubble}{line}</>
  } else {
    order = <>{line}{bubble}</>
  }

  return (
    <div
      className={`absolute hidden md:flex items-center gap-3 ${row ? '' : 'flex-col'} ${className}`}
    >
      {order}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="pt-9 pb-20  md:pb-28 px-6">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-on-scroll">
            <p className="text-coral text-sm font-medium uppercase tracking-wider mb-6">
              Case Study
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl">
              Making emergency care effortless when every second counts
            </h1>

            <div className="mb-8">
              <div className="text-5xl md:text-6xl font-bold mb-3 text-text">SOS-AI</div>
              <p className="text-xl md:text-2xl text-text/70 max-w-2xl">
                An AI voice assistant that acts the moment you can't.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-3 text-[15px] text-text/70 mb-10">
              <div>
                <span className="font-semibold text-coral">Role:</span> Product Designer & Developer
              </div>
              <div>
                <span className="font-semibold text-coral">Tool:</span> Figma, React Native/Expo
              </div>
              <div>
                <span className="font-semibold text-coral">Platform:</span> Android
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#prototype"
                className="inline-flex items-center px-7 py-4 bg-coral text-white font-medium rounded-lg hover:bg-coral/90 transition-colors"
              >
                Watch Prototype Video →
              </a>
              <DownloadButton variant="secondary" />
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-on-scroll">
            <div className="relative max-w-[300px] mx-auto">
              <div className="phone-frame">
                <div className="phone-frame-inner aspect-[9/19.5]">
                  <img
                    src={heroImage}
                    alt="SOS Sent screen showing emergency contacts have been notified"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <Annotation
                title="SOS Voice Assistant"
                desc="Speaks first, you reply by voice"
                side="top"
                className="-top-12 xl:-top-14 left-0 -rotate-2"
              />

              <Annotation
                title="AI Symptom Checker"
                desc="Severity rating, never a diagnosis"
                side="right"
                className="-right-5 xl:-right-9 top-12 rotate-1"
              />

              <Annotation
                title="Find & Book Doctors"
                desc="Specialists by category & rating"
                side="left"
                className="-left-5 xl:-left-9 top-[38%] -rotate-1"
              />

              <Annotation
                title="PillPath"
                desc="Smart reminders for every dose"
                side="right"
                className="-right-5 xl:-right-9 top-[55%] -rotate-2"
              />

              <Annotation
                title="Medicine Scanner"
                desc="Identify & verify any medicine"
                side="left"
                className="-left-5 xl:-left-9 bottom-24 rotate-2"
              />

              <Annotation
                title="Emergency Contacts"
                desc="Primary or Emergency — one tap"
                side="bottom"
                className="-bottom-12 xl:-bottom-14 right-0 -rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
