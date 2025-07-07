import React from 'react'
import {Button} from 'semantic-ui-react';
import "./AuthOptions.scss";

export function AuthOptions(props) {
  const {openLogin, openRegister} = props;
  
  return (
    <div className='auth-options'>
      <h1>Millions of free songs on Musicfy</h1>
    
    <Button className='register' onClick={openRegister}>Register for free</Button>
    <Button className='login' onClick={openLogin}>Log In</Button>
    </div>
  )
}
