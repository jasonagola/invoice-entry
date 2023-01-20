import React, {useEffect, useState} from 'react';
import { getInvoiceScrapeStatus } from '../utils/apiCalls';
import {format, isBefore} from 'date-fns'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { invoiceCheckQbp } from '../store/foundInvoices/foundInvoicesSlice';

function Dashboard() {
    const [invoiceScrapeStatus, setInvoiceScrapeStatus]  = useState()
    const dispatch = useDispatch()

    async function checkInvoiceScrapeStatus() {
        const response = await getInvoiceScrapeStatus()
        const invoiceScrapeStatusDate = new Date(response[0].date)
        setInvoiceScrapeStatus({
            outDated: isBefore(invoiceScrapeStatusDate, new Date()),
            date: format(invoiceScrapeStatusDate, 'MM/dd/yyyy')
        })
    }

    useEffect(() => {
        checkInvoiceScrapeStatus()
    },[])

    const handleClick = () => {
        /////Reconcile Invoices
    }

    

    if (invoiceScrapeStatus) {
        return (
            <div>
                <p>Invoices were last scraped on {invoiceScrapeStatus.date}</p>
                <Link to={'InvoiceBrowser'}><button onClick={handleClick}>Update Scrape Data in Invoice Broswer</button></Link>
            </div>
        )
    } else {
        return (
            <div>
                <p>Your Invoices were recently scraped</p>
                <Link to={"InvoiceBroswer"}><button>View Invoices</button></Link>
            </div>
        )
    }
}

export default Dashboard