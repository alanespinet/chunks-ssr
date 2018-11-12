import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div className="app">
    <Header />
    <div className="page">
      { renderRoutes(route.routes) }
    </div>
    <Footer />
  </div>
);

export default App;
