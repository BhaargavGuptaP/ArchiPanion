import React from 'react'
import logo from '../Assets/mainLogo.png'
import '../styles/navbar.css'
const navbar = () => {
  return (
    <div className='body'>
      <div className="lg-heading">
        <a href="">
            <img src={logo} alt="logo" height={40} />
            <h4 className='main-heading'>ARCHIPANION</h4>
        </a>
      </div>
      <div className="nav-tabs">
        <div className="nav-home">
            <a href="">Home</a>
            <div className="home-icon"></div>
        </div>
        <div className="nav-solutions">
            <a href="">Solutions</a>
            <div className="about-icon"></div>
        </div>
        <div className="nav-earnings">
            <a href="">Earnings</a>
            <div className="services-icon"></div>
        </div>
        <div className="nav-news">
            <a href="">News</a>
            <div className="projects-icon"></div>
        </div>
      </div>
      <div className="login-signup">
        <a href="">
            <div className="login">Login</div>
            <div className="login-icon"></div>
        </a>
        <a href="">
            <div className="signup">SignUp</div>
        </a>
      </div>
    </div>
  )
}

export default navbar
