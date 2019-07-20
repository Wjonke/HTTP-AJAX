import React from 'react';

const cardStyle= {
  margin:'10px',
  padding:'5px',
  border: '1px solid red',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '250px',
  width: '300px',

  }


const FriendsList = props => {
  return(
    <div  style={cardStyle}>

      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>

      <button onClick={event => props.editFriend(event, props.friend.id)}>
        Edit Friend
      </button>

      <button onClick={event => props.deleteFriend(event, props.friend.id)}>
        Delete Friend
      </button>

    </div>
  )
}

export default FriendsList;