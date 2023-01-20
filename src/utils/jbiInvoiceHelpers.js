export function jbiInvoicetoJSON(xmlResponse) {
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
