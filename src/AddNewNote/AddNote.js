import React, { Component } from 'react';
import ApiContext from '../ApiContext';
//import { getNotesForFolder } from '../notes-helpers'


class AddNote extends Component {
  static contextType = ApiContext;

  state= {
    name: null,
    touched: false,
    error: false,
  }
  

  handleAddNoteButton = (event) => {
    event.preventDefault();
    const noteName=event.target.newNote.value;
    const noteContent=event.target.noteContent.value
    const folderId = event.target.selectFolder.value
    this.validateName(noteName);
    console.log(this.context);
    this.context.addNoteApi(noteName,noteContent,folderId);
  };

  validateName(input) { 
    const name = input.trim(); 
    if (name.length === 0) { 
      this.setState({
        error: true
      })
      console.log('the form value is 0');
    }
  }

  renderError =() => {
    if(this.state.error === true){
      return `A note has no name`
    }
   }


  render() {
    return (
      <form
        className='AddNoteForm'
        onSubmit={(e) => this.handleAddNoteButton(e)}
        >
        <label>Name of new Note</label>
        <input
          type="text"
          name="newNote"
          placeholder="noteName"
        ></input>
        <input
          type="text"
          name="noteContent"
          placeholder="Whatever you want"
        ></input>
        
        <select
          name="selectFolder"
          required
        >{this.context.folders.map(folder =>{
          return(
            <option
              name={folder.name}
              key={Math.random()}
              id={folder.id}
              value={folder.id}
            >{folder.name}</option> 
          )
        })} 
        </select>
        {this.renderError()}
        <button
          type="submit"
          name="submitButton">Submit</button>
      </form>
    );
  }
}

export default AddNote;

