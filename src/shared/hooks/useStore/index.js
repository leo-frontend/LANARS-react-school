import { useContext } from 'react';
import ctxStore from '../../contexts/store';

export const useStore = () => useContext(ctxStore);
