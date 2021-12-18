import React from 'react';
import { User } from '../types';
import { Card } from './Card';

interface Props {
  users: User[];
  setSelectedUser: (index: number) => void;
}

export const CardList = (props: Props) => {
  return (
    <>
      <div className='snap-x snap-mandatory flex items-center cursor-pointer overflow-x-auto mb-4 scroll-smooth scroll'>
        {props.users.map((user: User, index: number) => (
          <div
            className='snap-center border-solid border-yellow-200'
            onClick={() => {
              props.setSelectedUser(props.users.indexOf(user));
            }}
            key={index}
          >
            <Card
              id={user.nat}
              firstName={user.name.first}
              lastName={user.name.last}
              picture={user.picture.medium}
              price={user.dob.age}
            />
          </div>
        ))}
      </div>
    </>
  );
};
