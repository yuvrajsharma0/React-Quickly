/*
Imperative Approach

function countGoodPasswords(passwords) {
	let goodPasswords = []; //new statement changes the program state

	for (let i = 0; i < passwords.length; i++) {
		// "for" reserved word controls program flow

		const password = passwords[i]; //new statement changes the program state

		if (password.length >= 9) {
			// mutates an existing object
			goodPasswords.push(password); //new statement changes the program state
		}
	}

	//return goodPasswords + ", Total: " + goodPasswords.length;
	return goodPasswords.length;
}

const passwords = ["12345", "123456789", "12345678910"];

console.log(countGoodPasswords(passwords));

*/

/* 
    Declarative Style/Approach
*/

function countGoodPasswords(passwords) {
	return passwords.filter((password) => password.length >= 9).length;
}

const passwords = ["12345", "123456789", "12345678910"];

console.log(countGoodPasswords(passwords));
