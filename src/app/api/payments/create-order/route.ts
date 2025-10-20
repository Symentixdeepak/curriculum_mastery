import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
// Note: Cashfree integration will be configured later
// For now, we'll create a mock payment flow

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { courseId, courseTitle, amount, currency } = await req.json()
    if (!courseId || !amount) {
      return NextResponse.json({ error: 'Course ID and amount required' }, { status: 400 })
    }

    // Get user and course details
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId }
    })

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 })
    }

    // Check if user is already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: course.id
        }
      }
    })

    if (existingEnrollment) {
      return NextResponse.json({ error: 'Already enrolled in this course' }, { status: 409 })
    }

    // Generate unique order ID
    const orderId = `order_${Date.now()}_${user.id.slice(-8)}`

    // Create payment record with the amount from frontend
    await prisma.payment.create({
      data: {
        orderId,
        amount: parseInt(amount),
        currency: currency || 'INR',
        status: 'CREATED',
        userId: user.id,
        provider: 'cashfree'
      }
    })

    // Create Cashfree payment URL with the correct amount
    const baseUrl = 'https://payments.cashfree.com/forms';
    const params = new URLSearchParams({
      code: 'pay_form',
      amount: amount,
      orderAmount: amount,
      currency: currency || 'INR',
      customerId: user.id,
      orderId: orderId
    });
    
    const paymentUrl = `${baseUrl}?${params.toString()}`;

    return NextResponse.json({
      orderId,
      paymentUrl,
      amount: parseInt(amount),
      currency: currency || 'INR'
    })

  } catch (error) {
    console.error('Payment order creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create payment order' },
      { status: 500 }
    )
  }
}
