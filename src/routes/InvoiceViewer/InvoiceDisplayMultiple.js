import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadedInvoice, getLoadedInvoiceStatus, getLoadedInvoiceVendor } from '../../store/loadedInvoice/loadedInvoiceSlice';
import MSRP from './MSRP';
import ItemMatch from './squareItemMatch';

function InvoiceDisplayMultiple(props) {
    const invoiceRequest = props.invoiceRequest
    const dispatch = useDispatch()

    const invoiceStatus = useSelector(getLoadedInvoiceStatus)
    const invoiceData = useSelector(getLoadedInvoice)
    const invoiceVendor = useSelector(getLoadedInvoiceVendor)
    console.log(invoiceVendor)


    if (invoiceData !== undefined) {

        return(
            <div id='loadedInvoice'>
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Name</th>
                            <th>Quantity Ordered</th>
                            <th>Unit Cost</th>
                            <th>Total</th>
                            <th>Item in Square</th>
                            <th>MRSP</th>
                        </tr>
                            
                    </thead>
                    <tbody>
                        {Object.values(invoiceData).map((item) => {
                            return (
                                <tr key={item.sku}> 
                                    <td>{item.sku}</td>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.unitCost}</td>
                                    <td>${item.quantity * item.unitCost}</td>
                                    <td>{<ItemMatch search={item.sku}/>}</td>
                                    <td>{<MSRP itemSku={item.sku} vendor={invoiceVendor}/>}</td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default InvoiceDisplayMultiple