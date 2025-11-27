"use client"

import { CreditCard, Banknote } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaymentSelectorProps {
    selected: string
    onSelect: (id: string) => void
}

export function PaymentSelector({ selected, onSelect }: PaymentSelectorProps) {
    return (
        <div className="space-y-4">
            <div
                className={cn(
                    "flex items-center gap-4 rounded-lg border p-4 cursor-pointer transition-colors",
                    selected === "card" ? "border-primary bg-accent/20" : "border-input hover:bg-accent/10"
                )}
                onClick={() => onSelect("card")}
            >
                <CreditCard className="h-6 w-6 text-primary" />
                <div className="flex-1">
                    <h3 className="font-medium">Плащане с карта (Stripe)</h3>
                    <p className="text-sm text-muted-foreground">Сигурно плащане с кредитна/дебитна карта.</p>
                </div>
            </div>

            <div
                className={cn(
                    "flex items-center gap-4 rounded-lg border p-4 cursor-pointer transition-colors",
                    selected === "cod" ? "border-primary bg-accent/20" : "border-input hover:bg-accent/10"
                )}
                onClick={() => onSelect("cod")}
            >
                <Banknote className="h-6 w-6 text-green-600" />
                <div className="flex-1">
                    <h3 className="font-medium">Наложен платеж</h3>
                    <p className="text-sm text-muted-foreground">Плати в брой при доставка.</p>
                </div>
            </div>
        </div>
    )
}
