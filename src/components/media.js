import { useEffect, useState } from "react";

const Media = ({media_id, access_token}) => {
    const [media, setMedia] = useState(null);

    useEffect(() => {
        fetch(`https://graph.instagram.com/${media_id}?fields=id,media_type,media_url,username,timestamp&access_token=${access_token}`)
        .then(response => response.json())
        .then(data =>setMedia(data));
    }, [access_token, media_id]);

    const getMedia = () => {
        if(media) {
            const {media_type, media_url, caption} = media;
            switch(media_type) {
                case 'IMAGE':
                    return <img src={media_url} alt={caption}/>
                case 'VIDEO':
                    return <video src={media_url} controls/>
                default:
                    return null;    
            }
        }

        return null;
    }

    return getMedia();
}

export default Media;