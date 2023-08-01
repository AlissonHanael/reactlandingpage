import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Analytics from './components/analytics/Analytics'
import Newsletter from './components/newsletter/Newsletter'
import Slides from './components/slides/Slides'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Slides />
      <Footer />
    </div>
  )
}

export default App
