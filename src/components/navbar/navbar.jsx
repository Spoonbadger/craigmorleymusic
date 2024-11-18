import { Nav, Navbar } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../static/app.css'
import '../../static/fonts.css'
import '../../static/animation.css'


const NavbarMusic = () => {
  const location = useLocation()
console.log('location.pathname check:', location.pathname);

  return (
    <Navbar className='navbar-main' collapseOnSelect expand='lg' bg='transparent' data-bs-theme="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='me-auto'>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link ruluko-regular fade-in' to="/music" state={{ from: location.pathname }}>music</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link ruluko-regular fade-in' to="/about" state={{ from: location.pathname }}>about</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link ruluko-regular fade-in' to="/video" state={{ from: location.pathname }}>video</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link ruluko-regular fade-in' to="/contact" state={{ from: location.pathname }}>contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarMusic