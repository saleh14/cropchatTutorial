import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBb2oy7uYQvGflz-WxrrfUaSBgTBVMiY00',
  authDomain: 'cropchat-ab198.firebaseapp.com',
  databaseURL: 'https://cropchat-ab198.firebaseio.com',
  projectId: 'cropchat-ab198',
  storageBucket: 'cropchat-ab198.appspot.com',
  messagingSenderId: '437376579155'
}
firebase.initializeApp(config)
export default {
  database: firebase.database()
}
