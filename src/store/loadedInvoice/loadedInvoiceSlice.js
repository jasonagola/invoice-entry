import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { getInvoiceFromVendor } from '../../utils/apiCalls'
import { qbpInvoiceXMLtoJSON } from '../../utils/qbpInvoiceHelpers'


/////Mock Invoice Item Template
// sku = {
//     sku: sku, 
//     description: description,
//     quantity: quantity,
//     unitCost: unitCost,
//     msrp: msrp,
//     inSquare: inSquare,
// }

const options = {
    name: 'loadedInvoice', 
    initialState: {
        status: 'idle',
        vendor: '',
        invoiceNumber: '',
        invoice: {}
    },


    reducers: {
        loadInvoice: (state, action) => {
            const invoice = action.payload
            return {invoice}
        },
        updateInSquare: (state, action) => {
            console.log('Attempting to update Square Status')
            const updatedItem = {...state.invoice[action.payload.itemID], inSquare: action.payload.inSquare}
            return {...state, invoice: {
                    ...state.invoice, [action.payload.itemID]: updatedItem}}
        },
        updateItemMSRP: (state, action) => {
            console.log('Updating Item MSRP')
            const updatedItem = {...state.invoice[action.payload.itemID], MSRP: action.payload.MSRP}
            return {...state, invoice: {
                ...state.invoice, [action.payload.itemID] : updatedItem
            }}
        }

    },
    extraReducers(builder) {
        builder
          .addCase(loadInvoiceFromVendor.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(loadInvoiceFromVendor.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const {vendor, invoice, invoiceNumber} = action.payload
            state.vendor = vendor
            state.invoice = invoice
            state.invoiceNumber = invoiceNumber
          })
          .addCase(loadInvoiceFromVendor.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
    }
}


export const loadedInvoiceSlice = createSlice(options)


export const {loadInvoice, updateInSquare, updateItemMSRP} = loadedInvoiceSlice.actions

export default loadedInvoiceSlice.reducer


/////Selectors
export const getLoadedInvoiceVendor = (state) => {
    return state.loadedInvoice?.vendor
}

export const getLoadedInvoice = (state) => {
    return state.loadedInvoice?.invoice
}

export const getLoadedInvoiceStatus = (state) => {
    return state.loadedInvoice?.status
} 

export const getSquareMatchStatus = (state) => {
    return state.squareMatch
}


////getInSquare 
/////getItemMSRP

/////Thunks
export const loadInvoiceFromVendor = createAsyncThunk('/loadInvoiceFromVendor', async (invoiceRequest) => {
    const {vendor, invoiceNumber} = invoiceRequest
    // const currentInvoiceNumber = getState().loadedInvoice.invoiceNumber
    // console.log(currentInvoiceNumber)
        const response = await getInvoiceFromVendor(vendor, invoiceNumber)
        switch (vendor) {
            case 'QBP':
                const invoice = qbpInvoiceXMLtoJSON(response)
                console.log(invoice)
                const invoiceInfo = {vendor, invoice, invoiceNumber}
                return invoiceInfo
            break;
            default:
                console.log('No matching route for invoice')
        }
    ////Will need to standardize response   
})