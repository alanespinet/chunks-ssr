import React, { Component } from 'react';

class Chunk extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="chunk">
        <div className="chunk__title">
          <h2>{ this.props.title }</h2>
        </div>

        <div className="chunk__code">
          <pre>
            { this.props.code }
          </pre>
        </div>

        <div className="chunk__data">
          <p><span>Description: </span>{ this.props.description }</p>
          <p><span>Language: </span>{ this.props.language }</p>
          <p><span>Keywords: </span>{ this.props.keywords }</p>
        </div>

        <div className="chunk__actions">
          <button className="chunk__actions__delete">Remove</button>
          <button className="chunk__actions__view">View</button>
        </div>
      </div>
    );
  }
}

export default Chunk;
