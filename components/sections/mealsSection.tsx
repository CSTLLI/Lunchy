import {Badge, Button, Typography} from "@/components/ui";

const NavigationDetails = [
    {
        title: "Burgers",
        slug: "burgers"
    },
    {
        title: "Pizzas",
        slug: "pizzas"
    },
    {
        title: "Desserts",
        slug: "desserts"
    }
]
const mealsSection = () => {
    return (
        <section className="md:flex mt-8 gap-16 px-12">
            <div className="md:flex">
                <div className="flex-col">
                    <Typography variant="h3">A propos de nous</Typography>
                    <Typography variant="h2">Les merveilles qui vous font toujours plaisir</Typography>
                </div>
            </div>

        </section>
    )
}