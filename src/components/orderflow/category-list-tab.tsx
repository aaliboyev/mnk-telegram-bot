'use client'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import ProductCard from "@/components/orderflow/product-card";
import {useCartStore} from "@/stores/cart";
import {createRef, MutableRefObject, useCallback, useEffect, useRef, useState} from "react";

type Product = {
    id: number
    title: string
    price: number
    image: string
}

const products: Record<string, Product[]> = {
    "company": [
        {
            id: 100,
            title: "Кролик с овощами 1 кг",
            price: 127000,
            image: "/assets/resources/meals/1.jpg"
        }, {
            id: 200,
            title: "Индейка на 8ч / 2,3 кг",
            price: 600000,
            image: "/assets/resources/meals/2.jpg"
        }, {
            id: 300,
            title: "Кролик с овощами",
            price: 127000,
            image: "/assets/resources/meals/3.jpg"
        }, {
            id: 400,
            title: "Кролик с овощами 2",
            price: 127000,
            image: "/assets/resources/meals/4.jpg"
        }, {
            id: 500,
            title: "Кролик с овощами 3",
            price: 130000,
            image: "/assets/resources/meals/5.jpg"
        }],
    "salads": [
        {
            id: 600,
            title: "Салат с овощами 300г",
            price: 30000,
            image: "/assets/resources/meals/6.jpg"
        }, {
            id: 700,
            title: "Салат с овощами 500г",
            price: 50000,
            image: "/assets/resources/meals/7.jpg"
        }, {
            id: 800,
            title: "Салат с овощами 700г",
            price: 70000,
            image: "/assets/resources/meals/8.jpg"
        }, {
            id: 900,
            title: "Салат с овощами 900г",
            price: 90000,
            image: "/assets/resources/meals/9.jpg"
        }, {
            id: 1000,
            title: "Салат с овощами 1000г",
            price: 100000,
            image: "/assets/resources/meals/10.jpg"
        }
    ],
    "cook": [
        {
            id: 1100,
            title: "Пицца с овощами 300г",
            price: 30000,
            image: "/assets/resources/meals/11.jpg"
        }, {
            id: 1200,
            title: "Пицца с овощами 500г",
            price: 50000,
            image: "/assets/resources/meals/12.jpg"
        }, {
            id: 1300,
            title: "Пицца с овощами 700г",
            price: 70000,
            image: "/assets/resources/meals/12.jpg"
        }, {
            id: 1400,
            title: "Пицца с овощами 900г",
            price: 90000,
            image: "/assets/resources/meals/12.jpg"
        }, {
            id: 1500,
            title: "Пицца с овощами 1000г",
            price: 100000,
            image: "/assets/resources/meals/12.jpg"
        }
    ],
    "drinks": [
        {
            id: 1600,
            title: "Кофе 300мл",
            price: 30000,
            image: "/assets/resources/meals/1.jpg"
        }, {
            id: 1700,
            title: "Кофе 500мл",
            price: 50000,
            image: "/assets/resources/meals/8.jpg"
        }, {
            id: 1800,
            title: "Кофе 700мл",
            price: 70000,
            image: "/assets/resources/meals/3.jpg"
        }, {
            id: 1900,
            title: "Кофе 900мл",
            price: 90000,
            image: "/assets/resources/meals/7.jpg"
        }, {
            id: 2000,
            title: "Кофе 1000мл",
            price: 100000,
            image: "/assets/resources/meals/9.jpg"
        }
    ]
}

const categoryList = {
    "company": {
        title: "Блюдо на компанию",
        value: "company",
        image: "/assets/resources/categories/1.jpg"
    },
    "salads": {
        title: "Салаты",
        value: "salads",
        image: "/assets/resources/categories/1.jpg"
    },
    "cook": {
        title: "Выпечка",
        value: "cook",
        image: "/assets/resources/categories/1.jpg"
    },
    "drinks": {
        title: "Напитки",
        value: "drinks",
        image: "/assets/resources/categories/1.jpg"
    }
}

