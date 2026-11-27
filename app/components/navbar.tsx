'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = {
    "Challenges": "/challenges",
    "Scavdle": "/scavdle",
    "Leaderboard": "/leaderboard",
    "Profile": "/profile"
}

export default function NavBar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-row text-text-light ml-1">
            {
                Object.entries(pages).map(([name, path]) => {
                    const currPage = pathname === path

                    return (
                        <Link href={path} key={path} className={
                            currPage ?
                            "m-3 mt-3 bg-foreground px-2 py-2 rounded-lg transition-all" : "m-3 mt-3 px-2 py-2 rounded-lg hover:shadow-[inset_0px_10px_20px_var(--color-foreground)] transition-shadow duration-300"
                        }>{name}</Link>
                    )
                })
            }
        </div>
    )
}