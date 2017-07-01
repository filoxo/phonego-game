import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1 class={style.left}>PhoneGo!</h1>
				<p class={style.right}>
					{this.props.username}
				</p>
			</header>
		)
	}
}
