import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    menuOpen : false,
}

const PaymentPortalSlice = createSlice({
    name: 'paymentPortal',
    initialState,
    reducers: {
        toggleMenu : function(state, action){

        }
    }
})