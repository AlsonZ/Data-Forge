import emails from "./wordLists/emails";
import firstNames from "./wordLists/firstNames";
import fullNames from "./wordLists/fullNames";
import lastNames from "./wordLists/lastNames";
import passwords from "./wordLists/passwords";

export type ItemTypes = Record<string, Array<string>>;

// Possible item types: firstName, lastName, fullName, email, password
// id, uuid, mobileNumber, random string -> these i can generate
// wordlist has duplicates, need to make something to remove duplicates
const itemTypes: ItemTypes = {
  firstName: firstNames,
  lastName: lastNames,
  fullName: fullNames,
  email: emails,
  password: passwords,
};

export { itemTypes };
