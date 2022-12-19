import React, { useEffect } from 'react';
import LoadData from '../LoadData';
import InvoiceReconciliation from '../InvoiceReconciliation';
import { useDispatch } from 'react-redux';
import { fetchInvoices } from '../features/databaseInvoices/databaseInvoicesSlice';
import DisplayDbInvoices from '../DisplayDbInvoices';

function InvoiceBrowser() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchInvoices())
    }, [])

    return (
        
        <div>
            Invoice Browser
            <DisplayDbInvoices/>
        </div>
    )
}

export default InvoiceBrowser