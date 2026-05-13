import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Blog } from './pages/Blog'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { NotFound } from './pages/NotFound'


function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}


function App() {

  return (
    <>
      <BrowserRouter>

        <ScrollToTop />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

        <Footer />

      </BrowserRouter >
    </>
  )
}

export default App