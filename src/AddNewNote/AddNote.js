import React, { Component } from 'react';
import ApiContext from '../ApiContext';


class AddNote extends Component {
  static ContextType = ApiContext;

  state= {
    name: null,
    touched: false,
  }
  

// handleAddFolderButton = (event) => {
//   event.preventDefault();
//   const nameVal=event.target.newFolder.value;
//   console.log('Name: ', nameVal); 
//   this.props.addFolderApi(nameVal);
// };
 
validateName(input) { 
  const name = input.trim(); 
  if (name.length === 0) { 
    console.log('name is required');
    return 'Name is required'; 
  }
}

  render() {
    console.log(this.props)
    return (
      <form
        className=''
        onSubmit={(e) => this.(e)}
        >
        <label>Name of new Note</label>
        <input
          type="text"
          name="newNew"
        ></input>
        <button
          type="submit"
          name="submitButton">Submit</button>
      </form>
    );
  }
}

export default AddNote;
