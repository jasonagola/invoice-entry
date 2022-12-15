import React from 'react';
import getPrice from 'react'
import store from './features/store';


////instead of running for each component
// collate a item array with inSquare State false
// send array of links to puppeteer server
// run each and add them back with key and array 
// On return add MSRP as item to redux State

function MSRP(prop) {
    const sku = prop.sku
    // getMSRP from store.getState or selector function passing sku from parent as prop

    return (
        <div>
            getting item price...
        </div>
    )
}