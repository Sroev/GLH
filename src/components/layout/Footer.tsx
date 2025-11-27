import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-white/20 bg-white/40 backdrop-blur-lg">
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-bold text-primary mb-4">Good Life Hub</h3>
                        <p className="text-sm text-muted-foreground">
                            Твоето място за по-добър живот.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Категории</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/category/good-food" className="hover:text-primary">Добра Храна</Link></li>
                            <li><Link href="/category/good-money" className="hover:text-primary">Добри Пари</Link></li>
                            <li><Link href="/category/good-mind" className="hover:text-primary">Добър Ум</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Информация</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">За нас</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Контакти</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Общи условия</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Контакти</h4>
                        <p className="text-sm text-muted-foreground">
                            Email: hello@thegoodlifehub.online
                        </p>
                    </div>
                </div>

                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Good Life Hub. Всички права запазени.
                </div>
            </div>
        </footer>
    )
}
