
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { About } from './pages/About'

function App() {

  return (
    <>

      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/> } />


        </Routes>
      
      </BrowserRouter >
    </>
  )
}

export default App
