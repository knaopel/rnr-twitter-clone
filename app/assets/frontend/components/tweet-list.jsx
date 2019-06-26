import Tweet from './tweet';

export default class TweetList extends React.Component {
  render() {
    const tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);
    return (
      <div>
        <ul className="collection">
          {tweets}
        </ul>
      </div>
    );
  }
}