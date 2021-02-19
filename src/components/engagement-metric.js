import { useEffect } from "react";

const EngagementMetric = ({user_id, access_token}) => {

    useEffect(() => {
        fetch(`https://graph.facebook.com/${user_id}/insights?metric=impressions,reach,profile_views&period=day&access_token=${access_token}`)
        .then(response => response.json())
        .then(data=>console.log.log(data));
    }, [user_id, access_token]);

    return null;
}

export default EngagementMetric;