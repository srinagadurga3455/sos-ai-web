import React from 'react'
import heroImage from '../wireframes/sos-sent-hero.png'
import DownloadButton from './DownloadButton'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-content mx-auto">
        <div className="animate-on-scroll">
          <p className="text-teal text-sm font-medium uppercase tracking-wider mb-6">
            Case Study
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl">
            Making emergency care effortless when every second counts
          </h1>
          
          <div className="mb-8">
            <div className="text-5xl md:text-7xl font-bold mb-3 text-text">SOS-AI</div>
            <p className="text-xl md:text-2xl text-text/70 max-w-2xl">
              An AI voice assistant that acts the moment you can't.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-3 text-[15px] text-text/70 mb-10">
            <div>
              <span className="font-semibold text-text">Role:</span> Product Designer & Developer
            </div>
            <div>
              <span className="font-semibold text-text">Tool:</span> Figma, React Native/Expo
            </div>
            <div>
              <span className="font-semibold text-text">Platform:</span> Android
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#prototype" 
              className="inline-flex items-center px-7 py-4 bg-teal text-white font-medium rounded-lg hover:bg-teal/90 transition-colors"
            >
              Watch Prototype Video →
            </a>
            <DownloadButton variant="secondary" />
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-20 animate-on-scroll">
          <div className="max-w-md mx-auto">
            <div className="phone-frame">
              <div className="phone-frame-inner aspect-[9/19.5]">
                <img 
                  src={heroImage}
                  alt="SOS Sent screen showing emergency contacts have been notified"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
