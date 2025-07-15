import React from 'react'
import me from '../img/me_cropped2.jpg'

const Home = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex flex-col items-center justify-center px-4'
    >
      <img
        src={me}
        alt='Picture of me'
        className='w-75 rounded-b-md mx-auto shadow'
      ></img>
      <h2 className='text-4xl font-bold mb-4'>Full-Stack Developer</h2>
      <p className='max-w-xl mx-auto text-lg'>
        Motivated and adaptable professional transitioning into software
        development after 10 years of custodial work. Holds a degree in Computer
        Science and recently completed a full-stack coding bootcamp. Focused on
        building practical skills with modern technologies like React,
        JavaScript, and Python, with an emphasis on clean, maintainable code and
        real-world projects.
      </p>
    </section>
  )
}

export default Home
