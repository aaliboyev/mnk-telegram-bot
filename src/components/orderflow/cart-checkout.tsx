"use client"
import {Button} from "@/components/ui/button";
import {CaretDownIcon, CaretUpIcon} from "@radix-ui/react-icons";
import {useState} from "react";
import {useCartStore} from "@/stores/cart";

export default function CartCheckout(){
    const [open, setOpen] = useState(false)
    const cartStore = useCartStore()
    const totalPrice = Intl.NumberFormat('en-US').format(cartStore.totalPrice).replaceAll(',', ' ')

    const addPerson = () => {
        cartStore.addCart()
    }
    return <div className="p-4 w-full bg-white sticky bottom-0 border-t border-primary translate-x-0 transition-transform duration-300">
        {open && <div className="pb-3 text-sm transition translate-x-0 w-full duration-300">
            <h3 className="font-extrabold mb-2 text-lg">Информация о доставке</h3>
            <div className="flex flex-col space-y-2">
                <p className="flex justify-between">
                    <span>Время доставки:</span>
                    <span>Срочный</span>
                </p>
                <hr/>
                <p className="flex justify-between">
                    <span>Стоимость Доставки:</span>
                    <span>Бесплатно</span>
                </p>
                <hr/>
                <p className="flex justify-between">
                    <span>Сумма:</span>
                    <span>{totalPrice} сум</span>
                </p>
                <hr/>
                <p className="flex justify-between">
                    <span>Скидка:</span>
                    <span>0 сум</span>
                </p>
                <hr/>
                <p className="flex justify-between">
                    <span>Кэшбек:</span>
                    <span>0 сум</span>
                </p>
                <hr/>
                <p className="flex justify-between">
                    <span className="text-primary">Итого:</span>
                    <span>{totalPrice} сум</span>
                </p>
            </div>
        </div>}
        <div className="flex justify-between space-x-2 items-center">
            <Button
                className="rounded-full w-full flex items-center text-lg font-extrabold"
                onClick={e => setOpen(!open)}
                variant="outline">
                <span>Чек</span>
                {open ? <CaretUpIcon className="w-6 h-6" /> : <CaretDownIcon className="w-6 h-6" />}
            </Button>
            <Button disabled={cartStore.totalPrice === 0} onClick={addPerson} className="rounded-full w-full text-lg bg-primary text-white font-extrabold" variant="outline">
                Добавить персону
            </Button>
        </div>
    </div>
}
