import X2JS from 'x2js';
import {format, subDays} from 'date-fns';
import { getQbpInvoices } from './apiCalls';


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