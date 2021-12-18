import React from 'react';
import { useRecoilState } from 'recoil';
import {
  filter as filterAtom,
  filteredUsers as filteredUsersAtom,
  selectedUser as selectedUserAtom,
} from './atoms';
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
  const { users, loading, error, setUsers, setLoading, setError } =
    useUsers(500);
  const [selectedUser, setSelectedUser] = useRecoilState(selectedUserAtom);
  const [filteredUsers, setFilteredUsers] = useRecoilState(filteredUsersAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);
  return (
    <>
      <div className='bg-gradient-to-br from-gray-900 to-gray-700 p-5 h-screen w-screen'>
        <Navbar />
        {users && <MainCard users={users} selectedUser={selectedUser} />}
        <div className='flex items-center justify-center mt-4'>
          <button
            onClick={() => {
              fetch(`https://randomuser.me/api/?results=50`)
                .then((res) => res.json())
                .then((data) => {
                  setUsers(data.results);
                  setLoading(false);
                })
                .catch(() => {
                  setError(true);
                  setLoading(false);
                });
            }}
            className='flex justify-center items-center bg-gradient-to-r from-pink-500 to-yellow-700 rounded-md text-center text-gray-200 font-bold text-xl p-4 outline-none border-none hover:bg-pink-600 shadow-pink-500/75'
          >
            {loading ? 'Loading...' : 'Randomize Users'}
          </button>
        </div>
        {error && <p className='text-red-500'>{error}</p>}
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
