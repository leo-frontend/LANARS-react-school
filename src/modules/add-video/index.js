import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../shared/components/UI/button';
import Input from '../../shared/components/UI/input';
import Modal from '../../shared/components/modal';
import cls from './add-video.module.scss';
import { debounce } from '../../shared/helpers/debounce';

// import {useStore} from '../../shared/hooks/useStore';

const AddVideoPage = () => {
  const [search, setSearch] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // const { isOpenAddVideo } = useStore();
  const handleClose = useCallback(() => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', {replace: true});
    }
  }, []);

  const handleSearch = useCallback(debounce(async () => {
    console.log('call');
  }, 200), []);


  return (
    <Modal
      isOpen={location.pathname.includes('add-video')}
      title="Add video to playlist"
      onClose={handleClose}
      renderButtons={
        <>
          <Button variant="text" onClick={handleClose}>Cancel</Button>
          <Button variant="contained">Add video</Button>
        </>
      }
    >
      <div className={cls.searchPanel}>
        <Input
          className={cls.search}
          placeholder={'Please, enter your request'}
          type="text"
          onChange={(event) => setSearch(event.currentTarget.value)}
          value={search}/>
        <Button variant="contained" onClock={handleSearch}>Search</Button>
      </div>
      <div className={cls.listVideos}>
        {/*<ListVideos />*/}
      </div>
    </Modal>

  );
};

export default AddVideoPage;

