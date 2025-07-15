import React from 'react'

const Resume = () => {
  return (
    <section id='resume' className='min-h-screen p-8 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Resume</h2>
      <a
        href='/ChristopherSavasta_Resume.pdf'
        download
        className='px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition'
      >
        Download PDF
      </a>
    </section>
  )
}

export default Resume
