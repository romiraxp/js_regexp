import { httpGet } from './http';

/*export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}*/

/*// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}*/

export function validateUserName(nickname) {
  // Допустимы только латинские буквы, символы тире `-`, подчёркивания `_` и цифры (0-9);
  // Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
  const regexp = /^[^\d{3,}_-][a-zA-Z0-9_-]+[^\d-_]$/;
  
  if (regexp.test(nickname)) {
    return nickname;
  } else {
    throw new Error('The nick name is incorrect');
  }
}

export function validateFirstName(firstname) {
  // Допустимы только латинские буквы, символы тире `-`, подчёркивания `_` и цифры (0-9);
  // Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
  const regexp = /^[^\d{3,}_-][a-zA-Z]+[^\d-_]$/;
  
  if (regexp.test(firstname)) {
    return firstname;
  } else {
    throw new Error('The first name is incorrect');
  }
};

export function validateLastName(lastname) {
  // Допустимы только латинские буквы, символы тире `-`, подчёркивания `_` и цифры (0-9);
  // Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
  const regexp = /^[^\d{3,}_-][a-zA-Z-]+[^\d-_]$/;
  
  if (regexp.test(lastname)) {
    return lastname;
  } else {
    throw new Error('The last name is incorrect');
  }
}

//функция замены телефонного номера, которая на вход принимает телефонный номер в разношерстном виде ('8 (927) 000-00-00'), 
// а на выходе получаем в виде единого стандарта +7ххххххххххх
export function replacePhoneNumber(phonenumber) {
  const pattern = /(\+)?(7|8)?(\d*)\s*\(*(\d{3})\)*[\s-]*(\d{3})[\s-]*(\d{2})[\s-]*(\d{2,3})\s*/; //паттерн, которому должен соответстовать номре телефона
  const patternToReplace = '+$2$3$4$5$6$7'; // паттерн на который мы производим замену
  //const subst_pattern = '+7$3$4$5$6$7';
  const lenPhoneNumber = phonenumber.replace(pattern, patternToReplace).length; // переменная в которую помещаем длину номера
  // если длина номера более 12 знаков (не российский), то трансформируем его с 8 в начале
  // иначе вместо 8 пишем +7 и номер
  if (lenPhoneNumber > 12) {
    const subst12 = '+$2$3$4$5$6$7'; // для Китая, не меняем ведущую +86
    return phonenumber.replace(pattern, subst12);
  } else {
    const subst_pattern = '+7$3$4$5$6$7'; // для России с ведущим +7
    return phonenumber.replace(pattern, subst_pattern);
  }
}