import clsx from 'clsx';
import { Navigation } from '@/components';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { useStateValue } from '@/state';
import { ThemeProvider } from "styled-components";
import { THEMES, GlobalStyles } from "@/utils/constants";

const Layout = ({ children }) => {
  const {
    state: { isNavOpened, theme }
  } = useStateValue();
  
  const { lightTheme, darkTheme } = THEMES;
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className={styles.layout}>
        <Navigation />
        <div className={clsx(styles.main_wrapper, !isNavOpened && styles.main_wrapper_collapse)}>
          <div className={clsx(styles.main)}>
            <Outlet/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
