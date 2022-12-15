import React from 'react'
import store from './features/store'
import {updateSquareStatus} from './features/loadedInvoice/loadedInvoiceSlice'
import { getPrices } from './apiCalls'
import {sampleInvoice} from './getMSRP'; 
import {getDatabase} from './apiCalls'
import { loadJBIInvoices } from './apiCalls'

function TestBehavior() {
    const runTest = () => {
        loadJBIInvoices()
    }

    return (
        <button onClick={runTest}>Access Database</button>
    )

}

export default TestBehavior




////Test for UpdateStateStatus
    ///function body
        // const changeInSquareStatus = () => {
        //     store.dispatch(updateSquareStatus({itemID:'DS1849', inSquare: true}))
        // }


    ///return 
        // <div>
        // <p>https://www.qbp.com/qbponlinestorefront/account/history/order/detail/0005Z66L?year=2022&month=12&page=1</p>
        // <button onClick={changeInSquareStatus}>Change Status</button>
        // </div>