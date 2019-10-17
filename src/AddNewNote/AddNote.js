import React, { Component } from 'react';
import ApiContext from '../ApiContext';
//import { getNotesForFolder } from '../notes-helpers'


class AddNote extends Component {
  static contextType = ApiContext;

  state= {
    name: null,
    touched: false,
  }
  

handleAddNoteButton = (event) => {
  event.preventDefault();
  const noteName=event.target.newNote.value;
  const noteContent=event.target.noteContent.value
  console.log(noteName, noteContent);
   
};
 
validateName(input) { 
  const name = input.trim(); 
  if (name.length === 0) { 
    console.log('name is required');
    return 'Name is required'; 
  }
}



  render() {
    // const { folderId } = this.props.match.params
    // const { notes=[] } = this.context
    // const notesForFolder = getNotesForFolder(notes, folderId)

    console.log(this.props)
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
        
        {/* <select> This needs to be able to pull the available folders. 
          
          <option>Option 01</option>
        </select> */}

        <button
          type="submit"
          name="submitButton">Submit</button>
      </form>
    );
  }
}

export default AddNote;
