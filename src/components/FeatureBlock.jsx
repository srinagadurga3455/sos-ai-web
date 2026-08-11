import React from 'react'

export default function FeatureBlock({ title, description, image, imagePosition }) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center animate-on-scroll ${
      imagePosition === 'left' ? 'md:flex-row-reverse' : ''
    }`}>
      <div className={imagePosition === 'left' ? 'md:order-2' : ''}>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">{title}</h3>
        <p className="text-base leading-relaxed text-text/80">{description}</p>
      </div>
      
      <div className={imagePosition === 'left' ? 'md:order-1' : ''}>
        <div className="max-w-sm mx-auto">
          <div className="phone-frame">
            <div className="phone-frame-inner aspect-[9/19.5]">
              <img 
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}