import {CartPageHeader} from "@/components/orderflow/header";
import OrderDetailsForm from "@/components/orderflow/order-details-form";
import {SummaryCard} from "@/components/orderflow/summary-card";
import CartCheckout from "@/components/orderflow/cart-checkout";


export default function OrderPage() {
    return (
        <>
            <CartPageHeader/>
            <OrderDetailsForm/>
            <div className="fixed bottom-0 w-full">
                <SummaryCard paymentPage={true}/>
            </div>
        </>
    )
}
