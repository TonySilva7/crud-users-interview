const rgxName = /[A-Z][a-z]* [A-Z][a-z]*/;
const rgxUserName = /^[a-z0-9]+(?:[ _-][a-z0-9]+)*$/;
const rgxMail =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const rgxPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\])]).{8,}$/g;

export const validName = (name) => name.match(rgxName) && name !== '' && name.length >= 3;
export const validUserName = (userName) =>
	userName.match(rgxUserName) && userName !== '' && userName.length >= 3;
export const validEmail = (email) => email !== '' && email.match(rgxMail);
export const validPass = (password) => password !== '' && password.match(rgxPassword);
