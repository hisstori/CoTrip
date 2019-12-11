import React, {Component} from 'react';
import InputTextField from "../InputTextField/InputTextField";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./LoginPage.css";


// Class Based React Component
class LoginPage extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      username: "",
      password: ""
    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount() {
    console.log("Component did mount");
  }


  // Runs after a component has been updated
  componentDidUpdate() {}


  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render(){
    return(
      
      <div className="LoginPage">
        <Logo className="Logo"/>
        <InputTextField name="email" placeholder="Email"/>
        <InputTextField name="password" placeholder="Password"/>
        <p>Forgot your password?</p>
        <Button id="button" text="Submit"/>
      </div>
      
    );
  }
}

export default LoginPage;