import React from 'react'
import InvoiceManualLoader from './InvoiceManualLoader'

function InvoiceViewer() {
    return(
        <div>
            <h2>Invoice Viewer</h2>
            <InvoiceManualLoader/>
            <InvoiceDisplay/>
        </div>
    )
}

export default InvoiceViewer