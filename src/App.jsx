import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import ComingSoonPage from './pages/ComingSoonPage'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/overview" element={<ComingSoonPage name="Overview" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ComingSoonPage name="Page not found" />} />
      </Routes>
    </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App