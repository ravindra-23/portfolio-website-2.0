import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo from '../../assets/images/logo.png'

import React from 'react'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
	<div className='nav-bar'>
		<Link className='logo' to='/'>
			<img src={logo} alt='logo' />
		</Link>

		<nav>
			<NavLink exact='true' activeclassname='active' to='/'>
				<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
			</NavLink>

			<NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
				<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
			</NavLink>

			<NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
				<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
			</NavLink>
		</nav>

		<ul>
			<li>
				<a 
					target='_blank' 
					rel='noreferrer' 
					href='https://www.linkedin.com/in/ravindra23/'
				>
					<FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
				</a>
			</li>

			<li>
				<a 
					target='_blank' 
					rel='noreferrer' 
					href='https://github.com/ravindra-23'
				>
					<FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
				</a>
			</li>

			<li>
				<a 
					target='_blank' 
					rel='noreferrer' 
					href='https://www.instagram.com/ravinder2308.js/'
				>
					<FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
				</a>
			</li>
		</ul>
	</div>
  )
}

export default Sidebar