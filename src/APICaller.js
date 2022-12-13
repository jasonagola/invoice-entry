import React, {useState} from 'react';
import axios from 'axios'
import RenderItems from './components/renderItems/RenderItems';

const url = 'localhost'

function APICaller() {
    const [search, setSearch] = useState(null)
    const [response, setResponse] = useState()
    const [responseStatus, setResponseStatus] = useState(false)

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
    }



    // function renderResult() {
    //     if (search === null) {
    //         return <p>Please Enter appropriate search parameters</p>
    //     } 

    //     if (responseStatus) {
            
    //     }
    // }

    const handleSearchChange = (e) => {
        const value = e.target.value
        setSearch(value)
    }


    return (
        <div>
            <input onChange={handleSearchChange}></input>
            <button onClick={searchItem}>Click Me to Search for Item</button>
            <h5>This Item Exists!</h5>
            <h5>This item is a variation: true or false</h5>
            <h5>Here are the item details</h5>
            <h5>Here are the variation details</h5>
            <p>Thie Response Status is: {responseStatus.toString()}</p>
            <RenderItems response={response} responseStatus={responseStatus}/>
        </div>
    )
    
}

export default APICaller