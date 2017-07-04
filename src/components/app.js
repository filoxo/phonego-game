import { h, Component } from 'preact'
import { Router, route } from 'preact-router'

import Header from './header'
import Home from '../routes/home'
import Profile from '../routes/profile'
import firebase from '../lib/firebase.js'
import Game from '../routes/game'
import 'firebase/auth'
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	constructor(props) {
		super(props)
		this.gamesRef = firebase.database().ref('games')
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ username: user.displayName })
			} else {
				console.log('unauthenticated')
			}
		})
		this.init = this.init.bind(this)
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url
	}

	init(code) {
		code !== undefined && code !== '' ? this.joinGame(code) : this.createGame()
	}

	createGame() {
		const game = this.gamesRef.push().key
		this.gamesRef.update({ [game]: { players: [this.state.username] } })
		this.gamesRef.child(game).on('value', snapshot => {
			this.setState({ game: snapshot.val() })
			route(`/game/${snapshot.sid}`)
		})
	}

	joinGame(roomCode) {
		console.log(roomCode)
	}

	render() {
		return (
			<div id="app">
				<Header username={this.state.username} />
				<Router onChange={this.handleRoute}>
					<Home path="/" username={this.state.username} init={this.init} />
					<Game path="/game/:id" game={this.state.game} />
				</Router>
			</div>
		)
	}
}
