import React from 'react';
import { Form, Icon } from 'semantic-ui-react';
import "./RegisterForm.scss";


export function RegisterForm(props) {
  const {goBack, openLogin} = props;

  return (
    <div className='register-form'>
        <h1>Start listening with an free Musicfy Account</h1>
        <Form>
          <Form.Input type="text" placeholder="Email" icon="mail outline" />
        
        
          <Form.Input 
            type="password" 
            placeholder="Password" 
            icon={
              <Icon 
                name = 'eye' 
                link 
                onClick={() => {console.log("Show Password"); alert("Show Password")}}
            />
          }
          />
        <Form.Input type="text" placeholder="How should we call you?" icon='user circle outline'/>
        
        <Form.Button type='submit' primary fluid>
          Continue
        </Form.Button>
        </Form>

        <div className='register-form__options'>
          <p onClick={goBack}>Go Back</p>
          <p>Already have an account? <span onClick={openLogin}>log in</span></p>

        </div>
    </div>
  )
}
