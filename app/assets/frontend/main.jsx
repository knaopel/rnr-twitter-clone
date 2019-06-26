import TweetBox from './components/tweet-box';
import TweetList from './components/tweet-list';

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
  const reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(
      <Main />,
      reactNode
    );
  }

};

$(documentReady);
