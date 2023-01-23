import { ThemeProvider } from '@emotion/react';
import Header from 'modules/components/Header';
import { SideMenu } from 'modules/components/SideMenu';
import { theme } from 'styles/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SideMenu />
    </ThemeProvider>
  );
};

export default App;
