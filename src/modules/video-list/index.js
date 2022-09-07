import React from 'react';
import VideoList from '../../shared/components/video-list';
import { Outlet } from 'react-router-dom';

const VideoListPage = () => {
  return (
    <>
      <VideoList />
      <Outlet />
    </>
  );
};

export default VideoListPage;
