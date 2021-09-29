import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { darkTheme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import AuthRoutes from 'routes/AuthRoutes';
import MainRoutes from 'routes/MainRoutes';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { token } = useSelector(state => state.user.data);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <ToastContainer 
        autoClose={2500}
        position="top-right"
        closeButton={false}
      />
      {token ? <MainRoutes /> : <AuthRoutes />}
    </ThemeProvider>
  );
}

export default App;