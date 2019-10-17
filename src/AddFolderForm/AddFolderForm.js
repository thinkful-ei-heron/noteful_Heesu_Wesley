import React, { Component } from 'react';

class AddFolderForm extends Component {
  render() {

    const handleAddFolderButton = (event) => {
      event.preventDefault();
      console.log('i ran');
      const name = this.newFolder.current.value;
      console.log('Name: ', name);
    };

    return (
      <form>
        <label>Name of new folder</label>
        <input
          type="text"
          name="newFolder"

          //Need to add a value tag that updates the this.state.
          //On submit it should call an update the API function
        ></input>
        <button
          type="submit"
          name="submitButton"
          onChange={(e) => this.handleAddFolderButton(e.target.value)}
          >Submit</button>
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
