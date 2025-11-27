"use client"

import { CheckoutForm } from "@/components/checkout/CheckoutForm"
import { useCartStore } from "@/store/cart"
import Image from "next/image"

export default function CheckoutPage() {
    const items = useCartStore((state) => state.items)

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Завършване на поръчката</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Checkout Form */}
                <div className="lg:col-span-2">
                    <CheckoutForm />
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:col-span-1">
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 sticky top-24">
                        <h2 className="text-xl font-semibold mb-4">Твоята поръчка</h2>

                        {items.length === 0 ? (
                            <p className="text-muted-foreground">Количката е празна.</p>
                        ) : (
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-start">
                                        <div className="relative h-16 w-12 flex-shrink-0 overflow-hidden rounded bg-muted">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
                                            <p className="text-xs text-muted-foreground">Брой: {item.quantity}</p>
                                        </div>
                                        <div className="text-sm font-bold">
                                            {(item.price * item.quantity).toFixed(2)} лв.
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
