import {useRoutes} from 'react-router-dom';

import NotFound from '../not-found';
import Layout from '../layout';

import VideoListPage from '../../../modules/video-list';
import AddVideoPage from '../../../modules/add-video';
import WatchVideoPage from '../../../modules/watch-video';


const Routes = () => {

  return useRoutes([
    { path: '/', element: <Layout />, children: [
      { index: true, element: <VideoListPage /> },
      { path: 'add-video', element: <AddVideoPage /> },
      { path: 'watch/:videoId', element: <WatchVideoPage /> },
      { path: '*', element: <NotFound /> },
    ]},
  ]);
};

export default Routes;
