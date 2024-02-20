import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { deleteCustomer as deleteCustomerAction } from "./slices/customerSlice";

import { updateCustomer as updateCustomerAction } from "./slices/customerSlice";

export default function CustomerView() {
    debugger;
    const customers = useSelector((state) => state.customers);

    
    const dispatch  = useDispatch();

  console.log(customers);

  function deleteHandler(index)
  {
    debugger;

    dispatch(deleteCustomerAction(index));
     console.log(index);
  }

  function editHandler(index)
  {
    debugger;

     dispatch(updateCustomerAction({index, updatedData: "raja" }));
     console.log(index);
  }

   return <div>
                <h3>Customer List</h3>
                <ul style={{listStyle:'none'}}>
                    {
                        customers.map((customer, index) =><li>{customer} <button onClick={ () => deleteHandler(index)}> Delete </button>
                        
                        <button onClick={ () => editHandler(index)}> Edit </button>
                        </li> )
                    }
                </ul>
        </div>
}