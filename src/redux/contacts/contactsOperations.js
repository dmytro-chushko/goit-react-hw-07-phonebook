import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contactsAPI';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const contacts = await contactsAPI.getContacts();
      return contacts;
    } catch (error) {
      Notify.failure('Something went wrong');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      await contactsAPI.addContact(contact);
      const contacts = await contactsAPI.getContacts();
      Notify.success('Contact has added');
      return contacts;
    } catch (error) {
      Notify.failure('Something went wrong');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async id => {
    try {
      await contactsAPI.deleteContact(id);
      const contacts = await contactsAPI.getContacts();
      Notify.success('Contact has deleted');
      return contacts;
    } catch (error) {
      Notify.failure('Something went wrong');
    }
  }
);
