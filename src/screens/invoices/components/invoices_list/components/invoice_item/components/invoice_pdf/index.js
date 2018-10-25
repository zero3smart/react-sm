import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as invoice from '../../../../../../../../json/invoice.json';
import './index.css';

export default class InvoicePdf extends React.Component {
    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
        ;
    }

    render() {
        const location = this.props.match.params.invoiceId;
        console.log(location);

        return (
            <div className="background-pdf">
                <div className="mb5">
                    <button onClick={this.printDocument}>DOWNLOAD INVOICE</button>
                </div>
                {invoice.invoice.map( (invoice,index) => (
                    <div>
                        {invoice.number === location &&
                        <div id="divToPrint" className="mt4">
                            <div className="row">
                                <div className="row col-lg-12">
                                    <div className="col-lg-8">
                                        <img className="logo" src={require('../../../../../../../../img/gae-logo-blue.png')}
                                             alt="gsc-logo"/>
                                    </div>
                                    <div className="col-lg-5 invoice-number-and-status">
                                        <p className="invoice-number"><strong>Invoice #: {invoice.number}</strong></p>
                                        {invoice.status === "PAID" &&
                                        <img src={require('../../../../../../../../img/invoice-validate.png')} alt="paid-background"/>
                                        }
                                        {invoice.status === "TO PAY" &&
                                        <img src={require('../../../../../../../../img/invoice-not-paid.png')} alt="to-pay-background"/>
                                        }
                                        {invoice.status === "PARTIALLY PAID" &&
                                        <img src={require('../../../../../../../../img/invoice-partially-paid.png')} alt="partially-paid"/>
                                        }
                                        <p className="invoice-status">{invoice.status}</p>
                                    </div>
                                </div>
                                <div className="enterprise-adress col-lg-6">
                                    <p>Invoice Date : <strong>{invoice.date}</strong></p>
                                    <p>Terms : <strong>{invoice.terms}</strong></p>
                                    <p>Due date : <strong>{invoice.dueDate}</strong></p>
                                </div>
                                <div className="customer-adress col-lg-6">
                                    <p>Bill to </p>
                                    <p><strong>{invoice.enterprise}</strong></p>
                                    <p className="customer-domain">{invoice.domain}</p>
                                    <p>{invoice.enterpriseAdress}</p>
                                    <p>{invoice.zipCode}</p>
                                    <p>{invoice.city}</p>
                                    <p>{invoice.state}</p>
                                    <p>{invoice.country}</p>
                                </div>
                            </div>
                            <div className="row col-lg-12">
                                <p><strong>Delivered Items :</strong></p>
                            </div>
                            <div className="row col-lg-12">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Order</th>
                                        <th>Quantity</th>
                                        <th>Rate</th>
                                        <th>Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {invoice.items.map((item, index) => (
                                        <tr>
                                            <td>
                                                {item.orderName === "G Suite®" ?
                                                    <img src={require('../../../../../../../../img/g-suite.png')} alt="subscription-logo"/> :
                                                    <img src={require('../../../../../../../../img/shared-contact-for-gmail-pic.png')} alt="subscription-logo"/>
                                                }
                                                <div>
                                                    <p><strong>{item.orderName}</strong></p>
                                                    <p>{item.orderVersion}</p>
                                                    <p>{item.orderStartDate} - {item.orderEndDate}</p>
                                                    <p>{item.orderDomain}</p>
                                                </div>
                                            </td>
                                            <td><a href="">{item.orderNumber}</a></td>
                                            <td>{item.licences}</td>
                                            <td>{item.currency}{item.total}</td>
                                            <td>{item.currency}{item.total}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="grand-total">
                                <div>
                                    <p><span>Total:</span> {invoice.currency}{invoice.grandTotal}</p>
                                    <p><span>TOTAL PAID:</span> {invoice.currency}{invoice.grandTotal}</p>
                                    <p><span>Balance due:</span> {invoice.currency}{invoice.grandTotal}</p>
                                </div>
                            </div>
                            {invoice.status === "PAID" ?
                                <div className="row paid-status">
                                    <img className="paid" src={require('../../../../../../../../img/paid.png')}
                                         alt="gsc-logo"/>
                                </div>
                                :
                                <div className="row paid-status">
                                </div>
                            }
                            <div>
                            </div>
                            <div className="footer">
                                <div className="row">
                                    <p>19 West 34th Street <span>|</span> Suite 1018 New York, New York, 10001 U.S.A <span>|</span> +1-50-62-17731</p>
                                    <p>GAPPS EXPERTS — BNP PARIBAS PARVIS DE LA DEFENSE | Bank Code : 30004 Code Box:02535 |Account Number 00010051203/06</p>
                                    <p>IBAN : FR 76 3000 4025 3200 0100 5120 306 - BIC : BNPAFRPPDEF</p>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                ))}
            </div>
        );
    }
}
