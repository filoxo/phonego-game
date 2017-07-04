import { h, Component } from 'preact'
import firebase from 'firebase'
import 'firebase/auth'

export default class Game extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				{JSON.stringify(this.props.game)}
			</div>
		)
	}
}
