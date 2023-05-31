import React, { useState, useEffect, useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/index'
import emailjs from '@emailjs/browser'
const Contact = () => {

	const [letterClass, setLetterClass] = useState('text-animate')
	const form = useRef()

	useEffect(() => {
		const animate = setTimeout(() => setLetterClass('text-animate-hover'), 4000);
		return () => clearTimeout(animate);
		}, []);

	const sendEmail = (e) => {
		e.preventDefault()
	
		emailjs
			.sendForm('gmail', 'template_1iura2i', form.current, 'wj66igofKuK-RM9NVVEZA')
			.then(
			() => {
				alert('Message successfully sent!')
				window.location.reload(false)
			},
			() => {
				alert('Failed to send the message, please try again')
			}
			)
		}
  return (
	<>
		<div className='container contact-page'>
			<div className='text-zone'>
				<h1>
					<AnimatedLetters 
						strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
						idx={15} 
						letterClass={letterClass}
					/>
				</h1>
				<p>
					I am interested in freelance opportunities - especially on ambitious
					or large projects. However, if you have any other requests or
					questions, don't hesitate to contact me using below form either.
				</p>

				<div className="contact-form">
					<form ref={form} onSubmit={sendEmail}>
					<ul>
						<li className="half">
							<input placeholder="Name" type="text" name="name" required />
						</li>
						<li className="half">
							<input
								placeholder="Email"
								type="email"
								name="email"
								required
							/>
						</li>
						<li>
							<input
								placeholder="Subject"
								type="text"
								name="subject"
								required
							/>
						</li>
						<li>
							<textarea
								placeholder="Message"
								name="message"
								required
							></textarea>
						</li>
						<li>
							<button type="submit" className="flat-button" value="SEND">Send</button>
						</li>
					</ul>
					</form>
				</div>
			</div>
		</div>
		<Loader type='pacman' />
	</>
  )
}

export default Contact