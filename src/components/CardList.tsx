import React from 'react';
import { User } from '../types';
import { Card } from './Card';

interface Props {
  users: User[];
}

export const CardList = (props: Props) => {
  return (
    <>
      <div className='snap-x snap-mandatory flex items-center cursor-pointer overflow-x-hidden scroll-smooth scroll'>
        {props.users.map((user: User) => (
          <div className='snap-center border-solid border-yellow-200'>
            <Card
              id={user.nat}
              firstName={user.name.first}
              lastName={user.name.last}
              picture={user.picture.medium}
              price={user.dob.age}
              key={user.id.value}
            />
          </div>
        ))}
      </div>
    </>
  );
};
