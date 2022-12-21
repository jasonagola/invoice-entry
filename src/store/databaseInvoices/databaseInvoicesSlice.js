import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getAllDatabaseInvoices } from '../../utils/apiCalls';

const options = {
    name: 'databaseInvoices',
    initialState: {
        invoices: [],
        status: 'idle',
        error: null

    },
    reducers: {
        reloadDB: (state, action) => {
            const status = action.payload
            return {...state, status:status}
        }

    },
    extraReducers(builder) {
        builder
          .addCase(fetchInvoices.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchInvoices.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.invoices = action.payload
          })
          .addCase(fetchInvoices.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }


}

export const databaseInvoicesSlice = createSlice(options)
export const {reloadDB} = databaseInvoicesSlice.actions

export default databaseInvoicesSlice.reducer


/////Selectors
export const selectAllDatabaseInvoices = (state) => {
    return state.databaseInvoices.invoices
}


/////Thunks
export const fetchInvoices = createAsyncThunk('/loadDatabaseInvoices', async () => {
    console.log('State fetching database invoices')
    const response = await getAllDatabaseInvoices()
    return response.data
    
})