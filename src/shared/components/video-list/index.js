import React, { useEffect } from 'react';
import {fetcher} from '../../helpers/fetch';
import { baseURL, apiKey } from '../../constants/api';

const VideoList = () => {
  const title = 'LANARS react school';

  useEffect(() => {
    fetcher(`${baseURL}/search?key=${apiKey}&q=${'cs go'}&type=video&part=${'snippet'}`).then(res => console.log(res));
  }, []);


  return (
    <div className="App">
      VideoList
      {title}
    </div>
  );
};

export default VideoList;
