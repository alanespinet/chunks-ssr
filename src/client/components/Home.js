import React, { Component } from 'react';
import ChunksList from './ChunksList';
import { connect } from 'react-redux';

class Home extends Component {
  render(){
    return (
      <div className="home">
        <ChunksList />
      </div>
    );
  }
};

export default Home;
