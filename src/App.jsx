import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Context from './components/Context'
import ProjectOverview from './components/ProjectOverview'
import PrototypeVideo from './components/PrototypeVideo'
import DesignProcess from './components/DesignProcess'
import UnderstandingUser from './components/UnderstandingUser'
import PainPointsSolutions from './components/PainPointsSolutions'
import InsideTheApp from './components/InsideTheApp'
import Features from './components/Features'
import StyleGuide from './components/StyleGuide'
import Reflection from './components/Reflection'
import WorkSection from './components/WorkSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col smooth-scroll">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <Context />
        <ProjectOverview />
        <PrototypeVideo />
        <DesignProcess />
        <UnderstandingUser />
        <PainPointsSolutions />
        <InsideTheApp />
        <Features />
        <StyleGuide />
        <Reflection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
