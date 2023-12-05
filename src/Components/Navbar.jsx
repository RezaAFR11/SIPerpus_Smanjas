import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({isLoggedIn, activeMenuItem}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMasukClicked] = useState(false);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`flex flex-col lg:flex-row justify-between bg-green p-4 text-slate-50 font-medium items-center text-white `}>
      <div className="lg:flex-shrink-0 lg:text-center">
        <p className='text-4xl font-quatro pl-4 drop-shadow-md'>SMAN 1 JASINGA</p>
      </div>
      <div className='lg:flex lg:text-xl drop-shadow-md lg:mt-0  '>
        <Link to="/" className={`flex items-center justify-center h-10 w-28 rounded-full hover:bg-green2 active:text-black ${activeMenuItem === 'beranda' ? 'bg-green2' : '' }`}>Beranda</Link>
        <a href="#profil" className="flex items-center justify-center h-10 w-28 rounded-full hover:bg-green2 active:text-black">Profil</a>
        <a href="#tata" className="flex items-center justify-center h-10 w-28 hover:bg-green2 rounded-full active:text-black">Tata Tertib</a>
        <a href=""className='flex items-center justify-center h-10 w-28 hover:bg-green2 rounded-full active:text-black' >Buku</a>
      </div>
      <div className={`flex items-center justify-center lg:justify-end relative mt-4 lg:mt-0 ${isMasukClicked ? 'bg-green2' : 'hover:bg-green2'} shadow-md rounded-lg mr-3`}>
        <div className='text-2xl w-32 rounded-md relative cursor-pointer font-poppins bg-green-200 flex items-center justify-center'>
          <div onClick={toggleDropdown} className="flex items-center">
            <p>{isLoggedIn ? 'Keluar' : 'Masuk'}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          {isDropdownOpen && (
            <div className='absolute top-full right-0 left-0 mt-3 font-semibold'>
              <Link to="/admin" className='block text-center py-2 text-xl   duration-300 active:text-black rounded-2xl bg-putih bg-opacity-40'>Admin</Link>
              <Link to="/siswa" className='block mt-2 text-center py-2 text-xl active:text-black rounded-2xl bg-putih bg-opacity-40'>Siswa</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
