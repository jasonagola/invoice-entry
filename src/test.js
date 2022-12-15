import React from 'react'
import store from './features/store'
import {updateSquareStatus} from './features/loadedInvoice/loadedInvoiceSlice'
import { getPrices } from './apiCalls'
import {sampleInvoice} from './getMSRP'; 

function TestBehavior() {
    const url = '/qbponlinestorefront/p/MA2066'
    const id = 'MA2066'

    const runGetPrices = () => {
        getPrices(id, url)
    }

    return (
        <button onClick={runGetPrices}>GET SOME PRICES</button>
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