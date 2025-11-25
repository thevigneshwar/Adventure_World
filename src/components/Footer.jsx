import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <footer className="bg-black text-white py-8 md:px-16 lg:px-24">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
      <h3 className="text-x1 font-semibold">ADVENTUREWORLD</h3>
      <p className='mt-4'>
        Lets travel and adventure go for freedom and explore the world with out adventure acceseories.this 
        is right for your adventure.
      </p>
      </div>
      <div className='flex flex-col md:items-center'>
        <h4 className='text-lg font-semibold'>Quick links </h4>
        <ul>
          <li>
            <Link to='/' className='hover:underline'>Home</Link>
          </li>
          <li>
            <Link to='/shop' className='hover:underline'>Shop</Link>
          </li>
          <li>
            <Link to='/contact' className='hover:underline'>Contact</Link>
          </li>
          <li>
            <Link to='/about' className='hover:underline'>About</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className='text-lg font-semibold' >follow us</h4>
        <div className='flex space-x-4 mt-4'>
          <a href=""className='hover:text-gray-400'><FaFacebook /></a>
          <a href="" className='hover:text-gray-400'><FaTwitter /></a>
          <a href="" className='hover:text-gray-400' ><FaGithub /></a>
          <a href="" className='hover:text-gray-400'><FaLinkedin/></a>
          
        </div>
        <form className=' bg-red-600 flex items-center justify-center mt-8' >
          <input type="email" placeholder='Enter Email' 
          className='w-full p-2 rounded-lg bg-gray border-gray-600'/>
          <button className='bg-white text-black px-4 rounded-lg border border-black'>subscribe</button>
        </form>
      </div>
      
    </div>
  </footer>
  )
}

export default Footer