interface CategoryRefs {
    [key: string]: MutableRefObject<HTMLDivElement | null>;
}

interface TabRefs {
    [key: string]: MutableRefObject<HTMLButtonElement | null>;
}

export default function CategoryListTab() {
    const [value, setValue] = useState("company")
    const isProgrammaticScroll = useRef(false);
    const cartStore = useCartStore()
    const categoryRefs: MutableRefObject<CategoryRefs> = useRef({});
    const tabRefs: MutableRefObject<TabRefs> = useRef({});

    const getRef = (key: string): MutableRefObject<HTMLDivElement | null> => {
        if (!categoryRefs.current[key]) {
            // Create a ref if it does not already exist
            categoryRefs.current[key] = createRef<HTMLDivElement>();
        }
        return categoryRefs.current[key];
    };
    const getTabRef = (key: string): MutableRefObject<HTMLButtonElement | null> => {
        if (!tabRefs.current[key]) {
            tabRefs.current[key] = createRef<HTMLButtonElement>();
        }
        return tabRefs.current[key];
    };

    const scrollToCategory = (key: string) => {
        const ref = categoryRefs.current[key];
        if (ref && ref.current) {
            isProgrammaticScroll.current = true;
            const topPosition = Object.keys(categoryList)[0] === key ? 0 : ref.current.offsetTop - 100;
            window.scrollTo({top: topPosition, behavior: "smooth"});

            setTimeout(() => {
                isProgrammaticScroll.current = false;
            }, 1500);
        }
    };

    const handleScroll = useCallback(() => {
        if (isProgrammaticScroll.current) {
            return;
        }
        const keys = Object.keys(categoryList);
        let activeKey = value;
        for (let key of keys) {
            const ref = categoryRefs.current[key];
            if (ref && ref.current) {
                const rect = ref.current.getBoundingClientRect();
                if (rect.top <= 110) {
                    activeKey = key;
                }
            }
        }

        const currentTabRef = tabRefs.current[activeKey];
        if (currentTabRef && currentTabRef.current) {
            currentTabRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }

        if (value !== activeKey) {
            setValue(activeKey);
        }
    }, [value]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll, value]);

    return (
        <Tabs defaultValue="company" value={value} onValueChange={setValue} className="w-full mt-5">
            <h2 className="font-extrabold text-lg mx-4 text-muted-foreground">Категории</h2>
            <div className="overflow-x-auto no-scrollbar py-2 bg-background sticky top-12 z-10">
                <TabsList className="bg-background touch-pan-x px-4 gap-2.5" >
                    {Object.entries(categoryList).map(([key, c]) => <TabsTrigger
                        ref={getTabRef(c.value)}
                        key={c.value}
                        className="data-[state=active]:bg-primary flex justify-between items-center gap-2 font-extrabold
                        text-base py-1.5 px-2 rounded-3xl ring-1 ring-black border border-white data-[state=active]:text-white"
                        value={c.value}
                        onClick={e => {
                            scrollToCategory(c.value)
                        }}
                    >
                        <div className="rounded-3xl w-9 h-6 bg-cover"
                             style={{backgroundImage: `url(${c.image})`}}/>
                        <span>{c.title}</span>
                    </TabsTrigger>)}
                </TabsList>
            </div>
            <div>
                {Object.entries(categoryList).map(([key, c]) =>
                    <div key={key} id={key} ref={getRef(key)} className="my-4 px-4">
                        <h3 className="text-lg font-extrabold mb-2">{c.title}</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {products[key].map(product =>
                                <ProductCard
                                    onAddToCart={(quantity) => cartStore.addProduct({
                                        id: product.id,
                                        title: product.title,
                                        image: product.image,
                                        price: product.price,
                                        quantity
                                    })}
                                    onQuantityChange={(quantity) => cartStore.changeQuantity(product.id, quantity)}
                                    quantity={cartStore.getProduct(product.id)?.quantity || 0}
                                    key={product.id}
                                    product={product}
                                />
                            )}
                        </div>
                    </div>)}
            </div>
        </Tabs>
    )
}
