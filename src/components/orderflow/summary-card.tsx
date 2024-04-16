'use client'
import {Button} from "@/components/ui/button";
import {useCartStore} from "@/stores/cart";
import Link from "next/link";

const uriPrefix = process.env.NEXT_PUBLIC_WEB_APP_URI_PREFIX

type Props = {
    paymentPage?: boolean
}

export const SummaryCard = ({paymentPage=false}: Props) => {
    const cartStore = useCartStore()

    if (cartStore.totalPrice === 0) return null

    const totalPrice = Intl.NumberFormat('en-US').format(cartStore.totalPrice).replaceAll(',', ' ')
    return (
        <>
            <div
                className="bg-white flex items-center justify-between border-t border-t-primary px-4 py-2 w-full">
                <div>
                    <strong className="text-primary font-extrabold text-xl">{totalPrice} сум</strong>
                    <p className="text-black text-xs font-extrabold">
                        Бесплатная доставка
                    </p>
                    <p className="text-muted-foreground text-xs ">
                        Скидка 10%
                    </p>
                </div>
                <div className="py-2">
                    <Button asChild className="rounded-full text-lg bg-primary text-md text-white font-extrabold" variant="outline">
                        <Link href={paymentPage ? `/${uriPrefix}/payment` : `/${uriPrefix}/order`}>
                            {paymentPage ? 'Оплатить' : 'Оформить заказ'}
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    );
}
