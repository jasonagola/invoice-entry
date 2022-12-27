import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getInvoiceFromVendor } from '../../utils/apiCalls'
import InvoiceManualLoader from './InvoiceManualLoader'
import InvoiceDisplayMultiple from './InvoiceDisplayMultiple'
import store from '../../store/store'
import { useSelector } from 'react-redux'
import { getLoadedInvoiceStatus } from '../../store/loadedInvoice/loadedInvoiceSlice'

export async function invoiceLoader ({params}) {
    return params
}



function InvoiceViewer() {
    const invoiceRequest = useLoaderData()
    const loadedInvoiceStatus = useSelector(getLoadedInvoiceStatus)
    // console.log(invoiceRequest)

    return(
        <div>
            <h2>Invoice Viewer</h2>
            <InvoiceManualLoader/>
            <InvoiceDisplayMultiple loadedInvoiceStatus={loadedInvoiceStatus} invoiceRequest={invoiceRequest}/>
        </div>
    )
}

export default InvoiceViewer