import React, {useState} from 'react'
import ItemMatch from './InvoiceViewer/squareItemMatch';

function JBIUploader() {
    const vendor = 'JBI'
    const [invoiceNumber, setInvoiceNumber] = useState()
    const [file, setFile] = useState({})
    const [invoiceItems, setInvoiceItems] = useState([])

    const fileReader = new FileReader();

    const handleInvoiceNumberChange = (e) => {
        setInvoiceNumber(e.target.value)
    }

    const handleOnChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleOnSubmit = (e) => {
        console.log('Submit Button Clicked')
        e.preventDefault()

        console.log(file)
        if (file) {
            fileReader.onload = function (event) {
                const csvText = event.target.result
                console.log(csvText)
                csvFileToArray(csvText)
            };

            fileReader.readAsText(file)
        }
    }

    const headerKeys = Object.keys(Object.assign({}, ...invoiceItems))

    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    
        const array = csvRows.map(i => {
          const values = i.split(",");
          const obj = csvHeader.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
          }, {});
          return obj;
        });
        console.log(array[0][" Unit Price"])
        setInvoiceItems(array);
        
      };


    

    return (
        <div>
            <form>
                <input 
                    type='file'
                    id='csvFile'
                    accept='.csv'
                    onChange={handleOnChange}
                />

                <button
                    onClick={(e) => {
                        handleOnSubmit(e)
                    }}
                >
                    Import JBI CSV
                </button>
            </form>

            <input type='text' id='invoiceNumber' onChange={handleInvoiceNumberChange}/>

            <table>
                <thead>
                <tr key={"header"}>
                    {headerKeys.map((key) => (
                    <th>{key}</th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {invoiceItems.map((item) => (
                    <tr key={item.id}>
                    {Object.values(item).map((val) => (
                        <td>{val}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>

            <a href={`/InvoiceViewer/${vendor}/${invoiceNumber}`}><button>HIT ME TO ANALYZE INVOICE</button></a>
        </div>
                
        
            
            /* {Object.values(invoiceData).map((item) => {
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
                        })} */
    )
}

export default JBIUploader