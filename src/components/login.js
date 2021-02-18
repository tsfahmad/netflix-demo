import { useEffect } from "react";

const Login = ({clientId, scope, success}) => {

    useEffect(() => {
        const redirectUri = window.location.href
        if (window.location.search.includes('code')) {
            success();
          } 
          else {
            window.location.href = `https://api.instagram.com/oauth/authorize/?app_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`
          }
    }, []);

    return null;
}

export default Login;