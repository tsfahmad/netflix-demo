import Media from './media';

const MediaList = ({list, user_id, access_token}) => {
    return <div>
        {list.map(({ id }) => <Media media_id={id} access_token={access_token}/>)}
    </div>
}

export default MediaList;