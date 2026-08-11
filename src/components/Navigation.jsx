import React from 'react'
import sosLogo from '../../sos.png'

const APK_URL = 'https://expo.dev/artifacts/eas/IchBfO0BeUZgX2Gna2TLX-K7yDTJ9-996Wj9w_VaQKM.apk'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-text/5">
      <div className="max-w-content mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={sosLogo} alt="SOS-AI logo" className="h-9 w-auto object-contain" />
            <div className="text-2xl font-bold text-text tracking-tight">SOS-AI</div>
          </div>
          <div className="flex items-center gap-6 text-[15px]">
            <a href="#contact" className="text-text/70 hover:text-text transition-colors">Contact</a>
            <a
              href={APK_URL}
              download="SOS-AI.apk"
              className="inline-flex items-center px-4 py-2 bg-coral text-white text-sm font-medium rounded-lg hover:bg-coral/90 transition-colors"
            >
              Download SDK
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}