import React from 'react'
<<<<<<< HEAD
=======
import store from '../../store/store'
>>>>>>> 1a0f43f759f6a71d0314bd1c557c2549dd1e2255
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