import React, { useEffect, useState } from 'react'
import { searchItem } from './apiCalls'
import { updateSquareStatus } from './features/loadedInvoice/loadedInvoiceSlice'
import store from './features/store'


///Can afford a logic rewrite so as not to Object.values twice for empty and for item iteration. Can return out of function after match found

function ItemMatch(props) {
    const [inSquare, setInSquare] = useState('awaiting...')
    const searchString = props.search

    async function verifyMatch() {
        const response = await searchItem(searchString)
        console.log(response)
        if (Object.values(response).length === 0) {
            setInSquare('No')
            return console.log('Response was empty, object does not exist.')
        }
        console.log('Attempting to find Match')
        Object.values(response).map((item) => {
            console.log(item)
            Object.values(item.variations).forEach((variation) => {
                const variationData = variation.itemVariationData
                if (searchString === variationData.sku) {
                    setInSquare('Match Found')
                    store.dispatch(updateSquareStatus({itemID:searchString, inSquare: true}))
                    console.log(`Match found Item: ${item.name} has variation ${variationData.name} with SKU:${variationData.sku} that matches your search term`)
                }
            }) 
        })
        }

    if (searchString !== 'undefined' && inSquare === "awaiting...") {
        verifyMatch()
    }
    


    return (
        <p>{inSquare}</p>
    )
}

export default ItemMatch
