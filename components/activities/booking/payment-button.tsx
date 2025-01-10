'use client';
import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

const PaymentButton: React.FC = () => {
    const router = useRouter();

    const handlePayment = () => {
        // Handle payment logic here
        router.push('/payment');
    };

    return (
        <Button variant="contained" color="primary" onClick={handlePayment}>
            Proceed to Payment
        </Button>
    );
};

export default PaymentButton;
// Rest of the existing code...