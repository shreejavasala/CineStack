import React from 'react'
import CineLogo from '../assets/CineLogo.jpg'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-3 bg-black border-none'>
      <img className='w-[50px] rounded-3xl' src = {CineLogo}></img>
      <Link className='text-seal-brown-700 text-xl font-bold'to = '/'>Movies</Link>
      <Link className='text-seal-brown-700 text-xl font-bold'to='/Watchlist'>Watchlist</Link>
    </div>
  )
}

export default NavBar