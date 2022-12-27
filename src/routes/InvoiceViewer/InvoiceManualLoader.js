import React from 'react'
import { useDispatch } from 'react-redux'
import { loadInvoiceFromVendor } from '../../store/loadedInvoice/loadedInvoiceSlice'

function InvoiceManualLoader() {
    const dispatch = useDispatch()

    const handleClick = async () => {
        const invoiceNumber = document.getElementById('invoiceNumber').value
        const vendor = document.getElementById('vendors').value
        const invoiceRequest = {vendor, invoiceNumber}
        dispatch(loadInvoiceFromVendor(invoiceRequest))
    }

    return(
        <div>
            <h2>Invoice Manual Loader</h2>
            <select name="vendors" id="vendors">
                <option value="QBP">QBP</option>
                <option value="JBI">JBI</option>
                <option value="Velo Orange">Velo Orange</option>
                <option value="Vendor4">Something else</option>
            </select>
            <input autoComplete="off" id="invoiceNumber" type="text" placeholder="Invoice Number"></input>
            <button onClick={handleClick}>Grab Invoice</button>
        </div>
    )
}

export default InvoiceManualLoader