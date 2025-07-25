import { validateUserName, validateFirstName, validateLastName } from "./user";

export default class Validator {
    constructor (firstname, lastname ,nickname) {
        this.firstname = validateFirstName(firstname);
        this.lastname = validateLastName(lastname);
        this.nickname = validateUserName(nickname);
    }
};