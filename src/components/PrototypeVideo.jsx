import React, { useState, useEffect, useRef } from 'react'
import prototypeVideo from '../wireframes/demo.mp4'

export default function PrototypeVideo() {
  const [inView, setInView] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="prototype" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div aria-hidden="true" className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-coral/15 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 -right-24 w-[26rem] h-[26rem] rounded-full bg-teal/15 blur-3xl pointer-events-none" />

      <div className="max-w-content mx-auto">
        <div className="mb-16 animate-on-scroll text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Watch It In Action
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            See how <strong className="font-semibold text-coral">SOS-AI</strong> handles real emergency scenarios from trigger to response
          </p>
        </div>

        <div className="max-w-sm mx-auto animate-on-scroll" ref={videoRef}>
          <div className="relative rounded-[2.5rem] p-3 bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl shadow-text/10">
            <div className="relative overflow-hidden rounded-[2rem] aspect-[9/19.5] bg-black">
              {inView && (
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={prototypeVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {!inView && (
                <div className="absolute inset-0 flex items-center justify-center bg-text/5">
                  <div className="w-14 h-14 rounded-full border-4 border-text/15 border-t-coral animate-spin" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 text-sm text-text/70">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            Tap play for sound — video starts automatically
          </div>
        </div>
      </div>
    </section>
  )
}