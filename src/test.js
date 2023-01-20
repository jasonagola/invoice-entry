import React, { useEffect } from 'react'
import { getItemMsrp } from './utils/apiCalls';

function TestBehavior() {
    const runTest = async () => {
        const response = await getItemMsrp('QBP', 'MA2066')
        console.log(response)
        
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