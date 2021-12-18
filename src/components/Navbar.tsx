import React from 'react';
import { AiOutlineSwap } from 'react-icons/ai';
import { GiFarmer, GiLiquidSoap, GiTowerBridge } from 'react-icons/gi';
import { useRecoilState } from 'recoil';
import logo from '../assets/logo.png';
import searchIcon from '../assets/search.png';
import theme from '../assets/theme.png';
import {
  filter as filterAtom,
  filteredUsers as filteredUsersAtom,
  users as usersAtom,
} from '../atoms';
interface Props {}

const Navbar = (props: Props) => {
  const [users, setUsers] = useRecoilState(usersAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);
  const [filteredUsers, setFilteredUsers] = useRecoilState(filteredUsersAtom);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.first
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          user.name.last.toLowerCase().includes(e.target.value.toLowerCase()) ||
          user.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
          user.nat.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
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
            className='bg-transparent rounded border-none w-full outline-none text-gray-100'
            type='text'
            placeholder='Search user by name, email, nationality...'
            value={filter}
            onChange={onChange}
          />
        </div>
        <div className='flex mr-2 group'>
          <button className='bg-transparent rounded hover:bg-gray-800'>
            <p className='rounded-md flex text-pink-500 font-bold items-center m-4 p-1 hover:text-white'>
              Trade{' '}
              <span className='m-2'>
                <AiOutlineSwap />
              </span>
            </p>
          </button>
          <button className='bg-transparent rounded hover:bg-gray-800'>
            <p className='rounded-md flex text-yellow-300 font-bold items-center m-4 p-1 hover:text-white'>
              Liquidity{' '}
              <span className='m-2'>
                <GiLiquidSoap />
              </span>
            </p>
          </button>
          <button className='bg-transparent rounded hover:bg-gray-800'>
            <p className='rounded-md flex text-pink-500 font-bold items-center m-4 p-1 hover:text-white'>
              Farm{' '}
              <span className='m-2'>
                <GiFarmer />
              </span>
            </p>
          </button>
          <button className='bg-transparent rounded hover:bg-gray-800'>
            <p className='rounded-md flex text-yellow-300 font-bold items-center m-4 p-1 hover:text-white'>
              Bridge{' '}
              <span className='m-2'>
                <GiTowerBridge />
              </span>
            </p>
          </button>
        </div>
        <div className='flex rounded-full justify-center items-center bg-gradient-to-br from-gray-900 to-gray-700 object-contain m-4 p-4'>
          <div className='h-5 w-5'>
            <img src={theme} alt='Theme' />
          </div>
        </div>
        <button className='flex items-center bg-gradient-to-r from-pink-500 to-pink-800 rounded-md m-4 p-2 outline-none border-none hover:bg-pink-600 shadow-pink-500/75'>
          <p className='text-gray-200 text-center font-bold text-xl'>
            Connect Wallet
          </p>
        </button>
      </div>
    </>
  );
};

export default Navbar;
