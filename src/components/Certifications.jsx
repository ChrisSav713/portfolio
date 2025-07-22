import React from 'react'

const Certifications = () => {
  return (
    <section id='certifications' className='p-8 mb-50 bg-white text-center'>
      <h2 className='text-3xl font-bold'>Certifications</h2>

      <div className='space-y-8'>
        {/* Degree Section */}
        <div className='bg-white p-6 rounded-xl shadow border border-slate-200'>
          <h3 className='text-xl font-bold text-slate-800'>
            Bachelor of Science
          </h3>
          <p className='text-slate-700'>Computer Science and Mathematics</p>
          <p className='text-slate-700'>St. Joseph's College — Patchogue, NY</p>
          <a
            href='https://www.sjny.edu/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-indigo-500 hover:underline'
          >
            Visit School Website
          </a>
        </div>

        {/* Bootcamp Section */}
        <div className='bg-white p-6 rounded-xl shadow border border-slate-200'>
          <h3 className='text-xl font-bold text-slate-800'>
            Coding Dojo Full-Stack Bootcamp
          </h3>
          <a
            href='https://app.diplomasafe.com/en-US/diploma/de6571b39e33c8b9115bb0f1605199734009699d9'
            target='_blank'
            rel='noopener noreferrer'
            className='text-indigo-500 hover:underline'
          >
            🎓 View Diploma
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certifications
