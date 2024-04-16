'use client';

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {FullWidthProductCard} from "@/components/orderflow/old/product-card";
import {InCartSummaryCard} from "@/components/orderflow/old/summary-card";
import {useEffect, useState} from "react";
import {
    useInitData,
    useBackButton,
    usePopup,
    useThemeParams,
    useViewport,
    useInvoice,
    useUtils,
    useInitDataRaw,
    useMainButton,
    useSettingsButton,
    usePostEvent,
    useClosingBehavior,
    useCloudStorage,
    useMiniApp,
    useHapticFeedback,
    useSDKContext,
    useLaunchParams,
    useQRScanner
} from "@tma.js/sdk-react"
import {Button} from "@/components/ui/button";
import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {OrderDetailsForm} from "@/components/orderflow/old/order-details-form";

type CartStateType = {
    products: { id: number, count: number, price: number, totalPrice: number }[];
    totalPrice: number;
}

const products = [
    {
        id: 100,
        title: "Кролик с овощами 1 кг",
        price: 127000,
        image: "https://s3-alpha-sig.figma.com/img/2075/25ca/8c4e4644fd6b92d2cef5a3868053fc5c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A7ae1RgmtlIxQIodGl3DkvNKDBzAUSuEZMO6gz-HjGqYMAl7-AysBJ5MHW8V5SEs4dUgYulM44z5O2itLNscEbQgAiMSis6Yp1bq5aCcPEBh2iYqoWI9qfjrCPRI21lYUeTCmsDjqtyDvlpbu9Wsc-0PdlCtVBYDnsS3V9A6zejSsZJ3mubVqi8cs9KhHJVd7VbmWl6PNCz8i0edIuyndZGtj5DOg8oo6minjwSFf1is2BMcJV1W4C6yKBimI-YvVWj63p0NikuWNNc912Ip74J-~z9Wamwt9B4FU0CFfjaoGENUIJN8d0u~jiVTF3ds9emEE9zaibo1XF3LhgTBBA__"
    }, {
        id: 200,
        title: "Индейка на 8ч / 2,3 кг",
        price: 600000,
        image: "https://s3-alpha-sig.figma.com/img/4095/c2b6/914e49a1314aa5f18d83d5c3dfe43030?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7bg-O3AWoXO~jFILVv~rtq8XniwdwFJMzJEkh5KpDoascdDosq1nAPeapIlrgGAlsVsr2jprsn40BzAL0SmiysdgmxXPz8gPUF69XIG2CDtippaUJQN7eMOijnlzGAhfhlTiwdpHz-b2RBaLbIn6xhH~sOkCHqWGtIKXJCsx1yYnUf1qJ12XUCfJixK05toZQFa5~xL9qGGsjwI4JinopkEiVlGf6GuYbID~MH4A6DUUVwArRMy0krWkNudv1BzAbEm0WNNCw1dHO150MsHDwfln7Wmj05boFdf0zdKRxvP1gOCouIQvafB9HsmX0tB85kJQcI1ZK1q2-NxsnplOA__"
    }, {
        id: 300,
        title: "Кролик с овощами",
        price: 127000,
        image: "https://s3-alpha-sig.figma.com/img/bc79/42d7/70510730a19dcc708d064bdb6cb59bbb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lIPj0iYKF2xfAZGB7NCuT8JumGdE3ac536XFT7RRtcwGAC~xnumg0MfJ0ycX6-6F~7Aj0g3YFNmcQdnFVGSeul47jW0YlBq1y~wFeYRmN7qWuBPgCqp9-PgyMgbjUjJKSvqf4vyvTbeP0Xn3ibDzQ1a4FFuNUi8b78gPf3DaIJvjgCLE5jOMDCbmsvwMV7GQPt6G6MzzBBzhrxTJr4BTTPCungpmps1WqMT-eMchiNId1RaeW32As~Vzx3WfhLBa3XKQlAKyrexk3saQIMnvxdwKbrUXshD0l3eqLQ3EPCDd-RT282RvZoXmKSKak9roVczf~4uDMyq9GqxPsrIGOw__"
    }, {
        id: 400,
        title: "Кролик с овощами 2",
        price: 127000,
        image: "https://s3-alpha-sig.figma.com/img/c8dc/c56c/6f9deb9ba9017dcdd20302fc9e5e467d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jPsPApfFKBmDn-aAn8lNlrAHN8Bde2P6BNkgXqnv~daA32Q0dxHzVc1xH44ZRGH5hGHe5JJYU0pkwj4Z82np94HVcwWTH8al57N4DfQqf~Y1uvsyWB~-nT9JI0aYf3YmRwi875T6WtzQ8~-hNiiHJYaMhdK0QBRVyrRr9aeE7tcFmDdZP4wSBkw15O4YyUWGZgVq9TYBzn7E2~APnd~zH2x4ZotodZD1Xn9uWYGarz4MB9IdNivvqpoG2sQgWYEabUs5SDFStCRsslDrDV7TmMkxWb4BA783TFgZzbPi1ejs5J6dFKIQmrrF2LLdQhqyf5-ZyLEShR2wBrXDxD1IlA__"
    }, {
        id: 500,
        title: "Кролик с овощами 3",
        price: 130000,
        image: "https://s3-alpha-sig.figma.com/img/c8dc/c56c/6f9deb9ba9017dcdd20302fc9e5e467d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jPsPApfFKBmDn-aAn8lNlrAHN8Bde2P6BNkgXqnv~daA32Q0dxHzVc1xH44ZRGH5hGHe5JJYU0pkwj4Z82np94HVcwWTH8al57N4DfQqf~Y1uvsyWB~-nT9JI0aYf3YmRwi875T6WtzQ8~-hNiiHJYaMhdK0QBRVyrRr9aeE7tcFmDdZP4wSBkw15O4YyUWGZgVq9TYBzn7E2~APnd~zH2x4ZotodZD1Xn9uWYGarz4MB9IdNivvqpoG2sQgWYEabUs5SDFStCRsslDrDV7TmMkxWb4BA783TFgZzbPi1ejs5J6dFKIQmrrF2LLdQhqyf5-ZyLEShR2wBrXDxD1IlA__"
    }
]

