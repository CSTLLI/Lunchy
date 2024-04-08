import {getServerSession} from "next-auth/next";
import {NavElements} from "../ui/nav/nav-elements";
import {Button} from "@/components/ui/button";
import {INavLink} from "../interface/INavLink";
import Link from "next/link";
import Image from "next/image";

export default async function Header() {
    const navigation = [
        {key: "A propos de Lunchy", value: ""},
        {key: "Menus", value: "menus"},
        {key: "Contact", value: ""}
    ] as INavLink[];

    // const session = await getServerSession();

    return (
        <div className="flex md:flex justify-between items-center">
            <div className="flex h-16 items-center px-4 gap-3">
                <Link href="/" className="flex items-center space-x-6 ">
                    <Image src="/logo.png" alt="logo" width={64} height={64}/>
                    <h2 className="font-bold text-primary-color-dark">Lunchy</h2>
                </Link>
            </div>
            <div className="mx-6">
                <NavElements navigationLinks={navigation}/>
            </div>
            <Button>Se connecter</Button>
        </div>
    );
}
