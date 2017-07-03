import './style'
import firebase from './lib/firebase.js'
import App from './components/app'

if (module.hot) {
	require('preact/devtools')
}

export default App
