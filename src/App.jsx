import React from 'react'
import Home from './Pages/Home'
import { ContactUs } from './Pages/ContactUs'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Description } from './Pages/Description'
import { Gallery } from './Pages/Gallery'
import { Services } from './Pages/Services'
import { ContactForm } from './Pages/ContactForm'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Description/>
      <Services/>
      <Gallery/>
      <ContactForm/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
