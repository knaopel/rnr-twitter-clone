import ServerActions from './actions/server-actions';

export default {
  getAllTweets() {
    $.get('/tweets')
      .success(rawTweets => {
        ServerActions.receivedTweets(rawTweets);
      })
      .error(error => console.log(error));
  },
  createTweet(body) {
    $.post('/tweets', { body })
      .success(rawTweet => {
        ServerActions.receivedOneTweet(rawTweet);
      })
      .error(error => console.log(error));
  }
}