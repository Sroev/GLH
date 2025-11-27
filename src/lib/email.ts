import { Resend } from 'resend';
import { OrderConfirmationTemplate } from '@/components/email/OrderConfirmationTemplate';

// Note: RESEND_API_KEY must be set in Vercel Environment Variables for production emails.
const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

interface SendOrderConfirmationParams {
    email: string;
    name: string;
    orderId: string;
    items: any[];
    total: number;
    deliveryMethod: string;
    deliveryCost: number;
}

export async function sendOrderConfirmation({
    email,
    name,
    orderId,
    items,
    total,
    deliveryMethod,
    deliveryCost,
}: SendOrderConfirmationParams) {
    // If no API key is present, log to console (Development Mode)
    if (!resend) {
        console.log('---------------------------------------------------');
        console.log('📧 [MOCK EMAIL] Order Confirmation');
        console.log(`To: ${name} <${email}>`);
        console.log(`Subject: Поръчка #${orderId} - The Good Life Hub`);
        console.log('---------------------------------------------------');
        console.log('Items:', JSON.stringify(items, null, 2));
        console.log(`Total: ${(total + deliveryCost).toFixed(2)} лв.`);
        console.log('---------------------------------------------------');
        return { success: true, id: 'mock-id' };
    }

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // Default testing domain
            to: [email],
            subject: `Поръчка #${orderId} - The Good Life Hub`,
            react: OrderConfirmationTemplate({
                customerName: name,
                orderId,
                items,
                total,
                deliveryMethod,
                deliveryCost,
            }),
        });

        return { success: true, data };
    } catch (error) {
        console.error('Failed to send email:', error);
        return { success: false, error };
    }
}
