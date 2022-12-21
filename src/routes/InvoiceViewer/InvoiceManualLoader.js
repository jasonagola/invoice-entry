import React from 'react'
import { getQbpInvoiceByNumber } from '../../utils/apiCalls'

function InvoiceManualLoader() {

    const handleClick = async () => {
        const invoiceNumber = document.getElementById('invoiceNumber').value
        const response = await getQbpInvoiceByNumber(invoiceNumber)
        console.log(response)
        
        console.log('Clicked button to fetch Invoice by Number')
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
            <input id="invoiceNumber" type="text" placeholder="Invoice Number"></input>
            <button onClick={handleClick}>Grab Invoice</button>
        </div>
    )
}

export default InvoiceManualLoader