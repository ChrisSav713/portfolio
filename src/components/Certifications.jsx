import React from 'react'

const Certifications = () => {
  return (
    <section
      id='certifications'
      className='min-h-screen p-8 bg-white text-center'
    >
      <h2 className='text-3xl font-bold mb-6'>Certifications</h2>

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

        {/* Udemy Certificates */}
        <div className='bg-white p-6 rounded-xl shadow border border-slate-200'>
          <h3 className='text-xl font-bold text-slate-800 mb-4'>
            Udemy Certificates
          </h3>
          <ul className='space-y-4'>
            <li>
              <a
                href='https://www.udemy.com/certificate/123456789/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 font-semibold hover:underline'
              >
                Build Dynamic Web Apps with React & Firebase
              </a>
              <p className='text-slate-700'>
                Learn React from the ground up to make dynamic websites
                (includes Context, Hooks, Reducers, Routing, Auth, Databases).
              </p>
            </li>
            <li>
              <a
                href='https://www.udemy.com/certificate/987654321/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 font-semibold hover:underline'
              >
                Automate the Boring Stuff with Python Programming
              </a>
              <p className='text-slate-700'>
                A practical course for office workers, academics, and
                administrators to boost productivity.
              </p>
            </li>
            <li>
              <a
                href='https://www.udemy.com/certificate/987654321/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 font-semibold hover:underline'
              >
                Build Responsive Real-World Websites with HTML and CSS
              </a>
              <p className='text-slate-700'>
                Learn modern HTML5, CSS3, and web design with Flexbox and Grid
                by building a portfolio site.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Certifications
