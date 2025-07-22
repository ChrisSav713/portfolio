import React from 'react'
import file from '../doc/Christopher Savasta Resume 7-22-25.pdf'
const Resume = () => {
  return (
    <section id='resume' className='p-8 pb-50 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Resume</h2>
      <a
        href={file}
        download
        className='px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition'
      >
        Download PDF
      </a>
    </section>
  )
}

export default Resume
