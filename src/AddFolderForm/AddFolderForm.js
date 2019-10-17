import React, { Component } from 'react';
import ApiContext from '../ApiContext';


class AddFolderForm extends Component {
  static contextType = ApiContext;

  state= {
    name: null,
    touched: false,
  }
  

handleAddFolderButton = (event) => {
  event.preventDefault();
  const nameVal=event.target.newFolder.value;
  const validatedName = this.validateName(nameVal)
  console.log(this.validateName(validatedName));

  this.context.addFolderApi(validatedName);
};
 
validateName(input) { 
  const name = input.trim(); 
  if (name.length === 0) { 
   // console.log('name is required');
    console.log('that failed'); 
  }
  return name;
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
          required
        ></input>
        <button
          type="submit"
          name="submitButton">Submit</button>
      </form>
    );
  }
}

export default AddFolderForm;
