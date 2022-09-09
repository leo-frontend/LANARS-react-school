import React from 'react';
import { Outlet } from 'react-router-dom';

import FAB from '../fab';
import Header from '../header';

import cls from './layout.module.scss';

const Layout = () => {

  return (
    <>
      <Header />
      <main className={cls.container}>
        <Outlet />
        <FAB />
      </main>
    </>
  );
};

export default Layout;
