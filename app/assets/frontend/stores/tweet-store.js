import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import AppEventEmitter from './app-event-emitter';

let _tweets = [];
class TweetEventEmitter extends AppEventEmitter {
  getAll() {
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
  }
}

const TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {
  switch (action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_TWEET:
      _tweets.unshift(action.rawTweet);
      TweetStore.emitChange();
      break;
    default:
    // no op
  }
});

export default TweetStore;
