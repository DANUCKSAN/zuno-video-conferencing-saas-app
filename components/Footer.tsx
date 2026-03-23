import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='text-center text-gray-400 py-4 px-6 bg-dark-1'>
      <p>&copy; {year} Zuno. All rights reserved.</p>
    </footer>
  )
}

export default Footer
