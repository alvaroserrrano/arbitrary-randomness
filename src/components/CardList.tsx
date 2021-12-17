import React from 'react';
import { User } from '../types';
import { Card } from './Card';

interface Props {
  users: User[];
}

export const CardList = (props: Props) => {
  return (
    <div className='snap-x flex flex-no-wrap items-center m-4 cursor-pointer overflow-x-scroll scroll-smooth mt-4 pb-4 border-b-2 border-solid border-white scrollbar-hide'>
      {props.users.map((user: User) => (
        <div className='snap-center'>
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
  );
};
