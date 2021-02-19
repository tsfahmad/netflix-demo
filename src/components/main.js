import { useEffect, useState } from "react";

const Main = ({userInfo}) => {
    const [user, setUser] = useState(null);
    const { user_id, access_token } = userInfo;

    useEffect(() => {
        if(access_token) {
            fetch(`https://graph.instagram.com/me?fields=id,username,media_count,account_type&access_token=${access_token}`)
            .then(response => response.json())
            .then(data =>setUser(data));
        }
    }, [access_token]);


    return (
        <div> {user ? `Welcome ${user.username}!! You user Id ${user_id}`: 'Loading ...'} </div>
    )
}

export default Main;