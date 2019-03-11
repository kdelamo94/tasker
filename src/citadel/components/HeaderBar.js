import React, {Component} from 'react';
import './HeaderBar.css';

class HeaderBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div
        className="HeaderBar"
      >
        Tasker
      </div>
    );
  }
}
export default HeaderBar;
