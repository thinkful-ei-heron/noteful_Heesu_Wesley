import React, { Component } from 'react';
import ApiContext from '../ApiContext';


class AddFolderForm extends Component {
  static ContextType = ApiContext;

  state= {
    name: null,
    touched: false,
  }
  

  handleAddFolderButton = (event) => {
    event.preventDefault();
    const nameVal=event.target.newFolder.value;
    console.log('Name: ', nameVal);
    console.log(this.context);
  
  };
 

validateName(input) { 
  const name = input.trim(); 
  if (name.length === 0) { 
    console.log('name is required');
    return 'Name is required'; 
  }
}

  render() {
    console.log(this.context);
    return (
      <form
        className='addFolderForm'
        onSubmit={(e) => this.handleAddFolderButton(e)}
        >
        <label>Name of new folder</label>
        <input
          type="text"
          name="newFolder"
        ></input>
        <button
          type="submit"
          name="submitButton">Submit</button>
      </form>
    );
  }
}

export default AddFolderForm;


// handleClickDelete = e => {
//   e.preventDefault()
//   const noteId = this.props.id
//
//   fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
//     method: 'DELETE',
//     headers: {
//       'content-type': 'application/json'
//     },
//   })
//     .then(res => {
//       if (!res.ok)
//         return res.json().then(e => Promise.reject(e))
//       return res.json()
//     })
//     .then(() => {
//       this.context.deleteNote(noteId)
//       // allow parent to perform extra behaviour
//       this.props.onDeleteNote(noteId)
//     })
//     .catch(error => {
//       console.error({ error })
//     })
// }
