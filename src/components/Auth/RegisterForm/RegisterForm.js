import React from 'react'
import { Button } from 'semantic-ui-react'

export function RegisterForm(props) {
  const {goBack, openLogin} = props;

  return (
    <div style={{backgroundColor:"#f00"}}>
        <h1>Register Form</h1>

        <Button primary onClick={openLogin}> Login</Button>
        <Button secondary onClick={goBack}> Back</Button>

    </div>
  )
}
