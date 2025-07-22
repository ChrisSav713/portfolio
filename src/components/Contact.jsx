import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='p-8 text-center bg-slate-50'>
      <h2 className='text-3xl font-bold mb-6'>Contact</h2>

      <p className='mb-6'>
        Email:{' '}
        <a
          href='mailto:ChrisSav713@gmail.com'
          className='text-blue-600 hover:underline'
        >
          ChrisSav713@gmail.com
        </a>
      </p>

      <div className='flex justify-center gap-6'>
        {/* LinkedIn */}
        <a
          href='https://www.linkedin.com/in/christopher-savasta/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-blue-600 hover:underline'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 fill-current'
            viewBox='0 0 24 24'
          >
            <path d='M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.7v2.4h.1c.5-1 1.8-2.4 3.7-2.4 4 0 4.7 2.6 4.7 6v9.6h-4V15c0-2.2 0-5-3-5-3.1 0-3.5 2.4-3.5 4.9v9H8V8z' />
          </svg>
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href='https://github.com/ChrisSav713'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-blue-600 hover:underline'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 fill-current'
            viewBox='0 0 24 24'
          >
            <path d='M12 .5C5.7.5.6 5.6.6 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 3 1.4 3.7 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.2 2.7.1 3 .8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.5-5.3 5.8.4.3.7 1 .7 2v3c0 .3.2.6.8.5a11.5 11.5 0 007.9-10.9c0-6.4-5.1-11.5-11.4-11.5z' />
          </svg>
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact
