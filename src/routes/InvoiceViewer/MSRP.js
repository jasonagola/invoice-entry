import React, { useEffect, useState } from 'react'
import store from '../../store/store'
import { getItemMsrp } from '../../utils/apiCalls'

function MSRP(props) {
    const [msrp, setMsrp] = useState('Cheese')
    const vendor = props.vendor
    const itemSku = props.itemSku

    const storedMsrp = store.getState().loadedInvoice.invoice[itemSku].msrp


    useEffect(() => {
        compareMsrp()
    }, [])

    async function compareMsrp() {
        /////if returned is none then display warning no listed MSRP
        /////if returned MSRP is larger than current MSRP display warning
        if (storedMsrp == 0) {
            const vendorMsrp = await getItemMsrp(vendor, itemSku)
            console.log(vendorMsrp)
            setMsrp(vendorMsrp)
        }
    }


    return (
        <div>
            <p>{msrp}</p>
        </div>
    )
}

export default MSRP