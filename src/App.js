import { useState } from 'react';
import './App.css';
import Login from './components/login';
import Main from './components/main'

function App() {

  const [authCode, setAuthCode] = useState(null);

  return (
    <div className="App">
      <Login 
      clientId="473669417373668" 
      scope="user_profile+user_media"
      onSuccess={setAuthCode}
    />
      {authCode ? <Main code={authCode}/>: 'Logging In ...'}

    </div>
  );
}

export default App;
