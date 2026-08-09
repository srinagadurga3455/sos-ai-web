import React from 'react'
import DownloadButton from './DownloadButton'

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-text/10">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex flex-wrap items-center gap-8 text-[15px]">
            <a 
              href="mailto:sreesha3455@gmail.com" 
              className="text-text/70 hover:text-teal transition-colors"
            >
              sreesha3455@gmail.com
            </a>
            <DownloadButton text="Download APK" variant="link" />
            <a 
              href="#top" 
              className="text-text/70 hover:text-teal transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </div>
        
        <div className="text-center text-sm text-text/50">
          © 2026 SOS-AI Case Study. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
