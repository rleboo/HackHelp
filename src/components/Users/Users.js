import React, { Component } from 'react';
import { withFirebase } from '../Firebase';


class UsersPage extends Component {
    constructor(props)  {
        super(props);

        this.state = {
            loading: false,
            users: [],
        };
    }

    //Once all html components have been rendered correctly
    componentDidMount() {
        this.setState({loading: true});
        
        this.props.firebase.users().on('value', snapshot => {
            //on is a continious listener that checks for any changes

            const usersObject = snapshot.val();
            console.log(usersObject);

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            //retrieves an array of all objects and maps it according to the usersList 

            this.setState({
                users: usersList,
                //Extracts a JavaScript value from a DataSnapshot.
                loading: false,
            });
        });
        //This event will trigger once with the initial data stored at this location, and then trigger again each time the data changes. 

    }

    componentWillUnmount() {
        this.props.firebase.users().off();
        // Stop listening once we leave the page?/ Component is about to be destroyed
    }

    render() {
        const {users, loading} = this.state;
        // get the list of users and loading(?)
        return (
            <div>
                <h1>Users</h1>
                
                {loading &&<div> Loading...</div>}
                
                <UserList users={users} />
            </div>
        );
    }
}

const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key ={user.uid}>
                <span>
                    <strong>E-Mail:</strong> {user.email}
                </span>
                <span>
                    <strong>username</strong> {user.username}
                </span>
            </li>
        ))}
    </ul>
);

export default withFirebase(UsersPage);