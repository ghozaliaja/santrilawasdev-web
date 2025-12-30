import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#112240',
        paddingBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#112240',
    },
    subtitle: {
        fontSize: 12,
        color: '#666666',
        marginTop: 5,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    label: {
        width: 150,
        fontWeight: 'bold',
        fontSize: 12,
    },
    value: {
        fontSize: 12,
    },
    status: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#008000',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#008000',
        padding: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        right: 30,
        textAlign: 'center',
        fontSize: 10,
        color: '#999999',
    },
});

const InvoicePDF = ({ invoice }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.title}>Santri Lawas Dev</Text>
                <Text style={styles.subtitle}>Professional Web Development Agency</Text>
            </View>

            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.label}>Invoice ID:</Text>
                    <Text style={styles.value}>{invoice.id}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Client Name:</Text>
                    <Text style={styles.value}>{invoice.clientName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Project Name:</Text>
                    <Text style={styles.value}>{invoice.projectName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{invoice.email}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Date:</Text>
                    <Text style={styles.value}>{new Date().toLocaleDateString()}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.label}>Total Amount:</Text>
                    <Text style={styles.value}>Rp {invoice.totalAmount.toLocaleString()}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Amount Paid:</Text>
                    <Text style={styles.value}>Rp {invoice.paidAmount.toLocaleString()}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Remaining Balance:</Text>
                    <Text style={styles.value}>Rp {(invoice.totalAmount - invoice.paidAmount).toLocaleString()}</Text>
                </View>
            </View>

            <View style={styles.status}>
                <Text>STATUS: {invoice.status}</Text>
            </View>

            <Text style={styles.footer}>
                Thank you for your business! | Santri Lawas Dev
            </Text>
        </Page>
    </Document>
);

export default InvoicePDF;
