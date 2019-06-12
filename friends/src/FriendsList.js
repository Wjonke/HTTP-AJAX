import React from 'react';






const FriendsList = props => {
        return(
            <div>

                <p>{props.friend.name}</p>
                <p>{props.friend.age}</p>
                <p>{props.friend.email}</p>
                <button>Edit Friend</button>
                <button>Delete Friend</button>

            </div>
        )
}

export default FriendsList;