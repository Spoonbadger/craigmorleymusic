import './static/app.css'
import './static/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomeView from './components/home/HomeView'
import AboutView from './components/about/AboutView'
import MusicView from './components/music/MusicView'
import ContactView from './components/contact/ContactView'
import VideoView from './components/video/VideoView'
import { AnimatePresence } from 'framer-motion'


function App() {
  const location = useLocation()

  return (
    <div className="background-overlay">

        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<HomeView key='home' />} />
            <Route path='/about' element={<AboutView key='about' />} />
            <Route path='/music' element={<MusicView key='music' />} />
            <Route path='/contact' element={<ContactView key='contact' />} />
            <Route path='/video' element={<VideoView key='video' />} />
          </Routes>
        </AnimatePresence>

    </div>
  )
}

export default App
