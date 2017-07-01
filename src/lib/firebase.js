import firebase from 'firebase'
const config = {
	apiKey: 'AIzaSyC0KPFcsWgqS-HgsGYJOTTAoUfwEcBHPNY',
	authDomain: 'phonego-game.firebaseapp.com',
	databaseURL: 'https://phonego-game.firebaseio.com',
	projectId: 'phonego-game',
	storageBucket: 'phonego-game.appspot.com',
	messagingSenderId: '76249003047'
}
firebase.initializeApp(config)
export default firebase
