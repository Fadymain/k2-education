import React from 'react';
// import AppliPro from './components/AppliPro';
import BodyImage from './components/BodyImage';
import Nav from './components/Nav';
import Process from './components/Process';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
     <Nav />
     <BodyImage />
     {/* <AppliPro /> */}
     <Process />
     <Contact />
     <Footer />
    </>
  )
}

export default App