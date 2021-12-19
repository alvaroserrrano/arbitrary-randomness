import React from 'react';
import { useRecoilState } from 'recoil';
import {
  filter as filterAtom,
  filteredUsers as filteredUsersAtom,
  selectedUser as selectedUserAtom,
} from './atoms';
import { RandomizeButton } from './components/buttons/RandomizeButton';
import { CardList } from './components/CardList';
import { MainCard } from './components/MainCard';
import Navbar from './components/Navbar';
import { useUsers } from './hooks/user/useUsers';

export interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

function App() {
  const { users } = useUsers(500);
  const [selectedUser, setSelectedUser] = useRecoilState(selectedUserAtom);
  const [filteredUsers, setFilteredUsers] = useRecoilState(filteredUsersAtom);
  return (
    <>
      <div className='bg-gradient-to-br from-gray-900 to-gray-700 p-5 h-screen w-screen'>
        <Navbar />
        {users && <MainCard users={users} selectedUser={selectedUser} />}
        <RandomizeButton />

        {}
        {filteredUsers && (
          <>
            <CardList users={filteredUsers} setSelectedUser={setSelectedUser} />
          </>
        )}
        {users && filteredUsers.length === 0 && (
          <>
            <CardList users={users} setSelectedUser={setSelectedUser} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
