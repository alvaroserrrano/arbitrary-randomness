import React, { useState } from 'react';
import { CardList } from './components/CardList';
import { useFetchUsers } from './components/hooks/user/useFetchUsers';
import Navbar from './components/Navbar';

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
  const { users, error, loading, setUsers, setLoading, setError } =
    useFetchUsers(50);
  const [usersAmount, setUsersAmount] = useState(50);

  return (
    <div className='bg-gradient-to-br from-gray-900 to-gray-700 p-5 h-screen w-screen'>
      <Navbar />
      <div className='flex items-center justify-center m-4'>
        <button
          onClick={() => {
            fetch(`https://randomuser.me/api/?results=${usersAmount}`)
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
          className='flex justify-center items-center bg-gradient-to-r from-pink-500 to-yellow-700 rounded-md text-center text-gray-200 font-bold text-xl ml-4 p-4 outline-none border-none hover:bg-pink-600 shadow-pink-500/75'
        >
          {loading ? 'Loading...' : 'Randomize Users'}
        </button>
      </div>
      {error && <p className='text-red-500'>{error}</p>}
      {users && <CardList users={users} />}

      {/* <CardList users={users} /> */}

      {/* // <Card 
         id={0}
         firstName='Alvaro'
         lastName='Test'
         picture='https://randomuser.me/api/portraits/med/men/75.jpg'
         price={0}
       />
      */}
    </div>
  );
}

export default App;
