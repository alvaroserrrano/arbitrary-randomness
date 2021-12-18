import React, { useEffect } from 'react';
import { User } from '../types';

interface Props {
  users: User[];
  selectedUser: number; // offset in the list of users
}

export const MainCard = (props: Props) => {
  const [activeUser, setActiveUser] = React.useState(props.users[0]);
  useEffect(() => {
    setActiveUser(props.users[props.selectedUser]);
  }, [props.selectedUser, props.users, activeUser]);
  return (
    <>
      {activeUser && (
        <div className='max-h-screen/2'>
          <div className='flex items-center pb-5 border-b-2 border-solid border-yellow-100'>
            <div className='flex p-4 mx-5 overflow-hidden rounded-md max-h-56 max-w-lg'>
              <img
                className='object-contain w-full h-full rounded-md'
                src={activeUser.picture.large}
                alt=''
              />
            </div>
            <div className='flex flex-col mx-4'>
              <h1 className='px-4 text-4xl text-gray-200 font-bold'>
                {activeUser.name.first} {activeUser.name.last}
                <span className='text-gray-200 text-md'>
                  •# {activeUser.nat}
                </span>
              </h1>
              <div className='flex m-4 h-12'>
                <div className='mx-1 h-12 w-12 rounded-full overflow-hidden object-contain'>
                  <img
                    className='w-full h-full bg-transparent'
                    src={activeUser.picture.thumbnail}
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
                        {activeUser.email}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
