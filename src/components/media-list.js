import { useEffect, useState } from "react";
import Media from './Media';

const MediaList = ({user_id, access_token}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`https://graph.instagram.com/${user_id}}/media?access_token=${access_token}`)
        .then(response => response.json())
        .then(response =>setList(response.data));
    }, [access_token, user_id]);

    return <div>
        {list.map(({ id }) => <Media id={id}/>)}
    </div>
}

export default MediaList;