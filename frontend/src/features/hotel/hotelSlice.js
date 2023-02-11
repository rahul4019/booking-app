import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost';

const initialState = {
  hotels: [],
};

export const getHotels = createAsyncThunk('/hotel/hotels', () => {
  return fetch('/')
    .then((response) => response.json())
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
});

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    allHotels: (state, { payload }) => {
      state.hotels = [];
    },
  },
});

export const { allHotels } = hotelSlice.actions;

export default hotelSlice.reducer;
