import axios from 'axios';

const BASE_URL = 'https://62f18a61b1098f1508023cf4.mockapi.io/contacts';

export const getContacts = async () => {
  const contacts = await axios(BASE_URL);
  console.log(contacts);
  return contacts.data;
};
