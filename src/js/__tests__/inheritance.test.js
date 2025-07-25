import Validator from "../validator";

const user = new Validator("Roman","Podkorytov","romiraxp");

// тест на проверку создания дочернего класса
test('User object is an instance of the "Validator" class', () => {
    expect(user).toBeInstanceOf(Validator);
});
