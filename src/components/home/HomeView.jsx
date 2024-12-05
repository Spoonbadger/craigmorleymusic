import { motion } from "framer-motion"
import NavbarMusic from "../navbar/navbar"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"


const name = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}


const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
}


const HomeView = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isComingFromAbout = location.state?.fromAbout
    console.log('isComingFromAbout?:', isComingFromAbout);
    const [musicHidden, setMusicHidden] = useState(false)

    const toggleMusicHidden = () => {
        setMusicHidden(!musicHidden)
    }

  return (
    <div className="app-container">
        <div className='content fade-in'>
        <motion.a
            href="/"
            className="title-name"
            key="title"
            style={{ display: 'block' }}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0 }}
            whileHover={{ scale: 1.05 }}
        >
        <motion.div
          className='name'
          variants={name}
          initial="initial"
          animate="animate"
          >
          <motion.span variants={letter}>c</motion.span>
          <motion.span variants={letter}>r</motion.span>
          <motion.span variants={letter}>a</motion.span>
          <motion.span variants={letter}>i</motion.span>
          <motion.span variants={letter}>g</motion.span>
          <motion.span variants={letter}> </motion.span>
          <motion.span variants={letter}>m</motion.span>
          <motion.span variants={letter}>o</motion.span>
          <motion.span variants={letter}>r</motion.span>
          <motion.span variants={letter}>l</motion.span>
          <motion.span variants={letter}>e</motion.span>
          <motion.span variants={letter}>y</motion.span>
        </motion.div>
        </motion.a>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3.2 }}>
          <NavbarMusic />
        </motion.div>
        <motion.div 
            exit={{ duration: 1, opacity: 0 }}
            >
            <motion.p
                className="subtitle-name"
                key="subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3, ease: 'easeOut', delay: 1.4 }}
            >
                THE NEW EP <strong>&apos;<i>
                <motion.span
                style={{ display: 'inline-block' }}
                whileHover={{ scale: 1.05, color: 'rgb(255, 102, 102)' }}
                onClick={toggleMusicHidden}
                animate={{ scale: [1, 1.05, 1], color: ['rgb(253, 246, 230)', 'rgb(255, 102, 102)', 'rgb(253, 246, 230)'] }}
                transition={{ delay: 3.6, duration: 1.2 }}
                >
                Firewing
                </motion.span>
                &apos;</i></strong> - OUT NOW
            </motion.p>
        </motion.div>
        {musicHidden &&
            <motion.div 
            id="ep-container"
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <iframe 
              style={{ borderRadius:'12px' }}
              src="https://open.spotify.com/embed/album/569rSaKJjX6zHJF1boizhy?utm_source=generator&theme=0"
              width="100%"
              height="152" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </motion.div> 
        }
        </div>
    </div>
  )
}

export default HomeView