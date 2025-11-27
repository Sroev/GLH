import { Product } from "@/store/cart"

export const featuredProducts: Product[] = [
    {
        id: "1",
        name: "Добра Храна: 100 Рецепти за Здраве",
        price: 29.99,
        image: "/images/good-food.png",
        category: "Добра Храна",
    },
    {
        id: "2",
        name: "Добри Пари: Пътеводител към Финансова Свобода",
        price: 24.99,
        image: "/images/good-money.png",
        category: "Добри Пари",
    },
    {
        id: "3",
        name: "Добър Ум: Техники за Осъзнатост",
        price: 19.99,
        image: "/images/good-mind.png",
        category: "Добър Ум",
    },
]

export const categories = [
    { name: "Добра Храна", slug: "good-food", description: "Здравословни рецепти и съвети за хранене." },
    { name: "Добри Пари", slug: "good-money", description: "Управление на личните финанси." },
    { name: "Добър Ум", slug: "good-mind", description: "Медитация и ментално здраве." },
    { name: "Добро Тяло", slug: "good-body", description: "Тренировки и физическа активност." },
    { name: "Добър Дом", slug: "good-home", description: "Идеи за уютен и организиран дом." },
    { name: "Добри Събития", slug: "good-events", description: "Срещи и дискусии на живо." },
]
