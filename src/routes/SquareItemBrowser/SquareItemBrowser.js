import React from 'react'
import store from '../../store/store'
import ItemCreatorDisplay from './ItemCreatorDisplay'

function SquareItemBrowser() {
    const invoiceNumber = store.getState().loadedInvoice.invoiceNumber
    const invoiceVendor = store.getState().loadedInvoice.vendor

    return(
        <div>
            <h3>
                Invoice #{invoiceNumber} currently loaded from {invoiceVendor}
            </h3>
            <ItemCreatorDisplay/>
        </div>
        
    )
}

export default SquareItemBrowser