import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdmins } from '../../features/admins/adminsThunk';

const Admins = () => {
  const dispatch = useDispatch();
  const { entities, loading, error } = useSelector((state) => state.admins);

  useEffect(() => {
    dispatch(fetchAdmins());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Protected Admins Page</h1>
      <ul>
        {entities.map((admin) => (
          <li key={admin.id}>{admin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const loadData = (store) => store.dispatch(fetchAdmins());

export default Admins;
