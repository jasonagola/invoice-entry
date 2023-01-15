import X2JS from 'x2js';
import {format, subDays} from 'date-fns';
import { getQbpInvoices } from './apiCalls';
import $ from 'jquery';



///Product By SKU XML to JSON
export function convertQbpXMLtoJSON(xmlResponse) {
    const convert = new X2JS()
    const json = convert.xml2js(xmlResponse)
    return json
}

const todayDate = format(new Date(), 'MM/dd/yyyy')
const lastThirtyDaysDate = format(subDays(new Date(), 30), 'MM/dd/yyyy')

export async function getDefaultQbpInvoices(endDate = lastThirtyDaysDate, startDate = todayDate) {
    const response = await getQbpInvoices(endDate, startDate)
    const invoicesObject = convertQbpXMLtoJSON(response)
    console.log(invoicesObject)
    return invoicesObject
}


export function qbpInvoiceXMLtoJSON(xmlResponse) {
    var xmlDoc = $.parseXML(xmlResponse)
    var $xml = $(xmlDoc)
    const items = $xml.find("line")
    var invoiceItems = {}
    for (let i = 0; i<items.length; i++) {
        const newItem = {};
        const itemSku = $(items[i]).find('sku').text()
        newItem["sku"] = itemSku
        newItem["description"] = $(items[i]).find('description').text()
        newItem["quantity"] = $(items[i]).find('quantityShipped').text()
        newItem["unitCost"] = $(items[i]).find('price').text()
        newItem['msrp'] = ''
        newItem["inSquare"] = false
        invoiceItems[itemSku] = newItem
    }
    return invoiceItems
   
}

export function qbpMsrpFromXML(xmlResponse) {
    var xmlDoc = $.parseXML(xmlResponse)
    var $xml = $(xmlDoc)
    const itemMsrp = $xml.find("msrp").find("value").text()
    console.log(itemMsrp)
    return itemMsrp
}