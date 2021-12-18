import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { users as usersAtom } from '../../atoms';
export function useUsers(amount: number) {
  const [users, setUsers] = useRecoilState(usersAtom);
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
  }, [amount, setUsers]);
  return { users, loading, error, setLoading, setError, setUsers };
}