export default function Home() {
    const [cartState, setCartState] = useState<CartStateType>({
        products: [],
        totalPrice: 0
    });

    const backButton = useBackButton()
    const mainButton = useMainButton()
    const initData = useInitData()

    const onCartChange = (id: number, count: number) => {
        setCartState((prevState) => {
            const newState: CartStateType = {...prevState}
            const index = prevState.products.findIndex(product => product.id === id);

            if (index === -1) {
                const product = products.find(product => product.id === id);
                if (!product) return prevState;
                newState.products.push({id, count, price: product.price, totalPrice: product.price * count});
            } else {
                if (count === 0) newState.products.splice(index, 1)
                else {
                    newState.products[index].count = count;
                    newState.products[index].totalPrice = newState.products[index].price * count;
                }
            }
            newState.totalPrice = newState.products.reduce((acc, product) => acc + product.totalPrice, 0);
            return newState
        });
    }

    return (
        <div>
            <Tabs defaultValue="ordering" className="w-full">
                <div className="pt-4 px-3">
                    <TabsList className="bg-background w-full grid grid-cols-3 gap-2">
                        <TabsTrigger
                            className="bg-primary text-base rounded-md text-white data-[state=active]:bg-primary-foreground hover:bg-primary-foreground"
                            value="dine">Пообедаем?</TabsTrigger>
                        <TabsTrigger
                            className="bg-primary text-base rounded-md text-white data-[state=active]:bg-primary-foreground hover:bg-primary-foreground"
                            value="shop">Магазин</TabsTrigger>
                        <TabsTrigger
                            className="bg-primary text-base rounded-md text-white data-[state=active]:bg-primary-foreground hover:bg-primary-foreground"
                            value="ordering">На заказ</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="dine"></TabsContent>
                <TabsContent value="shop"></TabsContent>
                <TabsContent value="ordering">
                    <Tabs defaultValue="company" className="w-full pb-2 ">
                        <div className="overflow-x-auto no-scrollbar">
                            <TabsList className="bg-background touch-pan-x no-scrollbar">
                                <TabsTrigger
                                    className="bg-none text-base text-gray-400 data-[state=active]:underline data-[state=active]:text-primary hover:text-primary"
                                    value="company">Блюдо на компанию</TabsTrigger>
                                <TabsTrigger
                                    className="bg-none text-base text-gray-400 data-[state=active]:underline data-[state=active]:text-primary hover:text-primary"
                                    value="salads">Салаты</TabsTrigger>
                                <TabsTrigger
                                    className="bg-none text-base text-gray-400 data-[state=active]:underline data-[state=active]:text-primary hover:text-primary"
                                    value="cook">Выпечка</TabsTrigger>
                                <TabsTrigger
                                    className="bg-none text-base text-gray-400 data-[state=active]:underline data-[state=active]:text-primary hover:text-primary"
                                    value="drinks">Напитки</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="company">
                            <div className="px-4 flex flex-col space-y-2">
                                {products.map(product => <FullWidthProductCard
                                    onChange={onCartChange}
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                />)}
                            </div>
                        </TabsContent>
                        <TabsContent value="salads">

                        </TabsContent>
                        <TabsContent value="cook">

                        </TabsContent>
                        <TabsContent value="drinks">

                        </TabsContent>
                    </Tabs>
                </TabsContent>
            </Tabs>

            <Drawer>
                {cartState.totalPrice > 0 && (
                    <InCartSummaryCard totalPrice={cartState.totalPrice}/>
                )}
                <DrawerContent>
                    <DrawerHeader>
                        <OrderDetailsForm />
                    </DrawerHeader>
                    <DrawerFooter />
                </DrawerContent>
            </Drawer>
        </div>
    );
}
