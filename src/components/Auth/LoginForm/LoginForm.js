import React from 'react';
import {Button} from 'semantic-ui-react';

export function LoginForm(props) {
  const {goBack,openRegister} = props;
  
  
  return (
    <div style={{backgroundColor:"#f0f"}}>
        <h1>Login Form</h1>
      
        <Button primary onClick={openRegister}> Registo </Button>
        <Button secondary onClick={goBack}> Back </Button>
        
      
    </div>
  )
}
