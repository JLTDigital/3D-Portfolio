import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      await emailjs.send(
        'service_uym782h',
        'template_d5egk5f',
        {
          from_name: form.name,
          to_name: 'Jonathan',
          from_email: form.email,
          to_email: 'mrjltaft@gmail.com',
          message: form.message
        },
        '1sK5goJih25PS4MVZ'
      )

      setLoading(false)

      alert('Your Message Has Been Sent')

      setForm({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      setLoading(false)

      console.log(error)

      alert('Something Went Wrong!')
    }
  }

  return (
    <section className='c-space my-20'>
      <div className='relative min-h-screen flex items-center justify-center flex-col rounded-lg bg-black-200 border border-black-300'>
        {/* <img
          src='/assets/terminal.png'
          alt='terminal'
          className='absolute inset-0 min-h-screen'
        /> */}
        <div className='contact-container sm:pt-2 pt-4'>
          <h3 className='head-text'>Let's Talk</h3>

          <p className='text-lg text-white-600 mt-3'>
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='Name'
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='Email'
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Your Message</span>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className='field-input'
                placeholder='I Really Need To Speak To You...'
              />
            </label>
            <button className='field-btn' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img
                src='/assets/arrow-up.png'
                alt='arrow-up'
                className='field-btn_arrow'
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
