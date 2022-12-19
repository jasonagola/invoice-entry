import X2JS from 'x2js';
import {format, subDays} from 'date-fns';
import { getQbpInvoices } from './apiCalls';


///Product By SKU XML to JSON
export function convertQbpXMLtoJSON(xmlResponse) {
    const convert = new X2JS()
    const json = convert.xml2js(xmlResponse)
    return json
}

export async function getDefaultQbpInvoices() {
    const todayDate = format(new Date(), 'MM/dd/yyyy')
    const lastThirtyDaysDate = format(subDays(new Date(), 30), 'MM/dd/yyyy')
    const response = await getQbpInvoices(todayDate, lastThirtyDaysDate)
    const invoicesObject = convertQbpXMLtoJSON(response)
    return invoicesObject
}