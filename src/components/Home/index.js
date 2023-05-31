import './index.scss'
import LogoR from '../../assets/images/logo-r.png'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {

	const [letterClass, setLetterClass] = useState('text-animate')
	const nameArray = ['a', 'v', 'i', 'n', 'd', 'r', 'a']
	const jobArray = [
		'F',
		'r',
		'o',
		'n',
		't',
		'e',
		'n',
		'd',
		' ',
		'D',
		'e',
		'v',
		'e',
		'l',
		'o',
		'p',
		'e',
		'r',
		'.'
	]

	useEffect(() => {
	const animate = setTimeout(() => setLetterClass('text-animate-hover'), 4000);
	return () => clearTimeout(animate);
	}, []);

  return (
	<>
		<div className='container home-page'>
			<div className='text-zone'>
				<h1>
					<span className={letterClass}>H</span>
					<span className={`${letterClass} _12`}>i,</span>
					<br />
					<span className={`${letterClass} _13`}>I</span>
					<span className={`${letterClass} _14`}>'m</span>
					<img src={LogoR} alt='developer' />
					<AnimatedLetters
						letterClass={letterClass}
						strArray={nameArray}
						idx={15}
					/>
					<br />
					<AnimatedLetters
						letterClass={letterClass}
						strArray={jobArray}
						idx={17}
					/>
					
				</h1>
				<h2>ReactJS / JavaScript / Wordpress</h2>
				<Link to='/contact'>
					<button className='flat-button'>CONTACT ME</button>
				</Link>
			</div>
			<Logo />
		</div>

		<Loader type='pacman' />
	</>
  )
}

export default Home