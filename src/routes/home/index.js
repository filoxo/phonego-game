import { h, Component } from 'preact'
import style from './style'
import firebase from 'firebase'
import 'firebase/auth'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = { roomCode: '', validRoomCode: false }
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(event) {
		const { value } = event.target
		this.setState({ roomCode: value, validRoomCode: value.length === 8 })
	}
	handleSubmit(event) {
		event.preventDefault()
		firebase.auth().signInAnonymously().catch(console.log)
		this.props.init(this.state.roomCode)
	}
	render() {
		return (
			<div className={style.home}>
				<h2>Welcome!</h2>
				<form onSubmit={this.handleSubmit} name="game">
					<div className={style.btngrp}>
						<input
							type="text"
							name="roomCode"
							placeholder="Enter Room Code"
							maxLength="8"
							value={this.state.roomCode}
							onInput={this.handleChange}
						/>
						<button type="submit" disabled={!this.state.validRoomCode}>
							Join
						</button>
					</div>
					<div>&mdash;&nbsp;or&nbsp;&mdash;</div>
					<button type="submit">Start a new game</button>
				</form>
			</div>
		)
	}
}
