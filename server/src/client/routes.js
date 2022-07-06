import React from 'react';
import { Route } from 'react-router-dom';
import App, { loadData as fetchCurrentUser } from './App';
import Home from './pages/HomePage';
import Users, { loadData as fetchUsers } from './pages/UsersPage';
import NotFound from './pages/NotFoundPage';

const routes = [
  {
    key: 'app',
    path: '/',
    element: <App />,
    loadData: fetchCurrentUser,
    children: [
      {
        key: 'home',
        path: '/',
        element: <Home />,
      },
      {
        key: 'users',
        path: '/users',
        element: <Users />,
        loadData: fetchUsers,
      },
      { key: 'not-found', path: '*', element: <NotFound /> },
    ],
  },
];

export const renderRoutes = (routes) =>
  routes.map((route) => {
    let childrenRoutes = [];

    if (route.children) {
      childrenRoutes = renderRoutes(route.children);
    }

    const params = { ...route, children: childrenRoutes };

    return <Route {...params} />;
  });

export default routes;
