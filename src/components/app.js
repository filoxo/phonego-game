import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Home from '../routes/home'
import Profile from '../routes/profile'
import firebase from '../lib/firebase.js'
import 'firebase/auth'
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	constructor(props) {
		super(props)
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ username: user.displayName })
			} else {
				console.log('unauthenticated')
			}
		})
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url
	}

	render() {
		return (
			<div id="app">
				<Header username={this.state.username} />
				<Router onChange={this.handleRoute}>
					<Home path="/" username={this.state.username} />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		)
	}
}
