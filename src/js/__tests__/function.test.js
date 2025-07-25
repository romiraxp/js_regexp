import { validateUserName, validateFirstName, validateLastName, replacePhoneNumber } from "../user";

test('validate the provided nickname', () => {
    const testName1 = validateUserName("Arina");
    const testName2 = validateUserName("ArinaT");
    const testName3 = validateUserName("Arina_T");
    const testName4 = validateUserName("Arin-4a_T");    
    expect(testName1).toBe("Arina");
    expect(testName2).toBe("ArinaT");
    expect(testName3).toBe("Arina_T");
    expect(testName4).toBe("Arin-4a_T");        
});

test('validate the provided nickname, firstname or lastname is incorrect', () => {
    const testName1 = "Арина";
    const testName2 = "123Bob";
    const testName3 = "Bob1";    
    const testName4 = "-Bob";
    const testName5 = "_Bob";
    const testName6 = "Bob-";
    const testName7 = "Bob_";    
    expect(() => validateUserName(testName1)).toThrow();
    expect(() => validateUserName(testName2)).toThrow();
    expect(() => validateUserName(testName3)).toThrow();
    expect(() => validateUserName(testName4)).toThrow();
    expect(() => validateUserName(testName5)).toThrow();
    expect(() => validateUserName(testName6)).toThrow();
    expect(() => validateUserName(testName7)).toThrow();

    expect(() => validateFirstName(testName1)).toThrow();
    expect(() => validateFirstName(testName2)).toThrow();
    expect(() => validateFirstName(testName3)).toThrow();
    expect(() => validateFirstName(testName4)).toThrow();
    expect(() => validateFirstName(testName5)).toThrow();
    expect(() => validateFirstName(testName6)).toThrow();
    expect(() => validateFirstName(testName7)).toThrow();

    expect(() => validateLastName(testName1)).toThrow();
    expect(() => validateLastName(testName2)).toThrow();
    expect(() => validateLastName(testName3)).toThrow();
    expect(() => validateLastName(testName4)).toThrow();
    expect(() => validateLastName(testName5)).toThrow();
    expect(() => validateLastName(testName6)).toThrow();
    expect(() => validateLastName(testName7)).toThrow();

});

test('validate the provided firstname', () => {
    const testName1 = validateFirstName("Arina");
    const testName2 = validateFirstName("ArinaT");
    expect(testName1).toBe("Arina");
    expect(testName2).toBe("ArinaT");
});

test('validate the provided lastname', () => {
    const testName1 = validateLastName("Arina");
    const testName2 = validateLastName("Arina-T");
    expect(testName1).toBe("Arina");
    expect(testName2).toBe("Arina-T");
});

test('validate and replace phone number', () => {
    const phoneNumber1 = '8 (927) 000-00-00';
    const phoneNumber2 = '+7 960 000 00 00';
    const phoneNumber3 = '+86 000 000 0000';
    const replacedPhoneNumber1 = replacePhoneNumber(phoneNumber1);
    const replacedPhoneNumber2 = replacePhoneNumber(phoneNumber2);
    const replacedPhoneNumber3 = replacePhoneNumber(phoneNumber3);
    expect(replacedPhoneNumber1).toBe('+79270000000');
    expect(replacedPhoneNumber2).toBe('+79600000000');
    expect(replacedPhoneNumber3).toBe('+860000000000');
});