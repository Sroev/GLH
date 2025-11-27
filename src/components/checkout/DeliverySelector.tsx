"use client"

import { Truck, Box } from "lucide-react"
import { cn } from "@/lib/utils"

interface DeliveryOption {
    id: string
    name: string
    price: number
    icon: React.ReactNode
    description: string
}

const deliveryOptions: DeliveryOption[] = [
    {
        id: "speedy",
        name: "Speedy",
        price: 5.00,
        icon: <Truck className="h-6 w-6" />,
        description: "Доставка до офис или адрес със Спиди."
    },
    {
        id: "econt",
        name: "Econt",
        price: 6.00,
        icon: <Truck className="h-6 w-6 text-blue-600" />,
        description: "Доставка до офис или адрес с Еконт."
    },
    {
        id: "boxnow",
        name: "BoxNow",
        price: 3.00,
        icon: <Box className="h-6 w-6 text-green-600" />,
        description: "Доставка до автомат на BoxNow (24/7)."
    }
]

interface DeliverySelectorProps {
    selected: string
    onSelect: (id: string) => void
}

export function DeliverySelector({ selected, onSelect }: DeliverySelectorProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-3">
            {deliveryOptions.map((option) => (
                <div
                    key={option.id}
                    className={cn(
                        "relative flex flex-col items-center justify-between rounded-xl border-2 p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all",
                        selected === option.id ? "border-primary bg-accent/50" : "border-muted bg-transparent"
                    )}
                    onClick={() => onSelect(option.id)}
                >
                    <div className="mb-3 rounded-full bg-background p-2 shadow-sm">
                        {option.icon}
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold">{option.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                    </div>
                    <div className="mt-4 font-bold text-primary">
                        {option.price.toFixed(2)} лв.
                    </div>
                </div>
            ))}
        </div>
    )
}
