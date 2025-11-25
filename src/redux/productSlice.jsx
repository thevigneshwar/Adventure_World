import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    searchTerm: '',
    filteredData: [] 
}

const productSlice = createSlice({ 
    name: 'product',
    initialState,
    reducers : {
        setproducts(state, action) {
            state.products = action.payload 
            for(let i=0; i<state.products.length; i++){
              console.log(state.products[i])
            }
        },
        setSearchTerm(state, action) {
          for(let i=0; i<state.products.length; i++){
            console.log(state.products[i])
          }

          state.searchTerm = action.payload.toLowerCase();
          state.filteredData = state.products.filter(product =>
            product?.name?.toLowerCase().includes(state.searchTerm)
          ) 
        }
        
    },

})

export const {setproducts,setSearchTerm} = productSlice.actions;
export default productSlice.reducer 