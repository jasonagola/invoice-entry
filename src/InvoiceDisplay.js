import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { getLoadedInvoice } from './features/loadedInvoice/loadedInvoiceSlice';
import ItemMatch from './squareItemMatch';
import './InvoiceDisplay.css'

function InvoiceDisplay(props) {
    
    const [invoiceData, setInvoiceData] = useState('')

    useEffect(() => {
        setInvoiceData(props.invoiceParsed)
    })

    const baseUrl = 'https://www.qbp.com/qbponlinestorefront/'
    
    if (invoiceData !== undefined) {

    return (
        <div id='invoiceResults'>
            <table>
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Quantity Ordered</th>
                        <th>Unit Cost</th>
                        <th>Total</th>
                        <th>Item in Square</th>
                        <th>MRSP</th>
                    </tr>
                        
                </thead>
                <tbody>
                    {Object.values(invoiceData).map((item) => {
                        return (
                            <tr key={item.id}> 
                                <td><a href={`${baseUrl}${item.url}`}>{item.id}</a></td>
                                <td>{item.name}</td>
                                <td>{item.numberOrdered}</td>
                                <td>${item.unitCost}</td>
                                <td>${item.numberOrdered * item.unitCost}</td>
                                <td>{<ItemMatch search={item.id}/>}</td>
                                <td>MSRP</td>
                                
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        
        </div>
    )
}
}

export default InvoiceDisplay


