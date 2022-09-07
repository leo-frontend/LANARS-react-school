import React, { useMemo, useState } from 'react';
import CtxStore from '../shared/contexts/store';

const StoreContext = ({ children }) => {
  const [isOpen, setOpenModal] = useState(true);

  const initContext = useMemo(() => ({
    isOpenAddVideo: isOpen,
    addVideoSetModal: setOpenModal,
  }), []);

  return (
    <CtxStore.Provider value={initContext}>
      {children}
    </CtxStore.Provider>
  );
};

export default StoreContext;
