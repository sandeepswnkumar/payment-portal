import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    menuOpen : false,
}

const PaymentPortalSlice = createSlice({
    name: 'paymentPortal',
    initialState,
    reducers: {
        toggleMenu : function(state, action){
            state.menuOpen = action.payload;
        }
    }
})

export const { toggleMenu } = PaymentPortalSlice.actions;

export default PaymentPortalSlice.reducer