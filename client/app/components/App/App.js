import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Styles from './App.scss';

const App = ({ children }) => (
  <>
    <Header />

    <main className="header">
      {children}
    </main>

    <Footer />
  </>
);

export default App;
