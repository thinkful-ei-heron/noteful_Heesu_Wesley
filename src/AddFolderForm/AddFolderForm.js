import React, { Component } from 'react';


// This is working to remove the white space. 
const testString = "       ";
console.log(testString.length);
const filteredString = testString.trim();
console.log(filteredString.length);



class AddFolderForm extends Component {

  // handleAddFolderButton = (event) => {
  //   event.preventDefault();
  // };
  constructor(props) {
    super(props);
    this.state={
     name: '' 
    };

    this.nameInput = React.createRef();
  }

  setFormState = (event) => {
    event.preventDefault();
    const name = this.nameInput.current.value;
    console.log('Name: ', name);
    this.setState({
      name: name
    });
    console.log(this.state)
  };


// use .trim and then evaluate the length. if >0 still good. 







  render() {
    return (
      <form
        className='addFolderForm'
        onSubmit={(e) => this.setFormState(e)}
        >
        <label>Name of new folder</label>
        <input
          type="text"
          name="newFolder"
          ref={this.nameInput}
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
