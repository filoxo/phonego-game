import { h, Component } from 'preact'
import style from './style'
import firebase from 'firebase'
import 'firebase/auth'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = { value: '' }
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({ value: event.target.value })
	}
	handleSubmit(event) {
		event.preventDefault()
		firebase
			.auth()
			.signInAnonymously()
			.then(user => {
				user.updateProfile({ displayName: this.state.value })
			})
			.catch(console.log)
		this.props.init(this.state.value)
	}
	render() {
		return (
			<div class={style.home}>
				<h2>Welcome!</h2>
				<form onSubmit={this.handleSubmit} name="game">
					{this.props.username === null &&
						<div>
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								value={this.state.value}
								onChange={this.handleChange}
							/>
							<hr />
						</div>}
					<div>
						<input type="text" name="roomCode" placeholder="Enter Room Code" />
						<button type="submit">Join</button>
					</div>
					<div>&mdash;&nbsp;or&nbsp;&mdash;</div>
					<button type="submit">Start a new game</button>
				</form>
			</div>
		)
	}
}
