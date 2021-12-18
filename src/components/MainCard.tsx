import React from 'react';

interface Props {}

export const MainCard = (props: Props) => {
  return (
    <>
      <div className='max-h-screen/2 mt-4 p-4'>
        <div className='flex items-center pb-5 border-b-2 border-solid border-yellow-100'>
          <div className='flex p-4 mx-5 overflow-hidden rounded-md max-h-56 max-w-lg'>
            <img
              className='object-contain w-full h-full'
              src={'https://elixir.app/img/lightnite.png'}
              alt=''
            />
          </div>
          <div className='flex flex-col mx-4'>
            <h1 className='px-4 text-lg text-gray-200 font-bold'>
              Alvaro Serrano
              <span className='text-gray-200 text-md'>•# 5</span>
            </h1>
            <div className='flex m-4 h-12'>
              <div className='mx-1 h-12 w-12 rounded-full overflow-hidden object-contain'>
                <img
                  className='w-full h-full bg-transparent'
                  src={'https://elixir.app/img/lightnite.png'}
                  alt=''
                />
              </div>
              <div className='flex flex-1 items-center'>
                <div className='flex flex-col p-4'>
                  <div className='text-yellow-400 hover:text-pink-400'>
                    <a href='https://elixir.app/'>
                      0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8
                    </a>
                  </div>
                  <span className='flex mt-2 text-cyan-400 hover:text-pink-400'>
                    <a href='https://twitter.com/elixir_launcher'>
                      @elixir_launcher
                    </a>
                  </span>
                </div>
                {/* <div className='flex flex-col'>
                  <div className='bg-transparent border-solid border-yellow-200 ml-1 h-11 w-11 rounded-full mx-2'>
                    <img className='w-full h-full' src={elixirLogo} alt='' />
                  </div>
                  <div className='bg-transparent border-solid border-yellow-200 ml-1 h-11 w-11 rounded-full mx-2'>
                    <img className='w-full h-full' src={twitterLogo} alt='' />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
