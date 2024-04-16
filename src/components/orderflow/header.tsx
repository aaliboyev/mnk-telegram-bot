"use client"
import {XIcon, LucideShoppingCart} from "lucide-react"
import Link from "next/link";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {Button} from "@/components/ui/button";

const uriPrefix = process.env.NEXT_PUBLIC_WEB_APP_URI_PREFIX
export default function Header(){
    return (
        <div className="px-4 sticky bg-white top-0 py-3 z-10 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold">Мама на кухне</h1>
            <Button asChild variant="ghost" size="sm">
                <Link href={`/${uriPrefix}/cart`}>
                    <LucideShoppingCart className="text-primary" />
                </Link>
            </Button>
        </div>
    )
}

export const CartPageHeader = () => {
    return (
        <div className="px-4 sticky bg-white top-0 py-3 z-10 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold">Мама на кухне</h1>
            <Button asChild variant="ghost" size="sm">
                <Link href={`/${uriPrefix}/`}>
                    <XIcon className="text-primary" />
                </Link>
            </Button>
        </div>
    )
}
