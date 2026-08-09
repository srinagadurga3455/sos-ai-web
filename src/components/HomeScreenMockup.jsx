import React from 'react'

export default function HomeScreenMockup({ screen, className = '' }) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-frame-inner aspect-[9/19.5]">
        <div className="w-full h-full bg-gradient-to-b from-teal/10 to-teal/5">
          {screen}
        </div>
      </div>
    </div>
  )
}
