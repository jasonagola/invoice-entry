import React from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {

    return(
        <div id="navbar">
            <Link to='/'>Dashboard</Link>
            <Link to={'InvoiceBrowser'}>Invoice Browser</Link>
            <Link to={'InvoiceViewer'}>Invoice Viewer</Link>
            <Link to={'SquareItemBrowser'}>Square Items</Link>
        </div>
    )
}

export default NavBar