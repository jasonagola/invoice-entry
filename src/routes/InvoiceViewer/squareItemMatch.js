import React, { useEffect, useState } from 'react'
import { searchItem } from '../../utils/apiCalls'
import { getLoadedInvoiceStatus, updateInSquare } from '../../store/loadedInvoice/loadedInvoiceSlice'
import store from '../../store/store'
import { useSelector } from 'react-redux'


///Can afford a logic rewrite so as not to Object.values twice for empty and for item iteration. Can return out of function after match found

function ItemMatch(props) {
    const searchString = props.search

    const [message, setMessage] = useState('awaiting...')
    const invoiceStatus = useSelector(getLoadedInvoiceStatus)

    const checkItemInSquareState = (state, sku) => {
        return state.loadedInvoice.invoice[sku].inSquare
    }

    const inSquare = useSelector(state => checkItemInSquareState(state, searchString))
    
    useEffect(() => {
        if (inSquare) {
            setMessage('Item Found in Square')
        } 
        if (!inSquare) {
            setMessage('Not in Library')
        }
    }, [inSquare])

    useEffect(() => {
        if (invoiceStatus && !inSquare) {
            verifyMatch()
        }
    }, [invoiceStatus])
    
    

    async function verifyMatch() {
        const response = await searchItem(searchString)
        if (Object.values(response).length === 0) {
            return
            // return console.log('Response was empty, object does not exist.')
        }
        // console.log('Attempting to find Match')
        Object.values(response).map((item) => {
            Object.values(item.variations).forEach((variation) => {
                const variationData = variation.itemVariationData
                if (searchString === variationData.sku) {
                    store.dispatch(updateInSquare({itemID:searchString, inSquare: true}))
                    // console.log(`Match found Item: ${item.description} has variation ${variationData.name} with SKU:${variationData.sku} that matches your search term`)
                }
            }) 
        })  
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default ItemMatch
