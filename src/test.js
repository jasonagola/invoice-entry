import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchInvoices, selectAllDatabaseInvoices } from './features/databaseInvoices/databaseInvoicesSlice';
import store from './features/store';

function TestBehavior() {
    const runTest = () => {
        
    }

    return (
        <button onClick={runTest}>Run Test</button>
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