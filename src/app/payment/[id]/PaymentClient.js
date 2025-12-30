'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from '@/components/InvoicePDF';

export default function PaymentClient({ invoice }) {
    const [isSnapLoaded, setIsSnapLoaded] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(invoice.status); // PENDING or PAID
    const [paidAmount, setPaidAmount] = useState(invoice.paidAmount);

    useEffect(() => {
        // Check if Snap script is already loaded
        if (window.snap) {
            setIsSnapLoaded(true);
        }
    }, []);

    const handlePay = async () => {
        if (!isSnapLoaded) {
            alert('Payment system is loading, please wait...');
            return;
        }

        try {
            const response = await fetch('/api/payment/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: invoice.id }),
            });

            const data = await response.json();

            if (data.error) {
                alert(data.error);
                return;
            }

            window.snap.pay(data.token, {
                onSuccess: function (result) {
                    console.log('Payment success:', result);
                    setPaymentStatus('PAID');
                    setPaidAmount(invoice.totalAmount); // Assuming full payment for simplicity
                    alert('Payment successful!');
                },
                onPending: function (result) {
                    console.log('Payment pending:', result);
                    alert('Payment pending...');
                },
                onError: function (result) {
                    console.log('Payment error:', result);
                    alert('Payment failed!');
                },
                onClose: function () {
                    console.log('Customer closed the popup without finishing the payment');
                },
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong');
        }
    };

    const remainingBalance = invoice.totalAmount - paidAmount;

    // Updated invoice object for PDF
    const currentInvoice = {
        ...invoice,
        status: paymentStatus,
        paidAmount: paidAmount,
    };

    return (
        <>
            <Script
                src="https://app.sandbox.midtrans.com/snap/snap.js"
                data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
                onLoad={() => setIsSnapLoaded(true)}
            />

            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                <div className="bg-gray-900 text-white p-6">
                    <h1 className="text-2xl font-bold">Project Invoice</h1>
                    <p className="text-gray-400 text-sm mt-1">ID: {invoice.id}</p>
                </div>

                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">Client Name</p>
                            <p className="font-semibold text-gray-800">{invoice.clientName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Project Name</p>
                            <p className="font-semibold text-gray-800">{invoice.projectName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-semibold text-gray-800">{invoice.email}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Date</p>
                            <p className="font-semibold text-gray-800">
                                {new Date(invoice.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-200 my-4" />

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Total Amount</span>
                            <span className="font-medium">Rp {invoice.totalAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Already Paid</span>
                            <span className="font-medium text-green-600">
                                - Rp {paidAmount.toLocaleString()}
                            </span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2 mt-2">
                            <span>Remaining Balance</span>
                            <span className="text-blue-600">Rp {remainingBalance.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        {paymentStatus === 'PAID' || remainingBalance <= 0 ? (
                            <div className="space-y-4">
                                <div className="bg-green-100 text-green-800 p-4 rounded-md text-center font-bold">
                                    PAYMENT COMPLETED (LUNAS)
                                </div>
                                <div className="flex justify-center">
                                    <PDFDownloadLink
                                        document={<InvoicePDF invoice={currentInvoice} />}
                                        fileName={`invoice-${invoice.id}.pdf`}
                                        className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 flex items-center gap-2"
                                    >
                                        {({ blob, url, loading, error }) =>
                                            loading ? 'Generating Invoice...' : 'Download Invoice PDF'
                                        }
                                    </PDFDownloadLink>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={handlePay}
                                disabled={!isSnapLoaded}
                                className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isSnapLoaded ? 'Pay Now' : 'Loading Payment System...'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
