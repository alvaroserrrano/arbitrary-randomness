import { useWeb3React } from '@web3-react/core';
import React, { useState } from 'react';
import { CardList } from './components/CardList';
import Navbar from './components/Navbar';
import { useUsers } from './hooks/users/useUsers';
import { injected } from './wallet/Connector';

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
  const users = useUsers();
  const [minting, setMinting] = useState(false);
  const { active, account, library, activate, deactivate } = useWeb3React();
  return (
    <div className='bg-gradient-to-br from-gray-900 to-gray-700 p-5 h-screen w-screen'>
      <Navbar />
      <CardList users={users} />
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
