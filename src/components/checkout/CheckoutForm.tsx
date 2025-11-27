"use client"

import { useState } from "react"
import { useCartStore } from "@/store/cart"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DeliverySelector } from "./DeliverySelector"
import { PaymentSelector } from "./PaymentSelector"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { placeOrder } from "@/actions/place-order"

export function CheckoutForm() {
    const router = useRouter()
    const { items, total, clearCart } = useCartStore()
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
    })
    const [delivery, setDelivery] = useState("speedy")
    const [payment, setPayment] = useState("cod")
    const [isProcessing, setIsProcessing] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)

        try {
            const result = await placeOrder({ ...formData, delivery }, items)

            if (result.success) {
                if (result.emailError) {
                    alert(`Поръчката е приета, но имейлът не можа да бъде изпратен: ${JSON.stringify(result.emailError)}`)
                }
                clearCart()
                router.push("/checkout/success")
            } else {
                alert("Възникна грешка при поръчката. Моля, опитайте отново.")
            }
        } catch (error) {
            console.error(error)
            alert("Възникна грешка. Моля, опитайте отново.")
        } finally {
            setIsProcessing(false)
        }
    }

    if (items.length === 0) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Количката е празна</h2>
                <Button onClick={() => router.push("/")}>Към магазина</Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Personal Details */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm">1</span>
                    Лични Данни
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Име и Фамилия</label>
                        <Input required name="name" value={formData.name} onChange={handleInputChange} placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Телефон</label>
                        <Input required name="phone" value={formData.phone} onChange={handleInputChange} placeholder="0888 123 456" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="ivan@example.com" />
                    </div>
                </div>
            </div>

            {/* Step 2: Delivery */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm">2</span>
                    Доставка
                </h2>
                <DeliverySelector selected={delivery} onSelect={setDelivery} />

                {/* Address Fields based on selection */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">
                            {delivery === "boxnow" ? "Номер на автомат / Локация" : "Адрес за доставка / Офис"}
                        </label>
                        <Input required name="address" value={formData.address} onChange={handleInputChange} placeholder={delivery === "boxnow" ? "Избери автомат..." : "ул. Примерна 1, бл. 5"} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Град</label>
                        <Input required name="city" value={formData.city} onChange={handleInputChange} placeholder="София" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Пощенски код</label>
                        <Input required name="zip" value={formData.zip} onChange={handleInputChange} placeholder="1000" />
                    </div>
                </div>
            </div>

            {/* Step 3: Payment */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm">3</span>
                    Плащане
                </h2>
                <PaymentSelector selected={payment} onSelect={setPayment} />
            </div>

            {/* Summary & Submit */}
            <div className="rounded-lg border bg-secondary/20 p-6">
                <div className="flex justify-between mb-2">
                    <span>Междинна сума:</span>
                    <span>{total().toFixed(2)} лв.</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span>Доставка ({delivery}):</span>
                    <span>
                        {delivery === "speedy" ? "5.00" : delivery === "econt" ? "6.00" : "3.00"} лв.
                    </span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t pt-4 mb-6">
                    <span>Общо:</span>
                    <span>
                        {(total() + (delivery === "speedy" ? 5 : delivery === "econt" ? 6 : 3)).toFixed(2)} лв.
                    </span>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg" disabled={isProcessing}>
                    {isProcessing ? "Обработване..." : "Поръчай Сега"}
                </Button>
            </div>
        </form>
    )
}
