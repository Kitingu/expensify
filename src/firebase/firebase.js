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
// database.ref('notes/-LsKWIldzV-MGwGXjLxf').update({
// 	title: 'books',
// });

// database.ref('notes').push({
// 	id: 3,
// 	title: 'asadsfddf',
// });

const expenses1 = {
	id: '1',
	description: 'Gum',
	note: '',
	amount: 195,
	createdAt: 0,
};
const expense2 = {
	id: '9',
	description: 'Coffee',
	note: '',
	amount: 1000,
	createdAt: 0,
};

// child_removed --> refresh when item from firebase aray is removed
database.ref('expenses').on('child_removed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// child changed --> refresh when a child of the firebase array is changed
database.ref('expenses').on('child_changed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// child changed --> refresh when a child is added to the firebase array
database.ref('expenses').on('child_added', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// get data from array ...refreshing
database.ref('expenses').on('value', (snapshot) => {
	const expenses = [];
	snapshot.forEach((childSnapshot) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val(),
		});
	});
	console.log(expenses);
});

// database
// 	.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		// console.log(snapshot.val());
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...snapshot.val(),
// 			});
// 		});
// 		// return an array of objects
// 		console.log(expenses);
// 	});

// fetching from db of arrays demo

// database.ref('expenses').push(expenses1);
// database.ref('expenses').push(expense2);

// database
// 	.ref('location')
// 	.once('value')
// 	.then((snapshot) => {
// 		const value = snapshot.val();
// 		console.log(value);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// fetch data keeping track of changes
// uses callback fn instead of promises
// database.ref('location').on(
// 	'value',
// 	(snapshot) => {
// 		const value = snapshot.val();
// 		console.log(value);
// 	},
// 	(e) => {
// 		console.log('something went wrong', e);
// 	}
// );
// to unsubscribe we use ref().off()
// one can unsubscribe a single item rel().off(subscribe_function)
// e.g

// const onValueChange = (snapshot) => {
// 	const value = snapshot.val();
// 	console.log(value);
// };
// database.ref('location').of(onValueChange, (e) => {
// 	console.log('something went wrong', e);
// });
