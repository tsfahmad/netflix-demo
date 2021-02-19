import Media from './media';

const MediaList = ({list, access_token}) => {
    return <div>
        {list.map(({ id }) => <Media media_id={id} access_token={access_token}/>)}
    </div>
}

MediaList.defaultProps = {
    list: [],
}

export default MediaList;