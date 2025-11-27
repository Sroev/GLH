"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCartStore, Product } from "@/store/cart"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem)

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg"
        >
            <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />
            </div>
            <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                        {product.category}
                    </span>
                    <span className="font-bold text-lg text-primary">
                        {product.price.toFixed(2)} лв.
                    </span>
                </div>
                <h3 className="text-lg font-semibold leading-tight mb-4 line-clamp-2">
                    {product.name}
                </h3>
                <Button
                    onClick={() => addItem(product)}
                    className="w-full gap-2"
                >
                    <ShoppingCart className="h-4 w-4" />
                    Добави
                </Button>
            </div>
        </motion.div>
    )
}
