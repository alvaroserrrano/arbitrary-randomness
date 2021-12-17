import { useEffect, useState } from 'react';
import { User } from '../../types';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);
  return users;
}