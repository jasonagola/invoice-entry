import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'
import InvoiceManualLoader from './InvoiceManualLoader'
import InvoiceDisplayMultiple from './InvoiceDisplayMultiple'
import { loadInvoiceFromVendor } from '../../store/loadedInvoice/loadedInvoiceSlice'
import TestBehavior from '../../test'


export async function invoiceLoader ({params}) {
    return params
}

function InvoiceViewer() {
    const invoiceRequest = useLoaderData()
    const dispatch = useDispatch()

    if (invoiceRequest !== undefined) {
        dispatch(loadInvoiceFromVendor(invoiceRequest))
    }

    return(
        <div>
            <h2>Invoice Viewer</h2>
            <InvoiceManualLoader/>
            <InvoiceDisplayMultiple/>
        </div>
    )
}

export default InvoiceViewer