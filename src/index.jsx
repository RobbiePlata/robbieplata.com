import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Head } from "@/components";
import {BrowserRouter as Router} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { StateProvider } from '@/state';
import '@/assets/scss/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
    <StateProvider> 
      <Router>
        <Head/>
        <App />
      </Router>
    </StateProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
