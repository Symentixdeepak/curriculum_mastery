'use client'

import { useEffect } from 'react'

interface CashfreePayButtonProps {
  courseId: string;
  courseTitle: string;
  amount: string;
  className?: string;
  children: React.ReactNode;
}

export default function CashfreePayButton({ 
  courseId, 
  courseTitle, 
  amount, 
  className = "",
  children 
}: CashfreePayButtonProps) {
  
  const handlePayment = async () => {
    // Debug logging
    console.log('Course ID:', courseId);
    console.log('Course Title:', courseTitle);
    console.log('Amount received:', amount);
    console.log('Amount type:', typeof amount);
    
    // Store course information in sessionStorage for Cashfree
    const courseData = {
      id: courseId,
      title: courseTitle,
      amount: amount,
      timestamp: new Date().toISOString()
    };
    
    sessionStorage.setItem('selectedCourse', JSON.stringify(courseData));
    
    // Create a unique order ID
    const orderId = `${courseId}-${Date.now()}`;
    
    // Store order details
    const orderData = {
      orderId,
      courseId,
      courseTitle,
      amount: parseInt(amount),
      currency: 'INR',
      timestamp: new Date().toISOString()
    };
    
    sessionStorage.setItem('cashfreeOrder', JSON.stringify(orderData));
    
    // Navigate to Cashfree payment form without query parameters
    const paymentUrl = 'https://payments.cashfree.com/forms?code=pay_form';
    console.log('Payment URL:', paymentUrl);
    
    // Navigate to Cashfree payment form in same tab
    window.location.href = paymentUrl;
  };

  return (
    <button
      onClick={handlePayment}
      className={className}
    >
      {children}
    </button>
  );
}
