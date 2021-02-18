import InstagramLogin from 'react-instagram-login';
import './App.css';

function App() {
  const responseInstagram = (response) => {
    console.log(response);
  }

  
  return (
    <div className="App">
      <InstagramLogin
        clientId="473669417373668"
        buttonText="Login"
        scope="likes+comments+follower_list"
        onSuccess={responseInstagram}
        onFailure={responseInstagram}
      />
    </div>
  );
}

export default App;
