import * as firebase from 'firebase';

const { apiKey, messagingSenderId, measurementId, appId } = process.env;
var firebaseConfig = {
	apiKey,
	authDomain: 'expensify-af971.firebaseapp.com',
	databaseURL: 'https://expensify-af971.firebaseio.com',
	projectId: 'expensify-af971',
	storageBucket: 'expensify-af971.appspot.com',
	messagingSenderId,
	appId,
	measurementId,
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default, firebase };
