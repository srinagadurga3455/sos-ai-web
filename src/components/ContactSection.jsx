import React from 'react'
import DownloadButton from './DownloadButton'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-content mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk</h2>
            <p className="text-xl text-text/70 mb-12 leading-relaxed">
              Interested in collaborating, have questions about <strong className="font-semibold text-coral">SOS-AI</strong>, or just want to chat about design and development? 
              I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-on-scroll">
            <a 
              href="mailto:sreesha3455@gmail.com"
              className="group p-8 bg-text/[0.03] hover:bg-coral/5 rounded-2xl transition-all text-left"
            >
              <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-sm font-medium text-coral mb-1">Email</div>
              <div className="text-text/70">sreesha3455@gmail.com</div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sri-naga-durga-kamireddy-890419322/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-text/[0.03] hover:bg-coral/5 rounded-2xl transition-all text-left"
            >
              <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                <svg className="w-6 h-6 text-coral" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="text-sm font-medium text-coral mb-1">LinkedIn</div>
              <div className="text-text/70">Connect with me</div>
            </a>
          </div>
          
          <div className="animate-on-scroll">
            <DownloadButton 
              text="Download SOS-AI APK →" 
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
