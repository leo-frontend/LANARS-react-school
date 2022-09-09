import React from 'react';

import { ReactComponent as Plus} from '../../../assets/icons/plus.svg';

import Button from '../UI/button';
import cls from './fab.module.scss';
import {useNavigate} from 'react-router-dom';

const FAB = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/add-video');

  return (
    <div className={cls.position}>
      <Button className={cls.btn} onClick={handleClick}>
        <Plus />
        <p>Add Video</p>
      </Button>
    </div>
  );
};

export default FAB;
