import { NextResponse } from 'next/server';
import midtransClient from 'midtrans-client';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

let snap;

function getSnap() {
    if (!snap) {
        snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: process.env.MIDTRANS_SERVER_KEY,
            clientKey: process.env.MIDTRANS_CLIENT_KEY,
        });
    }
    return snap;
}

export async function POST(request) {
    try {
        const { id } = await request.json();

        const invoice = await prisma.projectInvoice.findUnique({
            where: { id },
        });

        if (!invoice) {
            return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
        }

        const remainingBalance = invoice.totalAmount - invoice.paidAmount;

        if (remainingBalance <= 0) {
            return NextResponse.json({ error: 'Invoice already paid' }, { status: 400 });
        }

        const parameter = {
            transaction_details: {
                order_id: `PAY-${invoice.id}-${Date.now()}`,
                gross_amount: remainingBalance,
            },
            customer_details: {
                first_name: invoice.clientName,
                email: invoice.email,
            },
            item_details: [
                {
                    id: `INV-${invoice.id}`,
                    price: remainingBalance,
                    quantity: 1,
                    name: `Payment for ${invoice.projectName}`,
                },
            ],
        };

        const token = await getSnap().createTransaction(parameter);

        return NextResponse.json({ token: token.token });
    } catch (error) {
        console.error('Midtrans Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
