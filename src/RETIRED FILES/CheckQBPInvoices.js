import React from 'react'
import {format, subDays} from 'date-fns'
import { getQbpInvoices } from '../utils/apiCalls'
import { convertQbpXMLtoJSON } from '../utils/qbpInvoiceHelpers'

function CheckQBPInvoices() {

    const defaultDates = () => {
        const todayDate = format(new Date(), 'MM/dd/yyyy')
        const lastThirtyDaysDate = format(subDays(new Date(), 30), 'MM/dd/yyyy')
        console.log(lastThirtyDaysDate)
        return [todayDate, lastThirtyDaysDate]
        

    }
    
    const getNewQbpInvoices = async () => {
       const [todaysDate, lastThirtyDaysDate] = defaultDates()
       const response = await getQbpInvoices(todaysDate, lastThirtyDaysDate)
       const invoicesObject = convertQbpXMLtoJSON(response)
       console.log(invoicesObject)
       
    }

    const getQbpInvoice = async () => {
        // const response = await getQbpInvoice(invoiceNumber)
    }


    return (
        <div>
            <button onClick={getNewQbpInvoices}>Check for new QBP invoices</button>

            <input id="qbpInvoiceNumber" placeholder='Search By QBP Invoice Number'></input>
            <button onClick={getQbpInvoice}>Get QBP invoice by invoice ID</button>
        </div>
    )
}

export default CheckQBPInvoices