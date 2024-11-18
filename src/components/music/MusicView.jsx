import '../../static/music.css'
import '../../static/app.css'
import NavbarMusic from '../navbar/navbar'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'


const MusicView = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.state?.from === '/'
  const isCurrentPage = location.pathname === '/music'
  console.log('currePatge?,', isCurrentPage);
  console.log('isHomePage?:', isHomePage)


  return (
    <div className="music-contents">  
      <motion.div className="main-elements"
        initial={{ x: isHomePage ? "calc(28% + 0px)" : 0, y: isHomePage ? "calc(20% + 0px)" : 0 }}  
        animate={{ x: isHomePage ? 0 : 0, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: isHomePage ? 0 : 1, x: isHomePage ? "calc(-10% + 0px)" : 0, y: isHomePage ? "calc(-80% + 0px)" : 0, transition: { duration: 0.3 } }}
        >
          <motion.a 
            onClick={() => navigate('/', {state: { fromAbout: true } })}
            className='about-title'
            initial={{ fontSize: isHomePage ? 'clamp(4rem, 9vw, 9rem' : {} }}
            animate={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            exit={{ fontSize: isHomePage ? 'clamp(4rem, 9vw, 9rem' : {} }}
            >craig morley
        </motion.a>
        <motion.div className='about-nav'
            initial={{ x: isHomePage ? "12%" : 0, opacity: 1, }}
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <NavbarMusic />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          exit={{ opacity: 0, x: -150, transition: { duration: 0.3, delay: 0.2 } }}
        >
          <div className='links-div'>
            <div>
              <a className="logo-link" href="https://open.spotify.com/track/0rD7r6tH03uVqbheAqn0yQ?si=e38e281c24ba420e">listen on spotify <img className='logo' src="/images/Spotify_Primary_Logo_RGB_Green.png"></img></a>
            </div>
            <div>        
              <a className="logo-link" href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://music.apple.com/us/album/firewing-ep/1737553612&ved=2ahUKEwibyPP70OGJAxVjYEEAHfmUNUMQFnoECBoQAQ&usg=AOvVaw2MVWPj1MzHmhDosEc2ko7F"><span>listen on apple music </span><img className='logo' src='/images/standard.svg'></img></a>
            </div>
            <div>
            <a className="logo-link" href="https://www.youtube.com/watch?v=vjMrdpKwVcM&list=OLAK5uy_mZhTEwD5AMuMXK7Z-Sp8McrRuC_gdXCsk"> listen on youtube <img className="logo" src="/images/youtube_social_circle_white.png"></img></a>
            </div>
            <div>
            <a className="logo-link" href="https://music.amazon.com/albums/B0CYW2PGXW"> listen on amazon music <img className="logo" src="/images/Stacked_Amazon_Music_CharcoalOnCyan_Circle_RGB.png"></img></a>
            </div>
            <div>
            <a className="logo-link" href="https://tidal.com/browse/album/352964781?u"> listen on tidal <img className="logo" src="/images/tidal-round-black-icon.webp"></img></a>
            </div>
          </div>
          <div className='links-div'>
            <div>
              <a className="logo-link" href="https://www.instagram.com/craigmorleymusic/">follow on instagram <img className="logo" src="/images/Instagram_Glyph_Gradient.png"></img></a>
            </div>
            <div>        
              <a className="logo-link" href="https://www.tiktok.com/@craigmorleymusic">follow on tiktok <img className="logo" src="/images/TikTok_Icon_Black_Circle.png"></img></a>
            </div>
            <div>
              <a className="logo-link" href="https://www.facebook.com/craigmorleymusic/?_rdr">follow on facebook <img className="logo" src="/images/Facebook_Logo_Primary.png"></img></a>
            </div>
            <div>
              <a className="logo-link" href="https://soundcloud.com/craigmorleymusic">follow on soundcloud <img className="logo" src="/images/54546-1717072325-sc-logo-cloud-black-7412d7.svg"></img></a>
            </div>
            <div>
              <a className="logo-link" href="https://craigmorley.bandcamp.com">follow on bandcamp <img className="logo" src="/images/bandcamp-button-bc-circle-aqua-256.png"></img></a>
            </div>
            <div>
              <a className="logo-link" href="https://x.com/craigmorleymusi">follow on x <img className="logo" src="/images/logo-black.png"></img></a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MusicView

