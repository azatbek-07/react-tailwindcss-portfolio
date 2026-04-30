import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Blog } from './pages/Blog'


function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />


        </Routes>

      </BrowserRouter >
    </>
  )
}

export default App
