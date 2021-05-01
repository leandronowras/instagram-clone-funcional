import { useState, useEffect, useContext } from 'react';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';
import UserContext from '../contexts/user';

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null);
    const {
        user: { uid: userId = '' }
    } = useContext(UserContext);
    
    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds = await getUserByUserId(userId);
            let followedUserPhotos = [];

            if (followingUserIds && followingUserIds[0].following.length > 0) {
                // we need to call a function that will get us the photos
                followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
                setPhotos(followedUserPhotos);
            }
         }
        
        getTimelinePhotos();
    }, [userId]);
    
    return { photos };
}