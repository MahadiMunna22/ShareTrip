import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    selected: 1,
    details: {
        id: 1,
        From: "DAC",
        To: "JFK",
        TripType: "RoundTrip",
        Date: "25 Mar - 4 Apr 2023",
        StopCount: 1
    }
}
export const bookingHistorySlice = createSlice({
    name: 'bookingHistory',
    initialState: initialState,
    reducers: {
        setSelected: (state, action) => {
            state.selected = action.payload;
        },
        setHistoryList: (state, action) => {
            state.list = action.payload
        },
        setHistoryDetails: (state, action) => {
            state.details = action.payload
        },
    },
});
export const {
    setSelected,
    setHistoryList,
    setHistoryDetails
} = bookingHistorySlice.actions;
export default bookingHistorySlice.reducer;
