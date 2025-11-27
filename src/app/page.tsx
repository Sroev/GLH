"use client";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { featuredProducts, categories } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 mx-auto max-w-4xl"
        >
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl drop-shadow-sm">
            Твоят път към <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              По-добър Живот
            </span>
          </h1>

          <p className="mb-10 text-xl text-muted-foreground sm:text-2xl max-w-2xl mx-auto">
            Открий баланса между тяло, ум и финанси с нашите експертни ръководства и общност.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link href="/category/good-food">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                Разгледай Книгите
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 bg-white/50 backdrop-blur-sm hover:bg-white/80">
                Научи Повече
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 relative w-full max-w-5xl"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-white/30 backdrop-blur-md flex items-center justify-center">
            {/* Placeholder for a lifestyle hero image or 3D composition */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-500/5" />
            <div className="grid grid-cols-3 gap-8 p-8 items-end">
              <Image src="/images/good-food.png" alt="Good Food" width={300} height={400} className="object-contain drop-shadow-2xl transform hover:-translate-y-4 transition-transform duration-500" />
              <Image src="/images/good-money.png" alt="Good Money" width={300} height={400} className="object-contain drop-shadow-2xl z-10 scale-110 transform hover:-translate-y-4 transition-transform duration-500" />
              <Image src="/images/good-mind.png" alt="Good Mind" width={300} height={400} className="object-contain drop-shadow-2xl transform hover:-translate-y-4 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-[image:var(--gradient-section)]">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Нашите Категории
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Всичко необходимо за пълноценен живот
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Популярни Книги
              </h2>
              <p className="mt-2 text-muted-foreground">
                Най-четените заглавия този месец
              </p>
            </div>
            <Link href="/category/all">
              <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                Виж Всички →
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
