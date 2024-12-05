import { motion } from 'framer-motion'
import '../../static/app.css'
import NavbarMusic from '../navbar/navbar'
import { useLocation, useNavigate } from 'react-router-dom'



const AboutView = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.state?.from === '/'
  console.log('isHomePgae:', isHomePage);
  const isCurrentPage = location.pathname === '/about'


  return (
      <div className="about-contents">
        <motion.div className="main-elements"
          initial={{ x: isHomePage ? "calc(20% + 0px)" : 0, y: isHomePage ? "calc(55% + 0px)" : 0 }}  
          animate={{ x: isHomePage? 0 : 0, y: 0 }}
          transition={{ duration: isHomePage ? 0.5 : 0 }}
          exit={{ opacity: isHomePage ? 0 : 1, x: isHomePage ? "calc(-10% + 0px)" : 0, y: isHomePage ? "calc(-80% + 0px)" : 0, transition: { duration: 0.3 } }}
          >
          <motion.a 
            onClick={() => navigate('/', {state: { fromAbout: true } })}
            className='about-title'
            initial={{ fontSize: isHomePage ? 'clamp(4rem, 9vw, 9rem)' : '5rem' }}
            animate={{ fontSize: '5rem)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            exit={{ fontSize: isHomePage ? 'clamp(4rem, 9vw, 9rem)' : '5rem' }}
            >craig morley
          </motion.a>
          <motion.div className='about-nav'
            initial={{ x: "0%", opacity: 1, }}
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <NavbarMusic />
          </motion.div>
        </motion.div>
        <motion.div className='about-bio'
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          exit={{ opacity: 0, x: -150, transition: { duration: 0.3, delay: 0.2 } }}
        >
          <p>
            Half a world away, plucking out threads from enigmatic days. Music born of experience. 
            An English-American contemporary composer and musician.
          </p>
          <p>
            From the vibrant streets of Los Angeles to the serene countryside of the Peak District in the North of England, 
            reflecting on eight transformative years in Seattle, Craig Morley weaves a rich tapestry of sound that bridges continents and experiences. 
            In 2024, he released two evocative EPs: "By Acting Together We Really Act" in April and "Firewing" in September, each a testament to his ongoing exploration of music as narrative form.
          </p>
          <p>
            Creativity from this space allowing him to express these years, the joy, the pain, the brilliance, the struggle. Fractally dispersing inwardly, there is something here that reflects our desired state. There are examples of current realities, of what in the world just happened; of hope, of calm, of peace. 
          </p>
          <p>
            Eight years in Seattle and keeping hold of his head, Craig Morley has traversed experiences, overcoming all to unleash the splish and splatters, the narrative of cinematic storytelling. Ready to unearth the spirit of calling, to look into the abyss until the light of your self illuminates.
          </p>
          <p>
            No more pop music for this composer with a rock ‘n’ roll background of UK tours and American shows, there’s urgency in the strings, force in the musical flow, banging in all the instruments (literally), telling the tale, the story, the horror, the joy. All with grit. His compositions are more than mere melodies; they are journeys — each track a chapter in a larger story of revelation.
          </p>
          <p>
            Craig Morley's music is a dynamic interplay of instrumental vigor and contemplative storytelling, embodying the raw and unfiltered essence of his experiences. No longer confined to a singular place or label, finding the freedom he has always desired, his work reflects a broader spectrum of life and artistry, unfurling like the intricate patterns of a journey hard-traveled. Knowing...
          </p>
          <p>
            By acting together, We really act. 
          </p>
        </motion.div>
      </div>

  )
}

export default AboutView