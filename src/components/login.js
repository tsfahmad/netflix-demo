import { useEffect } from "react";
import PropTypes from 'prop-types'

const Login = ({clientId, scope, onSuccess}) => {

    useEffect(() => {
        const redirectUri = window.location.href
        if (window.location.search.includes('code')) {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            const data = {
              client_id: clientId,
              client_secret: '37486c235230f8ae895e3586b5a78c9c',
              grant_type: 'authorization_code',
              redirect_uri: redirectUri,
              code: code
            };

            fetch('https://api.instagram.com/oauth/access_token', {
              method: 'POST',
              mode: 'cors',
              body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => console.log(data));

            onSuccess(code);
          } 
          else {
            window.location.href = `https://api.instagram.com/oauth/authorize/?app_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`
          }
    }, [clientId, scope, onSuccess]);

    return null;
}

Login.propTypes = {
    onSuccess: PropTypes.func.isRequired,
    clientId: PropTypes.string.isRequired,
    scope: PropTypes.string.isRequired,
}

export default Login;