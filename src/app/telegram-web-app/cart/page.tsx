'use client'
import {CartPageHeader} from "@/components/orderflow/header";
import CartSummaryCard from "@/components/orderflow/cart-summary-card";
import {useCartStore} from "@/stores/cart";
import {SummaryCard} from "@/components/orderflow/summary-card";
import CartCheckout from "@/components/orderflow/cart-checkout";

export default function CartPage(){
    const cartStore = useCartStore()
    return (
        <>
            <CartPageHeader />
            <div className="px-4 py-2">
                {Object.entries(cartStore.carts).map((entry, index) =>
                    <CartSummaryCard
                        index={index+1}
                        key={index}
                        products={entry[1]}
                        cartId={entry[0]}
                    />
                )}
            </div>
            <div>
                <div className="h-36 w-full"></div>
                <div className="fixed bottom-0 w-full">
                    <CartCheckout/>
                    <SummaryCard/>
                </div>
            </div>
        </>
    )
}
