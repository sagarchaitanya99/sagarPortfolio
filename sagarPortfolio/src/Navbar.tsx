import React from 'react'
import { BrowserRouter as Router, Link, useNavigate ,Outlet} from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    // contact click Button

  const handleContactClick = () => {
    navigate('/Contactform');
    
  };

//   Home Back Button
  const handleBack = () => {
    navigate('/');
    
  };

  return (
    <>
    <header>
      <a href="#" className="logo"> <span>Port</span> folio. </a>

      <nav className="navbar">
        <a onClick={handleBack} href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Project</a>
        <a href="#experience">Experience</a>
        <a onClick={handleContactClick}>contact</a>
        
      </nav>

      <div className="follow">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
      </div>
    </header>
    <Outlet/>
    </>
  )
}

export default Navbar
