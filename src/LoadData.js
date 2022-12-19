import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInvoices } from './features/databaseInvoices/databaseInvoicesSlice';
import { invoiceCheckQbp } from './features/foundInvoices/foundInvoicesSlice';

function LoadData() {
    /////Add date check to prevent scraping and unneccesary invoice loading. use Database to store log of data retrieval 
    ////Can add button override
    
    const dispatch = useDispatch()
    const invoiceStatus = useSelector(state => state.databaseInvoices.status)
    const qbpStatus = useSelector(state => state.foundInvoices.qbp.status)
    
    

    useEffect(() => {
        if (invoiceStatus === 'idle') {
            dispatch(fetchInvoices())
        }
    }, [invoiceStatus, dispatch])

    useEffect(() => {
        if (qbpStatus === 'idle') {
            dispatch(invoiceCheckQbp())
        }
    }, [qbpStatus, dispatch])


    if (invoiceStatus && qbpStatus === 'succeeded') {

        return (
            <div>
                Invoice Loading Complete
            </div>
        )
    } else {
        return (
            <div>Loading invoice data...</div>
        )
    }
}

export default LoadData