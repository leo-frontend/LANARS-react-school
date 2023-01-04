import { ThemeProvider } from '@emotion/react';
import Header from 'modules/components/Header';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks';
import { getAlbum } from 'shared/store/reducers/albumReducerSlice';
import { getPhoto } from 'shared/store/reducers/photoReducerSlice';
import { theme } from 'styles/theme';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhoto([]));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAlbum([]));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
