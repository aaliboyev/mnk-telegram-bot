import {Button} from "@/components/ui/button";
import {ShoppingBag} from "lucide-react";
import {DrawerTrigger} from "@/components/ui/drawer";

export const InCartSummaryCard = ({totalPrice}: {totalPrice: number}) => {
    return (
        <>
            <div className="py-10 w-full"></div>
            <div
                className="bg-background bottom-0 flex items-center justify-between fixed border-t border-t-primary p-3 w-full">
                <div></div>
                <div className="py-2 pr-2">
                    <DrawerTrigger asChild>
                        <Button className="rounded-full text-lg border-primary text-md text-primary" variant="outline">
                            <span className="mr-2">{totalPrice} сум</span> <ShoppingBag className="w-5 h-5"/>
                        </Button>
                    </DrawerTrigger>
                </div>
            </div>
        </>
    );
}
