import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChunk } from '../actions';

class Add extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: '',
      language: '',
      keywords: [],
      code: ''
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onLanguageChange = this.onLanguageChange.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
    this.onAddChunkClick = this.onAddChunkClick.bind(this);
    this.onAddKeywordClick = this.onAddKeywordClick.bind(this);
  }

  onTitleChange(e) {
    const val = e.target.value;
    this.setState({ title: val });
  }

  onDescriptionChange(e) {
    const val = e.target.value;
    this.setState({ description: val });
  }

  onLanguageChange(e) {
    const val = e.target.value;
    this.setState({ language: val });
  }

  onCodeChange(e) {
    const val = e.target.value;
    this.setState({ code: val });
  }

  onAddChunkClick(e) {
    e.preventDefault();
    const valid = this.state.title.trim().length !== 0 &&
                  this.state.description.trim().length !== 0 &&
                  this.state.language.trim().length !== 0 &&
                  this.state.code.trim().length !== 0;

    if( valid ){
      this.props.addChunk(this.state);
      this.props.history.push('/');
    } else {
      alert('Error: Title, Description, Language and Code are all Required.');
    }
  }

  onAddKeywordClick(e) {
    e.preventDefault();
    const newKey = document.getElementById('chunk-keyword').value;
    this.setState( (prevState) => {
      return ({
        keywords: prevState.keywords.concat(newKey)
      });
    });
    document.getElementById('chunk-keyword').value = '';
    document.getElementById('chunk-keyword').focus();
  }

  render(){
    return (
      <div className="add">
        <div className="container">
          <h2>Add a new Chunk</h2>

          <form className="add__form">
            <div className="add__form__control-group">
              <label htmlFor="chunk-title">Title:</label>
              <input type="text" id="chunk-title" value={this.state.title} onChange={this.onTitleChange} />
            </div>

            <div className="add__form__control-group">
              <label htmlFor="chunk-description">Description:</label>
              <textarea name="chunk-description" id="chunk-description" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
            </div>

            <div className="add__form__control-group">
              <label htmlFor="chunk-language">Language:</label>
              <input type="text" id="chunk-language" value={this.state.language} onChange={this.onLanguageChange} />
            </div>

            <div className="add__form__control-group">
              <label htmlFor="chunk-keyword">Keywords:</label>
              <input type="text" id="chunk-keyword" />
              <button type="button" id="add-keyword" onClick={this.onAddKeywordClick}>Add</button>
            </div>

            <div className="add__form__control-group">
              <label htmlFor="chunk-code">Code:</label>
              <textarea name="chunk-code" id="chunk-code" value={this.state.code} onChange={this.onCodeChange}></textarea>
            </div>

            <button type="button" id="add-chunk" onClick={this.onAddChunkClick}>Add Chunk</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addChunk })(Add);
