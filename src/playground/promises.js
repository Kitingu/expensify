const promise = new Promise((resolve, reject) => {
	// setTimeout(() => {
	// 	resolve('this is my resolved data');
	// }, 5000);
	reject('something went wrong');
});

console.log('before');

promise
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});

console.log('after');

// another syntax for catching errors
promise.then(
	(data) => {
		console.log(data);
	},
	(error) => {
		console.log(error);
	}
);
