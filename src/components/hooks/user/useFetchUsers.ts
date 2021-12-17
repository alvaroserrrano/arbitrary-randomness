import { useEffect, useState } from 'react';
import { User } from '../../../types';
export function useFetchUsers(amount: number) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?results=${amount}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [amount]);
  return { users, loading, error };
}
