import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'redux/contacts';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
