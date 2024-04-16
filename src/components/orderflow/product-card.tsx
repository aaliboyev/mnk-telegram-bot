import Image from "next/image"
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Button} from "@/components/ui/button";
import {MinusIcon, PlusIcon} from "lucide-react";

export type ProductCardData = {
    product: {
        id: number
        title: string
        image: string
        price: number
    }
    quantity: number
    onQuantityChange: (quantity: number) => void
    onAddToCart: (quantity: number) => void
}

export default function ProductCard({product, onAddToCart, onQuantityChange, quantity = 0}: ProductCardData) {
    const price = Intl.NumberFormat('en-US').format(product.price).replaceAll(',', ' ')

    return <div className="bg-primary flex flex-col justify-between ring-1 ring-black border border-white rounded-3xl p-3 shadow-md shadow-muted-foreground">
        <div>
            <AspectRatio className="rounded-xl overflow-hidden">
                <Image fill objectFit="cover"  alt={""} src={product.image} />
            </AspectRatio>
            <h4 className="font-extrabold mt-2 text-sm text-white">{product.title}</h4>
        </div>
        <div className="mt-2">
            <p className="text-white text-sm">{price} сум</p>
            <div className="mt-2">
                {quantity === 0 ? <Button
                    onClick={e => onAddToCart(1)}
                    className="bg-white text-black font-extrabold text-base hover:bg-muted w-full rounded-2xl p-1 justify-between">
                    <span className="mx-auto">
                        Добавить
                    </span>
                </Button> :
                    <div
                        className="flex w-full items-center bg-white text-black rounded-2xl justify-between font-extrabold text-base">
                        <Button
                            onClick={e => onQuantityChange(quantity - 1)}
                            className="bg-transparent font-extrabold text-primary rounded-3xl shadow-none">
                            <span className="mx-auto">
                                <MinusIcon className="w-3 h-3" />
                            </span>
                        </Button>
                        <div className="border-l h-3 border-l-muted-foreground"></div>
                        <div className="px-3">
                            {quantity}
                        </div>
                        <div className="border-r h-3 border-r-muted-foreground"></div>
                        <Button
                            onClick={e => onQuantityChange(quantity + 1)}
                            className="bg-transparent font-extrabold text-primary rounded-3xl shadow-none">
                            <span className="mx-auto">
                                <PlusIcon className="w-3 h-3" />
                            </span>
                        </Button>
                    </div>
                }
            </div>
        </div>
    </div>
}
