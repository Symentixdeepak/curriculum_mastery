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
    
    // Determine the form code based on course ID
    let formCode = 'pay_form'; // Default for Music Educators Course
    
    if (courseId === 'igcse-basic') {
      formCode = 'basic_form';
    } else if (courseId === 'igcse-advanced') {
      formCode = 'advance_form';
    } else if (courseId === 'ib-comprehensive') {
      formCode = 'comprehensive_form';
    }
    // For 'ib-igcse-educators', keep the default 'pay_form'
    
    // Navigate to Cashfree payment form with specific form code
    const paymentUrl = `https://payments.cashfree.com/forms?code=${formCode}`;
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
