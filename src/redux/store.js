import { configureStore } from "@reduxjs/toolkit";
import PaymentPortalSlice from "./PaymentPortalSlice";


const store = configureStore({
    reducer : PaymentPortalSlice
});

export default store;