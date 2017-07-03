const functions = require('firebase-functions'),
	shortid = require('shortid32'),
	admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.addShortGameId = functions.database
	.ref('/games/{pushId}')
	.onWrite(event => {
		if (event.data.previous.exists()) return
		return event.data.ref.child('sid').set(shortid.generate())
	})
