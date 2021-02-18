import logo from './logo.svg';
import './App.css';
import InstagramLogin from 'react-instagram-login';

function App() {
  const responseInstagram = (response) => {
    console.log(response);
  }

  
  return (
    <div className="App">
      <InstagramLogin
        clientId="473669417373668"
        buttonText="Login"
        onSuccess={responseInstagram}
        onFailure={responseInstagram}
      />
    </div>
  );
}

export default App;
