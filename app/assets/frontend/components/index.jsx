import React from 'react';
import { Link } from 'react-router-dom';

import TweetBox from './tweet-box';
import TweetList from './tweet-list';
import TweetStore from '../stores/tweet-store';

import TweetActions from '../actions/tweet-actions';

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TweetActions.getAllTweets();
    TweetStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className="container">
        <Link to='/follow'>Who to follow</Link>
        <TweetBox />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

export default Index;
