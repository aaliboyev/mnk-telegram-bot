import {CartPageHeader} from "@/components/orderflow/header";
import Image from "next/image"

export default function PaymentPage(){
    return (
        <>
            <CartPageHeader/>
            <div className="p-4">
                <h1>Выбрать способ оплаты</h1>
                <div className="grid grid-cols-2 gap-4">
                    <Click />
                    <Payme />
                    <Uzum />
                    <Cash />
                </div>
            </div>
        </>
    )
}

const Payme = () => {
    return <div style={{
        boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.4)",
        backgroundColor: "rgba(202, 242, 242, 1)",
    }} className="rounded-3xl p-4 flex items-center justify-center">
        <Image alt={"payme"}
               width={80}
               height={80}
             className="h-20 w-auto"
             src={"/assets/icons/payment/payme.png"}/>
    </div>
}


const Click = () => {
    return <div style={{
        boxShadow: "0px 10px 20px -10px rgba(0, 22, 43, 0.5)",
        backgroundColor: "rgba(0, 22, 43, 1)",
    }} className="rounded-3xl relative h-28 p-4 flex items-center justify-center">
        <Image alt={"click"}
               width={100}
               height={0}
               className="h-auto"
             src={"/assets/icons/payment/click.png"}
        />
    </div>
}


const Uzum = () => {
    return <div
        style={{boxShadow: "0px 10px 20px -10px rgba(76, 5, 167, 0.5)"}}
        className="rounded-3xl h-28 relative overflow-hidden flex items-center justify-center">
        <Image alt={"Uzum"} fill src={"/assets/icons/payment/uzum.png"}/>
    </div>
}

const Cash = () => {
    return <div style={{
        boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.4)",
        backgroundColor: "rgba(249, 248, 241, 1)",
    }}
                className="rounded-3xl h-28 relative p-4 pt-8 text-center overflow-hidden">
        <b className={"text-xl"} style={{color: "rgba(148, 173, 143, 1)"}}>Наличные</b>
        <Image alt={"click"}
               height={80}
               width={80}
               className="mt-2 w-auto mx-auto"
               src={"/assets/icons/payment/cash.png"}
        />
    </div>
}
