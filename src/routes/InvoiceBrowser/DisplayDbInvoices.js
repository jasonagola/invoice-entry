import React from 'react'
import {useSelector} from 'react-redux'
import { selectAllDatabaseInvoices } from '../../store/databaseInvoices/databaseInvoicesSlice'
import {format} from 'date-fns'
import '../../routes/App.css'

function DisplayDbInvoices() {
    const dbInvoices = useSelector(selectAllDatabaseInvoices)

    const handleClick = (e) => {
        console.log(e.target.value)
    }
    
    return (
        <div id='databaseInvoices'>
            <table>
                <thead>
                    <tr>
                        <th>Invoice ID</th>
                        <th>Vendor</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Processed</th>
                    </tr>
                </thead>
                <tbody>
                    {dbInvoices.map((invoice, idx) => {
                        return (
                            <tr key={idx} id={invoice.Invoice_ID}>
                                <td><a href={`/InvoiceViewer/${invoice.Vendor}/${invoice.Invoice_ID}`}>{invoice.Invoice_ID}</a></td>
                                <td>{invoice.Vendor}</td>
                                <td>{format(new Date(invoice.Invoice_Date), 'MM/dd/yyyy')}</td>
                                <td>{invoice.Invoice_Total}</td>
                                <td>{invoice.Processed === 0 ? <button onClick={handleClick}value={invoice.Invoice_ID}>No</button>:<a>Yes</a>}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default DisplayDbInvoices