import React from 'react'
import prototypeVideo from '../wireframes/sos-ai.mp4'
import DownloadButton from './DownloadButton'

export default function PrototypeVideo() {
  return (
    <section id="prototype" className="py-24 md:py-32 px-6 bg-text/[0.02]">
      <div className="max-w-content mx-auto">
        <div className="mb-16 animate-on-scroll text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Watch It In Action
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            See how SOS-AI handles real emergency scenarios from trigger to response
          </p>
        </div>
        
        <div className="max-w-sm mx-auto animate-on-scroll">
          {/* Phone frame mockup for video */}
          <div className="phone-frame">
            <div className="phone-frame-inner aspect-[9/19.5] bg-black">
              <video 
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src={prototypeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <DownloadButton text="Download APK & Try It Yourself →" />
          </div>
        </div>
      </div>
    </section>
  )
}
