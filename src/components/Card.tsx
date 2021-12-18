import React from 'react';
import weth from '../assets/weth.png';

interface Props {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  price: number;
}

export const Card = (props: Props) => {
  return (
    <>
      <div className='h-96 w-72 bg-slate-700 rounded-lg overflow-hidden m-7 hover:bg-slate-800 '>
        <img className='w-full' src={props.picture} alt={props.firstName} />
        <div className='pt-4 pl-4'>
          <p className='text-lg '>
            <span className='text-gray-200 font-bold'>
              {props.firstName} {props.lastName}
            </span>{' '}
            <span className='text-gray-200'>•# {props.id}</span>
          </p>
        </div>
        <div className='flex items-center font-gray-200 object-contain'>
          <img className='h-4 m-4' src={weth} alt='Weth' />
          <div className='ml-1 text-gray-200'>{props.price}</div>
        </div>
      </div>
    </>
  );
};
