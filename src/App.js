import { useState } from 'react';
import './App.css';
import Login from './components/login';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Login 
      clientId="473669417373668" 
      scope="user_profile+user_media"
      success={() => setLoggedIn(true)}
    />
      {loggedIn ? 'Welcome to Insta': 'Logging In ...'}

    </div>
  );
}

export default App;
