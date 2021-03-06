import React from 'react';
import { Link } from 'react-router-dom';
import UserStore from '../stores/user-store';
import UserActions from '../actions/user-actions';

const getAppState = () => {
  return { users: UserStore.getAll() };
}

export default class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserActions.getAllUsers();
    UserStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppState());
  }

  followUser(userId) {
    UserActions.followUser(userId);
  }

  followClasses(following) {
    return "secondary-content btn-floating " + (following ? "green" : "grey");
  }

  render() {
    const users = this.state.users.map(user => {
      return (
        <li key={user.id} className="collection-item avatar">
          <img className="circle" src={user.gravatar} />
          <span className="title">{user.name}</span>
          <a className={this.followClasses(user.following)} onClick={this.followUser.bind(this, user.id)}>
            <i className="material-icons">person_pin</i>
          </a>
        </li>
      );
    });
    return (
      <div>
        <h3>Who to Follow</h3>
        <ul className="collection">
          {users}
        </ul>
        <Link to="/">Back</Link>
      </div>
    )
  }
}