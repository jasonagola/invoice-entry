import React, { useEffect } from 'react';
import LoadData from '../LoadData';
import InvoiceReconciliation from '../InvoiceReconciliation';
import { useDispatch } from 'react-redux';
import { fetchInvoices } from '../features/databaseInvoices/databaseInvoicesSlice';
import DisplayDbInvoices from '../DisplayDbInvoices';
import QueryQBP from '../queryQBP';

function InvoiceBrowser() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchInvoices())
    }, [])

    return (
        
        <div>
            Invoice Browser
            <QueryQBP/>
            <DisplayDbInvoices/>
            <InvoiceReconciliation/>
        </div>
    )
}

export default InvoiceBrowser