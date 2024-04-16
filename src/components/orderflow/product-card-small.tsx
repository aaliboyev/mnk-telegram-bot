"use client"
import {CartProduct, useCartStore} from "@/stores/cart";
import Image from "next/image"
import {Button} from "@/components/ui/button";
import {MinusIcon, PlusIcon} from "lucide-react";


export default function ProductCardSmall({product, cartId}: { product: CartProduct, cartId: string }) {
    const cartStore = useCartStore()

    const onQuantityChange = (quantity: number) => {
        cartStore.changeQuantity(product.id, quantity, cartId)
    }

    return <div
        className="shadow-lg border flex space-x-1 items-center justify-between border-white outline outline-1 outline-black bg-primary rounded-full">
        <div className="flex-none">
            <Image objectFit="cover" alt="" className="rounded-full border border-white max-h-14 max-w-20" height={100}
                   width={100} src={product.image}/>
        </div>
        <div className="flex-1">
            <p className="text-white font-bold text-sm">{product.title}</p>
            <p className="text-white text-sm">{product.price} сум</p>
        </div>
        <div className="pr-3">
            <div
                className="flex items-center bg-white text-black rounded-2xl justify-between font-extrabold text-base">
                <Button
                    onClick={e => onQuantityChange(product.quantity - 1)}
                    size="sm"
                    className="bg-transparent font-extrabold text-primary rounded-3xl shadow-none">
                            <span className="mx-auto">
                                <MinusIcon className="w-3 h-3"/>
                            </span>
                </Button>
                <div className="border-l h-3 border-l-muted-foreground"></div>
                <div className="px-3">
                    {product.quantity}
                </div>
                <div className="border-r h-3 border-r-muted-foreground"></div>
                <Button
                    size="sm"
                    onClick={e => onQuantityChange(product.quantity + 1)}
                    className="bg-transparent font-extrabold text-primary rounded-3xl shadow-none">
                            <span className="mx-auto">
                                <PlusIcon className="w-3 h-3"/>
                            </span>
                </Button>
            </div>
        </div>
    </div>
}
