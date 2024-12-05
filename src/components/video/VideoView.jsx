import NavbarMusic from '../navbar/navbar'
import '../../static/app.css'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'


const VideoView = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.state?.from === '/'
  console.log('isHome??', isHomePage)


  return (
    <div className="music-contents">  
      <motion.div className="contact-container"
        initial={{ x: isHomePage ? "calc(30% + 0px)" : 0, y: isHomePage ? "calc(20% + 0px)" : 0 }}  
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: isHomePage ? 0 : 1, x: isHomePage ? "calc(-10% + 0px)" : 0, y: isHomePage ? "calc(-80% + 0px)" : 0, transition: { duration: 0.3 } }}
        >
        <motion.a
          onClick={() => navigate('/')}
          className='about-title'
          initial={{ fontSize: isHomePage ? 'clamp(4rem, 9vw, 9rem)' : '5rem' }}
          animate={{ fontSize: '5rem' }}
          transition={{ duration: 1, ease: 'easeOut'}}
          exit={{ fontSize: isHomePage ? 'clamp(4rem, 9vw, 9rem)' : '5rem' }}
          >
          craig morley
        </motion.a>
        <motion.div className='about-nav'
            initial={{ x: "0%", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            exit={{  }}
          >
            <NavbarMusic />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          exit={{ opacity: 0, x: -150, transition: { duration: 0.3, delay: 0.2 } }}
        >
        <div className='video-container'>
          <iframe
            className='iframe'
            width="560" 
            height="315" 
            src="https://www.youtube-nocookie.com/embed/u1X2nQWYbjs?si=b_rsgDO8MDiH0AIQ"
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
        <div className='video-container'>
          <iframe
            className="iframe"
            width="560" 
            height="315" 
            src="https://www.youtube-nocookie.com/embed/7PH87wHmHDk?si=KexrcCgWfe9LR3-M" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
          <br /><br /><br /><br /><br /><br />
        </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default VideoView
