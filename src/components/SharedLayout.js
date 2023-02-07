import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import  DrawerAppBar  from './AppBar/DrawerAppBar';
import { Layout } from './Layout/Layout';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Layout>
    <DrawerAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Layout>
  );
};
