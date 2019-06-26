import API from '../api';
export default {
  getAllTweets() {
    API.getAllTweets();
  },
  sendTweet(body){
    API.createTweet(body);
  }
}