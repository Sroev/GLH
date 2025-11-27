"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SuccessPage() {
    return (
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center min-h-[60vh]">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <CheckCircle className="h-24 w-24 text-primary mb-6" />
            </motion.div>

            <h1 className="text-4xl font-bold mb-4">Благодарим за поръчката!</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
                Ще получиш имейл с потвърждение и детайли за доставката съвсем скоро.
            </p>

            <Link href="/">
                <Button size="lg">Към Началото</Button>
            </Link>
        </div>
    )
}
