import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import ComingSoonPage from './pages/ComingSoonPage'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/overview" element={<ComingSoonPage name="Overview" />} />
        <Route path="/contact" element={<ComingSoonPage name="Contact" />} />
        <Route path="*" element={<ComingSoonPage name="Page not found" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App