import React from 'react';
import cls from './video-card.module.scss';
import mountain from '../../../assets/images/mountain.jpg';
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
  const { image, title, desc, mode = 'column' } = props;

  return (
    <Link to={`/watch/${12}`} className={cls.link}>
      <div className={cls.card} data-view-mode={mode}>

        <div className={cls.image}>
          <img src={mountain} alt=""/>
        </div>
        <div className={cls.text}>
          <h3 className={cls.title}>Title{title}</h3>
          <p className={cls.description}>Description{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
