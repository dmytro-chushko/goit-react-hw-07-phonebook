import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contactsAPI';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const contacts = await contactsAPI.getContacts();
    return contacts;
  }
);
