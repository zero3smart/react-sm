import React from 'react';
import InvoiceItem from './components/invoice_item';
import * as invoices from '../../../../json/invoices.json';
import './index.css';

export default class InvoicesList extends React.Component {
    render() {
        return (
            <div className="content pt-2">
                <h1>Invoices</h1>
                <div className="wrapper-center">
                    <table className="table table-bordered" id="invoicesTable">
                        <tbody>
                        <tr>
                            <td>Date</td>
                            <td>Invoice #</td>
                            <td>Name</td>
                            <td>Amount</td>
                            <td>Status</td>
                        </tr>
                        {invoices.invoices.map( (invoice,index) => (
                            <InvoiceItem key={index} invoice={invoice} />
                        ))}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}
