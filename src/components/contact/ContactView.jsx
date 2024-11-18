import '../../static/music.css'
import NavbarMusic from '../navbar/navbar'
import '../../static/app.css'
import '../../static/fonts.css'
import ContactForm from './ContactForm'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'


const ContactView = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.state?.from === '/'


  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://js.stripe.com/v3/buy-button.js"
    script.async = true;
    document.body.appendChild(script)
    
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="music-contents">
      <motion.div
        className="contact-container"
        initial={{ x: isHomePage ? '30%' : 0, y: isHomePage ? '20%' : 0 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: isHomePage? 0 : 1, x: isHomePage ? "calc(-10% + 0px)" : 0, y: isHomePage ? "calc(-80% + 0px)" : 0, transition: { duration: 0.3 } }}
        >
        <motion.a
          onClick={() => navigate('/')}
          className='about-title'
          initial={{ fontSize: isHomePage ? 'clamp(4rem, 9vw, 9rem)' : {} }}
          animate={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
          transition={{ duration: 1, ease: 'easeOut'}}
          exit={{ fontSize: isHomePage ? 'clamp(4rem, 9vw, 9rem' : {} }}
          >
          craig morley
        </motion.a>
        <motion.div className='about-nav'
            initial={{ x: "0%", opacity: 1, }}
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            exit={{  }}
          >
            <NavbarMusic />
        </motion.div>
        <motion.div className='contact-donate-wrapper'
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          exit={{ opacity: 0, x: -150, transition: { duration: 0.3, delay: 0.2 } }}
          >
          <ContactForm />
          <div style={{ marginLeft: '150px' }}>
            <div id="invest-container" className="invest-container">
              <stripe-buy-button
                buy-button-id="buy_btn_1Q1384IdaV2VtQr7G5JMPHpr"
                publishable-key="pk_live_51Q0mIYIdaV2VtQr7Isl9Uz1buLBoH6mPmRB5bmicDGLMRDpN3IgIv0TC6WeX39XRHBeH3DAVCn7wwEPkPzmVUGhI000zhTGHDS"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactView
