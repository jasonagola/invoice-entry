import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadedInvoice, loadInvoiceFromVendor } from '../../store/loadedInvoice/loadedInvoiceSlice';
import ItemMatch from '../SquareItemBrowser/squareItemMatch';

function InvoiceDisplayMultiple(props) {
    const [invoiceRequest, setInvoiceRequest] = useState()
    const dispatch = useDispatch()
    
    useEffect(() => { 
        // console.log(props.invoiceRequest) 
        setInvoiceRequest(props.invoiceRequest)     
    },[])

    useEffect(() => {
        if (invoiceRequest != undefined) {
            dispatch(loadInvoiceFromVendor(invoiceRequest))
        }
    }, [invoiceRequest])

    const invoiceData = useSelector(getLoadedInvoice)
    const loadedInvoiceStatus = props.loadedInvoiceStatus
    console.log(loadedInvoiceStatus)

    if (invoiceData != undefined) {

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
                                    <td>MSRP</td>
                                    
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