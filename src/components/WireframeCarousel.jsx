import React, { useState, useEffect } from 'react'

export default function WireframeCarousel({ sketches }) {
  const visible = 4
  const total = sketches.length
  const maxIndex = total - visible
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % (maxIndex + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [paused, maxIndex])

  const goTo = (i) => setIndex(((i % (maxIndex + 1)) + maxIndex + 1) % (maxIndex + 1))

  return (
    <div
      className="flex flex-col items-center animate-on-scroll"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-4 md:gap-8 w-full max-w-3xl">
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous sketches"
          className="p-2 rounded-full hover:bg-text/[0.05] transition-colors flex-shrink-0"
        >
          <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="overflow-hidden rounded-xl border border-text/10 bg-white flex-1">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 25}%)` }}
          >
            {sketches.map((sketch) => (
              <div key={sketch.title} className="flex-shrink-0 px-1 py-1" style={{ width: '25%' }}>
                <img src={sketch.image} alt={sketch.title} className="w-full h-auto rounded-lg" />
                <p className="text-[10px] text-text/60 text-center mt-1 leading-tight">{sketch.title}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next sketches"
          className="p-2 rounded-full hover:bg-text/[0.05] transition-colors flex-shrink-0"
        >
          <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to sketches ${i + 1}-${i + visible}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-5 bg-coral' : 'w-1.5 bg-text/20 hover:bg-text/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}