import React from 'react';
import cls from './header.module.scss';
import logo from '../../../assets/images/logo.png';

const Header = () => {

  return (
    <header className={cls.header}>
      <div className={`${cls.container} ${cls.headerItems}`}>
        <div className={cls.logo}>
          <div className={cls.logoImg}>
            <img src={logo} alt="" />
          </div>
          <h1 className={cls.logoText}>LANARS react school</h1>
        </div>
        <input type="text" placeholder={'search'} />
      </div>
    </header>
  );
};

export default Header;
