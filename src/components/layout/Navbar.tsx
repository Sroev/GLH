"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useCartStore } from "@/store/cart"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const cartItems = useCartStore((state) => state.items)
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    const categories = [
        { name: "Good Food", href: "/category/good-food" },
        { name: "Good Money", href: "/category/good-money" },
        { name: "Good Mind", href: "/category/good-mind" },
        { name: "Good Body", href: "/category/good-body" },
        { name: "Good Home", href: "/category/good-home" },
        { name: "Good Events", href: "/category/good-events" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Good Life Hub"
                        width={80}
                        height={80}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.href}
                            href={cat.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="/checkout">
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t bg-background"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.href}
                                    href={cat.href}
                                    className="text-sm font-medium text-foreground hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {cat.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
