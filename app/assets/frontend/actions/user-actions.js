import API from '../api';

export default {
  getAllUsers() {
    API.getAllUsers();
  },
  followUser(userId){
    API.followUser(userId);
  }
}