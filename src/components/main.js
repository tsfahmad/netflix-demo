import { useEffect, useState } from "react";
import MediaList from "./media-list";
import FriendList from "./friend-list";
import EngagementMetric from './engagement-metric';

const Main = ({userInfo}) => {
    const [user, setUser] = useState(null);
    const { user_id, access_token } = userInfo;

    useEffect(() => {
        if(access_token) {
            fetch(`https://graph.instagram.com/me?fields=id,username,media_count,account_type,media&access_token=${access_token}`)
            .then(response => response.json())
            .then(data =>setUser(data));
        }
    }, [access_token]);


    return (
        <div> {user ? 
        <>
            `Welcome ${user.username}!! You user Id ${user_id}`
            <MediaList list={user?.media?.data} access_token={access_token}/>
            <EngagementMetric user_id={user_id} access_token={access_token}/>
            <FriendList access_token={access_token}/>
        </>
        : 'Loading ...'} </div>
    )
}

export default Main;