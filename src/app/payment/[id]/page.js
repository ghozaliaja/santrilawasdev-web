import prisma from '@/lib/prisma';
import PaymentClient from './PaymentClient';

export default async function PaymentPage({ params }) {
    const { id } = params;

    const invoice = await prisma.projectInvoice.findUnique({
        where: { id },
    });

    if (!invoice) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                    <p className="text-gray-600">Invoice not found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <PaymentClient invoice={invoice} />
        </div>
    );
}
