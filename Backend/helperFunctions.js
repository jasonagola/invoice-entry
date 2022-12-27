const X2JS = require(X2JS)

export function convertQbpXMLtoJSON(xmlResponse) {
    const convert = new X2JS()
    const json = convert.xml2js(xmlResponse)
    return json
}

