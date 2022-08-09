import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsOperations from 'redux/contacts/contactsOperations';

const { getContacts } = contactsOperations;

const items = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
});

const error = createReducer(false, {
  [getContacts.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
