import React, {useEffect} from 'react';
import { checkInvoiceScrapeStatus } from './utils/onPageLoad';

function Dashboard() {
    useEffect(()=> {
        checkInvoiceScrapeStatus()
    })
}

export default Dashboard