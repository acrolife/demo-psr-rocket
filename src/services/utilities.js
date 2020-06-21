
// // Generates date in readable french
const generateDate = () => {
	const today = new Date();
	const daysArray = [
		'dimanche',
		'lundi',
		'mardi',
		'mercredi',
		'jeudi',
		'vendredi',
		'samedi',
	];
	const monthsArray = [
		'janvier',
		'fevrir',
		'mars',
		'avril',
		'mai',
		'juin',
		'juillet',
		'août',
		'septembre',
		'octobre',
		'novembre',
		'décembre',
	];
	const time =
		daysArray[today.getDay()] +
		' ' +
		today.getDate() +
		' ' +
		monthsArray[today.getMonth()] +
		' ' +
		today.getFullYear() +
		', ' +
		today.getHours() +
		'h' +
		today.getMinutes() +
		'min';
		// console.log(time)
		// console.log(today)
	return time;
};


// // Generates a password from an email (string) and secret key
const secret = 'bUt6t0vJ3eowElk11KzIrAE2kuugFcOu'; // should go in .env
const separationSecret = '&:&'
const generatePassword = (email) => {
	return Buffer.from(email + separationSecret + secret, 'binary').toString('base64');
};

const getEmailFromPassword = (password) => {
	return Buffer.from(password, 'base64').toString('ascii').split(separationSecret)[0];
};

module.exports = {
	generateDate,
	generatePassword,
	getEmailFromPassword
}



// // Generates a password from an email (string) and secret key (tested on repl.it)
// const secret = 'bUt6t0vJ3eowElk11KzIrAE2kuugFcOu';
// console.log('secret: ' + secret)
// const email = 'david.dedobbeleer@gmail.com'
// const generatePassword = (email) => {
// 	return Buffer.from(email + secret, 'binary').toString('base64');
// };
// const password = generatePassword(email)

// console.log('password: ' + password)

// const getEmailFromPassword = (password) => {
// 	// B
// 	return Buffer.from(password, 'base64').toString('ascii');
// };

// console.log('back: ' + getEmailFromPassword(password).replace(secret,''))

// // Simply generate a password of 32 characters from a list
// export const generatePassword = () => {
// 	const length = 32;
// 	let charset =
// 		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// 	let retVal = '';
// 	for (let i = 0, n = charset.length; i < length; ++i) {
// 		retVal += charset.charAt(Math.floor(Math.random() * n));
// 	}
// 	return retVal;
// };
