import React from 'react';
import LoadData from '../LoadData';
import InvoiceReconciliation from '../InvoiceReconciliation';

function InvoiceBrowser() {

    return (
        
        <div>
            Invoice Browser
            <LoadData/>
            <InvoiceReconciliation/>
        </div>
    )
}

export default InvoiceBrowser