import { useState } from 'react'

import './HomeApp.css'
import React from 'react'
import Header from '../components/header/header';
import Footer from '../components/footer/footer.jsx';
import Home from '../pages/homepage/home.jsx'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
      <Home />
      <Footer />
   
    </>
  )
}

export default HomePage
