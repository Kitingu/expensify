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
database.ref('expenses').push(expenses1);
database.ref('expenses').push(expense2);
// };
// const notes = [
// 	{
// 		id: 12,
// 		title: 'first match',
// 		body: 'this is the body',
// 	},
// ];
// database.ref().set(notes);
// ref --> used for grouping data i.e ref for users
// if nothing is parsed in data is stored in the root directory

// database
// 	.ref()
// 	.set({
// 		username: "Mwendwa Kiting'u",
// 		age: 26,
// 		job: { title: 'software developer', conpany: 'google' },
// 		stressLevel: 4,
// 		location: {
// 			city: 'Nairobi',
// 			country: 'USA',
// 		},
// 	})
// 	.then(() => console.log('data sent'))
// 	.catch((error) => console.log('something went wrong', error));

// fetch data once without keeping track of changes

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
