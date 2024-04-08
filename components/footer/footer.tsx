import Link from "next/link";
import Image from "next/image";
import {Typography} from "@/components/ui";

const Footer = () => {
    return (
        <footer className="md:flex gap-2 justify-between px-12">
            <div className="flex flex-col gap-6 w-1/4">
                <Link href="/" className="flex items-center space-x-6 gap-4">
                    <Image src="/logo.png" alt="logo" width={64} height={64}/>
                    <h2 className="font-bold">Lunchy</h2>
                </Link>
                <p>Notre job consiste à remplir votre ventre avec des aliments délicieux et avec une livraison rapide et
                    gratuite.</p>
            </div>
            <div className="flex flex-col gap-4">
                <Typography variant="h3">A propos de nous</Typography>
                <ul className="flex flex-col gap-2">
                    <li><Link href="/">La team</Link></li>
                    <li><Link href="/">Fonctionnalités</Link></li>
                    <li><Link href="/">Nouveautés</Link></li>
                    <li><Link href="/">Menu</Link></li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <Typography variant="h3">Support</Typography>
                <ul className="flex flex-col gap-2">
                    <li><Link href="/">Mon compte</Link></li>
                    <li><Link href="/">Centre de support</Link></li>
                    <li><Link href="/">Avis</Link></li>
                    <li><Link href="/">Contact</Link></li>
                    <li><Link href="/">Accessibilité</Link></li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <Typography variant="h3">Contact</Typography>
                <ul className="flex flex-col gap-2">
                    <li><Link href="/">FAQ</Link></li>
                    <li><Link href="/">Nous contacter</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;