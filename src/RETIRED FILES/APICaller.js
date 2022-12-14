import React, {useState} from 'react';
import axios from 'axios'
import RenderItems from '../components/renderItems/RenderItems';

const url = 'localhost'

function APICaller() {
    const [search, setSearch] = useState(null)
    const [response, setResponse] = useState()
    const [responseStatus, setResponseStatus] = useState(false)

    async function handleSearch() {
        await searchItem()
    }
    
    
    async function searchItem() {
        const options = {
            method: 'GET', 
            url: 'http://localhost:8000/searchItem', 
            params: {
                search: search
            }
        };

        const responseBody = await axios.request(options)
        ///Can Retrieve Item Data for Each Item Listed
        const responseObject = {}
        // console.log(responseBody.data)
        Object.values(responseBody.data).forEach((item) => {
            responseObject[item.id] = item.itemData
        })
        setResponse(responseObject)
        setResponseStatus('true')
        verifyMatch(responseObject)
    }


    const handleSearchChange = (e) => {
        const value = e.target.value
        setSearch(value)
    }

    function verifyMatch(response) {
        Object.values(response).map((item) => {
            Object.values(item.variations).forEach((variation) => {
                const variationData = variation.itemVariationData
                if (search === variationData.sku) {
                    console.log(`Match found Item: ${item.name} has variation ${variationData.name} with SKU:${variationData.sku} that matches your search term`)
                }
            }) 
        })
    }




    return (
        <div>
            <input onChange={handleSearchChange}></input>
            <button onClick={handleSearch}>Click Me to Search for Item</button>
            <p>Thie Response Status is: {responseStatus.toString()}</p>
            <RenderItems response={response} responseStatus={responseStatus}/>
        </div>
    )
    
}

export default APICaller