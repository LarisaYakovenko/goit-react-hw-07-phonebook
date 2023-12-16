import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://657b358e394ca9e4af13f992.mockapi.io/contacts';


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get('/contacts');
  return response.data;
});


export const addContact = createAsyncThunk("contacts/addContact", async (contact) => {
  const response = await axios.post('/contacts');
  return response.data;
});

export const deleteContact = createAsyncThunk(`contacts/deleteContact`, async (contactId) => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
});
