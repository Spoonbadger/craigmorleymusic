import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import NavbarMusic from '../navbar/navbar'


const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="about-contents">
      <motion.div className="main-elements"
        initial={{ x: "calc(20% + 0px)", y: "calc(55% + 0px)" }}  
        animate={{ x: 50, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: "calc(-10% + 0px)", y: "calc(-80% + 0px)", transition: { duration: 0.3 } }}
        >
        <motion.a 
            onClick={() => navigate('/')}
            className='about-title'
            initial={{ fontSize: 'clamp(4rem, 9vw, 9rem' }}
            animate={{ fontSize: '2.4rem, 7vw, 7rem' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            exit={{ fontSize: 'clamp(4rem, 9vw, 9rem' }}
            >craig morley
        </motion.a>
        <motion.div className='about-nav'
            initial={{ x: "0%", opacity: 1, }}
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            exit={{  }}
          >
          <NavbarMusic />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Header