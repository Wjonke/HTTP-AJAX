import React, { Component } from 'react'
import axios from 'axios';
import { Route, NavLink, withRouter } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import AddForm from './components/AddForm';


const deletedFriend = {
  name: '',
  age:'',
  email:'',
}



export class App extends Component {


    constructor(props) {
      super(props);
      this.state = {
        friends: [],
        newFriend: deletedFriend,
        isUpdating: false,
      };
    }




  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }


  handleChanges = event => {
    this.setState({
      newFriend:{
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    })
  }


  addFriend = () => {
    axios
      .post(`http://localhost:5000/friends`, this.state.newFriend)
      .then(res => {
        this.setState({ 
          friends: res.data })
      })
      .catch(err => {
        console.log(err);
      })
  }


 editFriend = (event, id) => {
   event.preventDefault();
   this.setState({
     newFriend: this.state.friends.find(friend => friend.id === id),
     isUpdating: true
   })
   this.props.history.push('/friends')
 }


deleteFriend = (event, friendId) => {
  event.preventDefault();
  axios
    .delete(`http://localhost:5000/friends/${friendId}`)
    .then(res => {
      this.setState({ 
        friends: res.data, 
      })
    })
    .catch(err => {
      console.log(err);
    })
 }


  updateFriend = () => {
      axios
      .put(`http://localhost:5000/friends/${this.state.newFriend.id}`, this.state.newFriend)
      .then(res => {
        this.setState({ 
          friends: res.data, 
          isUpdating: false,
          newFriend: deletedFriend
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
    
  }



  render() {
    return (
      <div> 

        <nav>
          <NavLink to='/friends'>
            {this.state.isUpdating ? 'update' : 'Add a'} Friend
          </NavLink>
        </nav>

        {this.state.friends.map((friend, i) => (
          <FriendsList 
            key={i} 
            friend={friend}
            editFriend= {this.editFriend}
            deleteFriend={this.deleteFriend}
          />
        ))}

        <Route path= '/friends' render= {props => (
          <AddForm
            {...props}
            addFriend= {this.addFriend}
            newFriend= {this.newFriend}
            handleChanges= {this.handleChanges}
            isUpdating= {this.isUpdating}
            updateFriend= {this.updateFriend}
          />
        )}/>
      </div>
    )
  }
}




export default withRouter(App);
