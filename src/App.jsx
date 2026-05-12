import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'

import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Blog } from './pages/Blog'
import { Header } from './components/Header'
import { Footer } from './components/Footer'


function App() {

  return (
    <>

      <BrowserRouter>
        <Header />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={"Bu sahifa ishlab chiqilyabdi"} />
          <Route path="*" element={"Bunday sahifa hali yatilmadi"} />


        </Routes>
        <Footer />

      </BrowserRouter >
    </>
  )
}

export default App
