import React, { Component } from 'react';
import Header from './Header';
import ChunksList from './ChunksList';

class Home extends Component {
  render(){
    return (
      <div className="home">
        <Header />
        <ChunksList />
      </div>
    );
  }
};

export default Home;
