import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://657e1dcb3e3f5b18946387a8.mockapi.io';


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

