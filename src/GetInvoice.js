import axios from 'axios';
import React, { useState } from 'react';
import searchResultSlice from './features/searchResults/searchResultSlice';

function GetInvoice() {
    const [url, setUrl] = useState('')
    const [cookiesQBP, setCookiesQBP] = useState()

    const handleChange = (e) => {
        setUrl(e.target.value)
    }

    async function authorizeQBP(e) {
        console.log(e.target.id)
        const options = {
            method: 'GET', 
            url: `http://localhost:8100/authorizeQBP`, 
            params: {
                url: url
            }
        };
        const response = await axios.request(options)
            try {
                setCookiesQBP(response.data)
            } catch(error) {
                console.log(error)
            }

    }

    async function LoadInvoice() {
        console.log(url)
        const options = {
            method: 'GET',
            url: 'http://localhost:8100/authorizeQBP',
            params: {
                url: url,
                // cookies: cookiesQBP
            }
        }
        const response = await axios.request(options)
            try {
                console.log(response)
            } catch(error) {
                console.log(error)
            }
     }



    return (
        <div>
            <h1>Invoice Requests</h1>
            <input onChange={handleChange} placeholder='url to load'></input>
            {/* <button id='loadInvoice' onClick={LoadInvoice}>ScreenShot Requests</button> */}

            <button id='authorizeQBP' onClick={LoadInvoice}>Get Authorization At QBP</button>
        </div>
    )
}

export default GetInvoice