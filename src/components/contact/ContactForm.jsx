import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import '../../static/fonts.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [successMessage, setSuccessMessage] = useState('')


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      'service_4kblnma',
      'template_tiwwoam',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'igo6C_vuTi7-iFHl1'
    ).then(() => {
      setSuccessMessage("Message sent, thank you. I'll get back to you soon")
      setFormData({ name: '', email: '', message: '' })
    }).catch((err) => {
      console.error('Failed to send message:', err)
      setSuccessMessage('Failed to send message, please try again.')
    })
  }


  return (
    <div>
      {successMessage && <p className='rukulo-regular' style={{ fontFamily: 'ruluko', color: 'lightgreen', fontSize: '2rem' }}>{successMessage}</p>}
      <div className="contact-form-container">
        <div className='ruluko-regular' style={{ fontFamily: 'ruluko', textAlign: 'left', marginBottom: '15px', minWidth: '300px' }} >Contact Form</div>

      <Form className="contact-form input-width ruluko-regular" onSubmit={onSubmit} >
        {/* Name input */}
        <Form.Group >
        <Form.Label>name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          className='input-width ruluko-regular'
          value={formData.name}
          onChange={handleChange}
          required
        />
        </Form.Group>
        {/* Email input */}
        <Form.Group >
        <Form.Label>email:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          className='input-width ruluko-regular'
          value={formData.email}
          onChange={handleChange}
          required
        />
        </Form.Group>
        {/* Message input */}
        <Form.Group >
        <Form.Label>message:</Form.Label>
        <Form.Control
          as="textarea"
          rows={7}
          name="message"
          className='input-width ruluko-regular'
          value={formData.message}
          onChange={handleChange}
          required
        />
        </Form.Group>
        {/* Submit button */}
        <Button data-mdb-ripple-init type="submit" style={{ marginTop: '10px' }} className="btn btn-warning btn-block mb-4 contact-button">Send</Button>
    </Form>
    </div>
    </div>
  )
}

export default ContactForm