"use client"

import {TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function TopMenu(){
    return (
        <div className="px-3">
            <TabsList className="bg-background w-full grid grid-cols-3 gap-2.5">
                <TabsTrigger
                    className="data-[state=active]:bg-primary font-extrabold text-base py-1.5 rounded-3xl ring-1 ring-black border border-white data-[state=active]:text-white"
                    value="dine">Пообедаем?</TabsTrigger>
                <TabsTrigger
                    className="data-[state=active]:bg-primary font-extrabold text-base py-1.5 rounded-3xl ring-1 ring-black border border-white data-[state=active]:text-white"
                    value="shop">Магазин</TabsTrigger>
                <TabsTrigger
                    className="data-[state=active]:bg-primary font-extrabold text-base py-1.5 rounded-3xl ring-1 ring-black border border-white data-[state=active]:text-white"
                    value="ordering">На заказ</TabsTrigger>
            </TabsList>
        </div>
    )
}
