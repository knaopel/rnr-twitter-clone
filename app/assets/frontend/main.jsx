import TweetBox from './components/tweet-box';
import TweetList from './components/tweet-list';

// const mockTweets = [
//   { id: 1, name: 'Kurt Opel', body: 'my #firsttweet' },
//   { id: 2, name: 'Kurt Opel', body: 'my #secondtweet' },
//   { id: 3, name: 'Kurt Opel', body: 'my #thirdtweet' }
// ];


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetsList: []
    };
  }
  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd })

    this.setState({ tweetsList: newTweetsList });
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
