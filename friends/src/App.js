import React, { Component } from 'react'
import axios from 'axios';



import FriendsList from './FriendsList';



export class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        friends: [],
        
      };
    }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>

        <div>
          <button>Add Friend</button>
        </div>

        <div>
          {this.state.friends.map((friend, i) => (
              <FriendsList key={i} friend={friend}/>
              ))}
        </div>

      </div>
    )
  }
}




export default App;
