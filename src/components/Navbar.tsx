import React from 'react';
import { AiOutlineSwap } from 'react-icons/ai';
import { GiFarmer, GiLiquidSoap, GiTowerBridge } from 'react-icons/gi';
import logo from '../assets/logo.png';
import searchIcon from '../assets/search.png';
import theme from '../assets/theme.png';
interface Props {}

const Navbar = (props: Props) => {
  return (
    <>
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
        <div className='flex mr-2'>
          <p className='flex text-pink-500 font-bold items-center m-4'>
            Trade{' '}
            <span className='m-2'>
              <AiOutlineSwap />
            </span>
          </p>
          <p className='flex text-yellow-300 font-bold items-center m-4'>
            Liquidity{' '}
            <span className='m-2'>
              <GiLiquidSoap />
            </span>
          </p>
          <p className='flex text-pink-500 font-bold items-center m-4'>
            Farm{' '}
            <span className='m-2'>
              <GiFarmer />
            </span>
          </p>
          <p className='flex text-yellow-300 font-bold items-center m-4'>
            Bridge{' '}
            <span className='m-2'>
              <GiTowerBridge />
            </span>
          </p>
        </div>
        <div className='flex rounded-full justify-center items-center bg-gray-800 object-contain m-4 p-4'>
          <div className='h-5 w-5'>
            <img src={theme} alt='Theme' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
