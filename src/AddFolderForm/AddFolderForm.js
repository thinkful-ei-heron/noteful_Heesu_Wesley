import React, { Component } from 'react';

// This is working to remove the white space.

class AddFolderForm extends Component {
  state= {
    name: null,
    touched: false,
  }

  handleAddFolderButton = (event) => {
     event.preventDefault();
    //console.log(event.target.newFolder.value);
     const nameVal=event.target.newFolder.value;
     console.log('Name: ', nameVal);
  };

// use .trim and then evaluate the length. if >0 still good. 
validateName() { 
  const name = this.state.name.trim(); 
  if (name.length === 0) { 
    return 'Name is required'; 
  }
}

  render() {
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
