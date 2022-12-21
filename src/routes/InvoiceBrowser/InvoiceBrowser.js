import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInvoices } from '../../store/databaseInvoices/databaseInvoicesSlice';
import QueryQBP from '../../queryQBP';
import InvoiceReconciliation from './InvoiceReconciliation';
import DisplayDbInvoices from './DisplayDbInvoices';

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