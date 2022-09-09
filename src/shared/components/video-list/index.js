import React, { useEffect } from 'react';
import VideoCard from '../video-card';

import cls from './video-list.module.scss';
/* import {fetcher} from '../../helpers/fetch';
import { baseURL, apiKey } from '../../constants/api';*/

const VideoList = () => {


  useEffect(() => {
    // fetcher(`${baseURL}/search?key=${apiKey}&q=${'cs go'}&type=video&part=${'snippet'}`).then(res => console.log(res));
  }, []);


  return (
    <div className={cls.grid}>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default VideoList;
