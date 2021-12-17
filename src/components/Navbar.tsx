import React from 'react';
import logo from '../assets/logo.png';
import searchIcon from '../assets/search.png';
interface Props {}

const Navbar = (props: Props) => {
  return (
    <div>
      <div className='flex items-center space-between text-white'>
        <div className='m-10'>
          <img src={logo} className='w-20' alt='Site Logo' />
        </div>
        <div className='bg-gray-800 flex flex-1 justify-between h-12 items-center mx-5 rounded-lg'>
          <div className='m-4'>
            <img src={searchIcon} alt='Search Icon' />
          </div>
          <input
            className='bg-transparent border-none w-full outline-none text-gray-100'
            type='text'
            placeholder='Search user'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
