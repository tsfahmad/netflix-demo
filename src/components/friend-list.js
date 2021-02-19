import { useEffect } from "react";

const FriendList = ({access_token}) => {

    useEffect(() => {
        if(access_token) {
            fetch(`https://api.instagram.com/v1/users/17841402664486732/follows?access_token=${access_token}`)
            .then(response => response.json)
            .then(data => console.log(data));
        }
    }, [access_token]);

    return null;
}

export default FriendList;