import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getDefaultQbpInvoices } from '../../utils/qbpInvoiceHelpers';

const options = {
    name: 'foundInvoices',
    initialState: {
        qbp: {
            invoices: [],
            status: 'idle',
            error: null
        },
        jbi: {
            invoices: [],
            status: 'idle',
            error: null
        }
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
          .addCase(invoiceCheckQbp.pending, (state, action) => {
            state.qbp.status = 'loading'
          })
          .addCase(invoiceCheckQbp.fulfilled, (state, action) => {
            state.qbp.status = 'succeeded'
            // console.log(action.payload)
        
            state.qbp.invoices = action.payload
          })
          .addCase(invoiceCheckQbp.rejected, (state, action) => {
            state.qbp.status = 'failed'
            state.qbp.error = action.error.message
          })
      }


}

export const foundInvoicesSlice = createSlice(options)
export const {} = foundInvoicesSlice.actions

export default foundInvoicesSlice.reducer


/////Selectors
export const selectAllQbpInvoices = (state) => {
    return state.foundInvoices.qbp.invoices
}


/////Thunks
export const invoiceCheckQbp = createAsyncThunk('/invoiceCheckQbp', async (dates) => {
    // console.log('finding QBP invoices')
    const {endDate, startDate} = dates
    
    const response = await getDefaultQbpInvoices(endDate, startDate)
    // console.log(response)
    // console.log(response.invoiceResponse.invoices.invoice)
    return response.invoiceResponse.invoices.invoice
})