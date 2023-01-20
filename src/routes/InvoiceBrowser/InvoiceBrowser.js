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
            <h3>Invoice Details</h3>
            <p>QBP: Currently QBP will be accessed automatically. There should be no need to manually add invoice from QBP</p>
            <p>JBI: To add JBI invoice to the system upload .csv file available from JBI's order screen. You can verify there that the order is correct and at that time the invoice should be made available in the system.</p>
            <QueryQBP/>
            <DisplayDbInvoices/>
            <InvoiceReconciliation/>
        </div>
    )
}

export default InvoiceBrowser