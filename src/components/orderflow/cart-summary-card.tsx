'use client'
import {SingleCartType, useCartStore} from "@/stores/cart";
import {Button} from "@/components/ui/button";
import {Edit3Icon, TrashIcon} from "lucide-react";
import ProductCardSmall from "@/components/orderflow/product-card-small";
import ConfirmPersonDeletion from "@/components/orderflow/confirm-person-deletion";

export default function CartSummaryCard({products, cartId, index=1}: { products: SingleCartType, cartId: string, index: number }){
    const cartStore = useCartStore()
    const price = Intl.NumberFormat('en-US').format(cartStore.totalPriceForCart[cartId]).replaceAll(',', ' ')
    const isEmpty = Object.keys(products).length === 0
    const removePerson = () => cartStore.removeCart(cartId)
    return <>
        <div className="border-b-2 mb-4 border-muted-foreground pb-1">
            <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-xl">Персона {index}</h3>
                <div>
                    {index !== 1 && <ConfirmPersonDeletion
                        trigger={
                            <Button size="sm" variant="ghost">
                                <TrashIcon className="w-5 h-5 text-primary"/>
                            </Button>
                        }
                        onConfirm={removePerson}
                        name={`Персона ${index}`} />}

                    {/*{!isEmpty && <Button size="sm" variant="ghost">*/}
                    {/*    <Edit3Icon className="w-5 h-5 text-primary"/>*/}
                    {/*</Button>}*/}
                </div>
            </div>
            {!isEmpty ? <div className="flex flex-col mt-2 space-y-3">
                {Object.entries(products).map((entry, index) =>
                    <ProductCardSmall cartId={cartId} key={index} product={entry[1]}/>
                )}
            </div> : <div className="flex items-center justify-center">
                Здесь пока пусто
            </div>}
            <div className="flex mt-2 justify-between items-center">
                <span>Стоимость</span>
                <span className="font-extrabold">{price} сум</span>
            </div>
        </div>
    </>
}
