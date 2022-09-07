import React from 'react';

import AddVideoBtn from '../../shared/components/add-video-btn';

import {useStore} from '../../shared/hooks/useStore';

const AddVideoPage = () => {
  const { isOpenAddVideo } = useStore();

  console.log(isOpenAddVideo);

  return (
    <>
      <AddVideoBtn />
    </>

  );
};

export default AddVideoPage;
