import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../../features/users/usersThunk';
import UsersList from '../components/UsersList';

const Users = () => {
  const dispatch = useDispatch();
  const { entities, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <Helmet>
        <title>{`${entities.length} Users`}</title>
        <meta property="og:title" content="Users" />
      </Helmet>
      <h1>Users Page</h1>
      <UsersList users={entities} />
    </div>
  );
};

export const loadData = (store) => store.dispatch(fetchUsers());

export default Users;
