import React from 'react';
// import AppliPro from './components/AppliPro';
import BodyImage from './components/BodyImage';
import Nav from './components/Nav';
import Process from './components/Process';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
     <Nav />
     <BodyImage />
     {/* <AppliPro /> */}
     <Process />
     <Footer />
    </>
  )
}

export default App