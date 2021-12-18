import React, { useEffect, useState } from 'react';
import { useUsers } from '../../hooks/user/useUsers';
interface Props {}

export const RandomizeButton = (props: Props) => {
  const { setUsers, setError, setLoading, loading } = useUsers(500);
  const [numberOfUsers, setNumberOfUsers] = useState(50);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${numberOfUsers}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [numberOfUsers, setError, setLoading, setUsers]);
  return (
    <div>
      <div className='flex items-center justify-center mt-4'>
        <button
          onClick={() => {
            fetch(`https://randomuser.me/api/?results=${numberOfUsers}`)
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
          className='flex mx-4 justify-center items-center bg-gradient-to-r from-pink-500 to-yellow-700 rounded-md text-center text-gray-200 font-bold text-xl p-4 outline-none border-none hover:bg-pink-600 shadow-pink-500/75'
        >
          {loading ? 'Loading...' : 'Get Users'}
        </button>
        <div className='bg-transparent rounded-md text-center text-white font-bold text-xl p-4 outline-none border-none hover:bg-gray-700 '>
          <select
            name=''
            placeholder='Enter number of users'
            onChange={(e) => {
              setNumberOfUsers(Number(e.target.value));
            }}
            className='py-4 bg-transparent outline-none border-none w-full min-w-fit'
            id=''
          >
            <option value='50'>50</option>
            <option value='100'>100</option>
            <option value='200'>200</option>
            <option value='500'>500</option>
            <option value='1000'>1000</option>
          </select>
        </div>
      </div>
    </div>
  );
};
