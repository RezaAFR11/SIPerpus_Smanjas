import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import {ArrowUpTrayIcon} from '@heroicons/react/24/outline'
import Footer from '../Components/Footer';
import Pancasila from '../assets/pancasila.jpg'
import Matematika from '../assets/matematika.png'

const Pengembaliansiswa = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState('kembalisiswa');
  
  const handleOpen = () => {
    setActiveMenuItem('kembalisiswa');
  };

  const handleLogin = ( ) => {
    setLoggedIn(true);
  };


  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex'>
        <Sidebar activeMenuItem={activeMenuItem} onOpen={handleOpen} />
        <div className='md:w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20 '>
          <div className='relative h-full'>
            <div className='bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <ArrowUpTrayIcon className='h-10 w-10' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl '>Data Pengembalian Buku</p>
            </div>
            
            <div className='relative flex mt-5  bg-opacity-20 rounded-2xl'>
               <div className='static flex flex-col md:mx-8 my-10 w-full text-xl space-y-10 font-noto drop-shadow-lg'>
                    <div className='flex w-full items-center content-center space-x-10  rounded-3xl border border-gray-300 shadow-xl overflow-hidden'>
                        <img
                        className='w-46 h-48'
                        src={Pancasila} 
                        alt="" />
                        
                        <ul className='text-base'>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>ISSBN</span>
                              <span>:</span>
                              <span className='ml-4'>20054</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Nama</span>
                              <span>:</span>
                              <span className='ml-4'>Mumtazah</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Judul Buku</span>
                              <span>:</span>
                              <span className='ml-4'>Pendidikan Pancasila Dan Kewarganegaraan</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Pengembalian</span>
                              <span>:</span>
                              <span className='ml-4'>11 November 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Peminjaman</span>
                              <span>:</span>
                              <span className='ml-4'>20 November 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Status</span>
                              <span>:</span>
                              <span className='ml-4'>Dikembalikan</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Kembali</span>
                              <span>:</span>
                              <span className='ml-4'>20 November 2023</span>
                          </li>
                        </ul>
                    </div>

                    <div className='flex w-full items-center content-center space-x-10 rounded-3xl border border-gray-300 shadow-xl overflow-hidden'>
                        <img
                        className='w-46 h-48'
                        src={Matematika} 
                        alt="" />
                        
                        <ul className='text-base'>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>ISSBN</span>
                              <span>:</span>
                              <span className='ml-4'>20053</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Nama</span>
                              <span>:</span>
                              <span className='ml-4'>Mumtazah</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Judul Buku</span>
                              <span>:</span>
                              <span className='ml-4'>Matematika</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Pengembalian</span>
                              <span>:</span>
                              <span className='ml-4'>11 November 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Peminjaman</span>
                              <span>:</span>
                              <span className='ml-4'>20 November 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Status</span>
                              <span>:</span>
                              <span className='ml-4'>Dikembalikan</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Kembali</span>
                              <span>:</span>
                              <span className='ml-4'>21 November</span>
                          </li>
                        </ul>
                    </div>

                </div> 
            </div>
            </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Pengembaliansiswa;