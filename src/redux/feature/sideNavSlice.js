import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sideNavDetails: {},
};
export const sideNavSlice = createSlice({
    name: "sideNavDetails",
    initialState,
    reducers: {
        addClient: (state, val) => {
            state.sideNavDetails.client = val.payload;
        },
        addPharmacy: (state, val) => {
            state.sideNavDetails.pharmacy = val.payload;
        },
        addContractType: (state, val) => {
            state.sideNavDetails.contractType = val.payload;
        },
        addStartDate: (state, val) => {
            state.sideNavDetails.startDate = val.payload;
        },
        addEndDate: (state, val) => {
            state.sideNavDetails.endDate = val.payload;
        },
    },
});
export const { addClient, addPharmacy, addContractType, addStartDate, addEndDate } = sideNavSlice.actions;
export default sideNavSlice.reducer;





