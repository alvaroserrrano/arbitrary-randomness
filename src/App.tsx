import React, { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { CardList } from './components/CardList';
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
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

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
