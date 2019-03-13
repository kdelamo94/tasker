import React, {Component} from 'react';

import './CreateButton.css';

class CreateButton extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let className = "CreateButton"
    if(this.props.className){
      className = this.props.className;
    }

    let handleClick = () => {
      console.log("No Defined Action")
    };

    if(this.props.handleClick){
      handleClick = this.props.handleClick;
    }

    return (
      <div
        className="CreateButton"
      >

        <button
          className="CreateButton-button"
          onClick={() => handleClick()}
        >
            {this.props.content}
        </button>
      </div>
    );
  }
}
export default CreateButton;
