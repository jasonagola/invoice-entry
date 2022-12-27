import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import QueryQBP from './queryQBP';
import InvoiceReconciliation from './InvoiceReconciliation';
import DisplayDbInvoices from './DisplayDbInvoices';
import { fetchInvoices } from '../../store/databaseInvoices/databaseInvoicesSlice';

function InvoiceBrowser() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchInvoices())
    }, [dispatch])

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