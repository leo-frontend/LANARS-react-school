import React from 'react';
import cls from './header.module.scss';
import logo from '../../../assets/images/logo.png';
import {Link} from 'react-router-dom';

const Header = () => {

  return (
    <header className={cls.header}>
      <div className={`${cls.container} ${cls.headerItems}`}>
        <Link to="/" className={cls.link}>
          <div className={cls.logo}>
            <div className={cls.logoImg}>
              <img src={logo} alt="" />
            </div>
            <h1 className={cls.logoText}>LANARS react school</h1>
          </div>
        </Link>
        <input type="text" placeholder={'search'} />
      </div>
    </header>
  );
};

export default Header;
