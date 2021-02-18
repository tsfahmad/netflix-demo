import { useEffect } from "react";
import PropTypes from 'prop-types'

const Login = ({clientId, scope, onSuccess}) => {

    useEffect(() => {
        const redirectUri = window.location.href
        if (window.location.search.includes('code')) {
            onSuccess(true);
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