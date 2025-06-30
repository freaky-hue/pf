import { React, useState} from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';

const array = [1,2,3,4,5,6,7,8];


function App() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  async function tryLogin(){
    try {
  const response = await fetch("http://localhost:3001/login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })  // envia como objeto, não array
  });

  const info = await response.json();

  if (response.ok) {
    console.log("Login bem sucedido", info);
  } else {
    console.log("Erro no login", info);
  }
} catch (error) {
  console.log("Erro na fetch:", error);
}
  }

  return (
    <div>
      <label>Username<input type='text' value={username} onChange={e => setUsername(e.target.value)}></input></label>
      <label>Password<input type='password' value={password}  onChange={e => setPassword(e.target.value)}></input></label>
      <Button primary onClick={tryLogin}>A</Button>
    </div>

  );
            
}

export default App;
