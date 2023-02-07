import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import RerstrictedRoute from './RerstrictedRoute';
import { useUser } from 'hooks';
import { refreshUser } from 'redux/user/operations';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { ContactsPage } from 'features/contacts/Contacts';

const HomePage = lazy(() => import('../pages/Home/Home'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useUser();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <b>Refreshing contact...</b>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RerstrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RerstrictedRoute
                  redirectTo="/contacts"
                  component={<Login />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
