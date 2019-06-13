import React from 'react'

export default function AddForm(props) {

  function handleSubmit(event)  {
    event.preventDefault();
    if(props.isUpdating){
      props.updateFriend();
    } else{
        props.addFriend();
    }
  }

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={props.newFriend.name} 
          placeholder="Enter name" 
          onChange={props.handleChanges}
        />

        <input 
          type="number" 
          name="age" 
          value={props.newFriend.age} 
          placeholder="Enter age" 
          onChange={props.handleChanges}
        />

        <input 
          type="text" 
          name="email" 
          value={props.newFriend.email} 
          placeholder="Enter email" 
          onChange={props.handleChanges}
        />

        <button type="submit">
          {props.isUpdating ? "Update Friend" : "Add Friend"}
        </button>
      </form>
    </div>
  )
}
