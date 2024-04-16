import {CartPageHeader} from "@/components/orderflow/header";

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
        <div className="relative">
            <img alt={"payme"}
                 className="h-20 w-auto"
                 src={"/assets/icons/payment/payme.png"}/>
        </div>
    </div>
}


const Click = () => {
    return <div style={{
        boxShadow: "0px 10px 20px -10px rgba(0, 22, 43, 0.5)",
        backgroundColor: "rgba(0, 22, 43, 1)",
    }} className="rounded-3xl p-4 flex items-center justify-center">
        <div className="relative">
            <img alt={"click"}
                 className="h-12 w-auto"
                 src={"/assets/icons/payment/click.png"}
            />
        </div>
    </div>
}


const Uzum = () => {
    return <div
        style={{
            boxShadow: "0px 10px 20px -10px rgba(76, 5, 167, 0.5)"
        }}
        className="rounded-3xl overflow-hidden flex items-center justify-center">
        <img alt={"click"}
             className="w-full h-full"
             src={"/assets/icons/payment/uzum.png"}
        />
    </div>
}

const Cash = () => {
    return <div style={{
        boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.4)",
        backgroundColor: "rgba(249, 248, 241, 1)",
    }} className="rounded-3xl p-4 pt-8 text-center overflow-hidden">
        <b className={"text-xl"} style={{color: "rgba(148, 173, 143, 1)"}}>Наличные</b>
        <div className="relative">
            <img alt={"click"}
                 className="absolute h-20 w-auto inset-0 mx-auto top-2"
                 src={"/assets/icons/payment/cash.png"}
            />
        </div>
    </div>
}
