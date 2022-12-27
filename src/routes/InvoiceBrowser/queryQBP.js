import React from 'react';
import { invoiceCheckQbp } from '../../store/foundInvoices/foundInvoicesSlice';
import store from '../../store/store';
import { format } from 'date-fns'
import {getQbpInvoices} from '../../utils/apiCalls'

function QueryQBP() {

    const handleClick = async () => {
        const startDate = format(new Date(document.getElementById('startDate').value), 'MM/dd/yyyy')
        const endDate = format(new Date(document.getElementById('endDate').value), 'MM/dd/yyyy')
        const dates = {endDate, startDate}
        store.dispatch(invoiceCheckQbp(dates))
    }

    return(
        <div>
            <h2>Query QBP invoice API</h2>
            <label htmlFor='startDate'>Start Date</label>
            <input id='startDate' type='date'></input>
            <label htmlFor='endDate'>End Date</label>
            <input id='endDate' type='date'></input>
            <button onClick={handleClick}>Fetch QBP invoices withing dates</button>
        </div>
    )
}


export default QueryQBP