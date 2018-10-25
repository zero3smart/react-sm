import React from 'react';
import './index.css';

export default class InvoiceItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.invoice.date}</td>
                <td><a href={`./invoices/${this.props.invoice.invoiceNumber}`} target="_blank">{this.props.invoice.invoiceNumber}</a></td>
                <td>{this.props.invoice.name}</td>
                {this.props.invoice.currency === "$" ?
                    <td>{this.props.invoice.currency}{this.props.invoice.amount.toFixed(2)}</td> :
                    <td>{this.props.invoice.amount.toFixed(2)}{this.props.invoice.currency}</td>
                }
                {this.props.invoice.status === "PAID" && <td className="greenStatus">{this.props.invoice.status}</td>}
                {this.props.invoice.status  === "TO PAY" && <td className="redStatus">{this.props.invoice.status}</td>}
                {this.props.invoice.status  === "PARTIALLY PAID" && <td className="orangeStatus">{this.props.invoice.status}</td>}
            </tr>
        );
    }
}



