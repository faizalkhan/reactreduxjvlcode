import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const customerSlice = createSlice({

     name : 'customer',

     initialState,

     reducers : {

          addCustomer(state, action) {
            console.log(state);
            state.push(action.payload);
          },

          deleteCustomer(state, action)
          {
            debugger;
            return state.filter((val, index) => index !== action.payload)
          },

          updateCustomer(state, action)
          {
            debugger;
               console.log(action.payload)

               const { index, updatedData } = action.payload;
      

               state[index] = updatedData;

              
          }

     }


})

export const { addCustomer, deleteCustomer,  updateCustomer }  = customerSlice.actions;
export default  customerSlice.reducer;