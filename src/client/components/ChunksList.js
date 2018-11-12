import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chunk from './Chunk';
import { fetchChunks } from '../actions';

class ChunksList extends Component {
  componentDidMount(){
    this.props.fetchChunks();
  }

  render(){
    return (
      <div className="chunks-list">
        <div className="container">
          { this.props.chunks.map( chunk => {
            return (
              <Chunk
                key={chunk.title}
                title={chunk.title}
                description={chunk.description}
                language={chunk.language}
                keywords={chunk.keywords.join(', ')}
                code={chunk.code}
                id={chunk._id}
              />
            );
          }) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chunks: state.chunks
});

export const chunksLoadData = (store) => {
  return store.dispatch( fetchChunks() );
};

export default connect(mapStateToProps, { fetchChunks })(ChunksList);
