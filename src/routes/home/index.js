import { h, Component } from 'preact'
import style from './style'

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
		alert('A name was submitted: ' + this.state.value)
		event.preventDefault()
	}
	render() {
		return (
			<div class={style.home}>
				<h2>Welcome!</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input
							type="text"
							name="name"
							placeholder="Enter your name"
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
					<hr />
					<div>
						<input type="text" name="name" placeholder="Enter Room Code" />
					</div>
					<div>&mdash;&nbsp;or&nbsp;&mdash;</div>
					<button type="submit">Start a new game</button>
				</form>
			</div>
		)
	}
}
