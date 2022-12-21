import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoices, selectAllDatabaseInvoices } from './store/databaseInvoices/databaseInvoicesSlice';
import { selectAllQbpInvoices } from './store/foundInvoices/foundInvoicesSlice';
import { getAllDatabaseInvoices, insertNewInvoice } from './utils/apiCalls';
import {format} from 'date-fns'
import store from './store/store';

function InvoiceReconciliation() {
    ///find differences
    ///add new invoices to database
    const dispatch = useDispatch()
    const recentQbpInvoices = useSelector(selectAllQbpInvoices)
    const databaseInvoices = useSelector(selectAllDatabaseInvoices)
    
    useEffect(() => {
        reconcileQBP()
    }, [recentQbpInvoices])
    
    const reconcileQBP = async () => {
        for (let inv of recentQbpInvoices) {
            let match = 0
            for (let invDb of databaseInvoices) {
                // console.log(inv)
                // const invNumber = parseInt(inv.invoiceNumber)
                // console.log(inv.invoiceNumber)
                const invNumber = inv.invoiceNumber
                if (invNumber == invDb.Invoice_ID) {
                    match += 1
                    break
                } 
            }
            if (match === 0) {
                console.log(`Found new invoice from QBP: Invoice #${inv.invoiceNumber}.`)
                const invoiceDate = format(new Date(inv.invoiceDate), 'yyyy/MM/dd')
                console.log(invoiceDate)
                await insertNewInvoice(inv.invoiceNumber, 'QBP', invoiceDate, inv.invoiceTotal, 0)
                dispatch(await fetchInvoices())
            }
        }
    
    }
}


export default InvoiceReconciliation