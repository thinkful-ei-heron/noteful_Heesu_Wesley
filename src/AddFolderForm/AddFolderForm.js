import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import './AddFolderForm.css';

class AddFolderForm extends Component {
  static contextType = ApiContext;

  state= {
    name: null,
    touched: false,
    error: false,
  }
  

handleAddFolderButton = (event) => {
  event.preventDefault();
  const nameVal=event.target.newFolder.value;
  const validatedName = this.validateName(nameVal)
  this.context.addFolderApi(validatedName);
};

renderError =() => {
 if(this.state.error === true){
   return `A form has no name`
 }
}
 
validateName(input) { 
  const name = input.trim(); 
  if (name.length === 0) { 
    this.setState({
      error: true
    })
    console.log('the form value is 0');
  }
  console.log(name.length)
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

        ></input>
        {this.renderError()}
        <button
          type="submit"
          name="submitButton">Submit</button>
      </form>
    );
  }
}

export default AddFolderForm;
