'use server'

import { sendOrderConfirmation } from "@/lib/email"

export async function placeOrder(formData: any, items: any[]) {
    try {
        // Calculate totals
        const subtotal = items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)

        let deliveryCost = 5.00
        if (formData.delivery === 'econt') deliveryCost = 6.00
        if (formData.delivery === 'boxnow') deliveryCost = 3.00

        // Generate a random order ID
        const orderId = Math.random().toString(36).substr(2, 9).toUpperCase()

        // Send email
        const emailResult = await sendOrderConfirmation({
            email: formData.email,
            name: formData.name,
            orderId,
            items,
            total: subtotal,
            deliveryMethod: formData.delivery,
            deliveryCost
        })

        if (!emailResult.success) {
            console.error("Email sending failed:", emailResult.error)
            // We might still want to return success if the order was "placed" but email failed, 
            // but for now let's treat it as a warning or just proceed.
        }

        return { success: true, orderId }
    } catch (error) {
        console.error("Order placement failed:", error)
        return { success: false, error: "Failed to place order" }
    }
}
