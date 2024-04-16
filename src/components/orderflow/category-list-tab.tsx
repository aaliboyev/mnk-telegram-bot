'use client'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import ProductCard from "@/components/orderflow/product-card";
import {useCartStore} from "@/stores/cart";

const products = [
    {
        id: 100,
        title: "Кролик с овощами 1 кг",
        price: 127000,
        image: "https://s3-alpha-sig.figma.com/img/b75b/4bb9/3cc44f98d623606d3193258ae1a99a02?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EpnbYGNvHjP6c1yn2YoUBfN9egdEhd~jJ4EpeNzlGbLY0wibRpgEzAs9wZg8AiGT3PUH5T8f-3u6f1ROQ-r1b3Bv3EOU7K42qY1FSoIZgy3yXfqIbLdD0OAEFLSn93CVR8ebg1xZ41fQn7~4EAjni2rUnwGGRBBF62VLV6~X~lwxqOXS3nmMzMRc2vT9WbxWKpKsOQYDgEbw0S5XSMNxlOTe43TfWPypWNzDtRx8GONSg0QrpN8N62fN5ReZk6qxgR4BUbLDyTxqU3aWGaGUr-hJir9EtVzhAQZ7~Qq8lP1zxWGl2LzyjQ6FsT38ku3KlDxhX2Rpa3~IhTAEBPS0sw__"
    }, {
        id: 200,
        title: "Индейка на 8ч / 2,3 кг",
        price: 600000,
        image: "https://s3-alpha-sig.figma.com/img/3af6/c1a1/0970940e3b620df33c6b2c025a35c426?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WBwlkPSMA1aE2IGyQrbbbgbUDcbeXj5DCv0At2B~Zm~3-jqMIsRqyjjGWLaIwEE-LNgMeMV2NonZnjYuQCJEyMSlFBql7eDdgZZ~~oo~VoBIgNf2O9yRxnwhP4MUfmCihW7IV5KpMA5xGqq68HViC4Ih2V6dymoXXmHp6wpHbyPGOe-HHCwzKA9mdPvLE4lTsV-6dMeaupxxeKRK9wJErWadQw1KOhZNYrNqnfSy3D-15WFBDJB2VoqCmgGsjsQ8vdmYsJwiK2aDHc3XPFpGUyQ1uXQuDfG~kIO6DIFlzBjhTwBlhkrQRIVbNkh8HIoAbJ7Z6wwt-LNoLfIntWtCOg__"
    }, {
        id: 300,
        title: "Кролик с овощами",
        price: 127000,
        image: "https://s3-alpha-sig.figma.com/img/a846/9024/323db9b66e2df30121ee1bd8a348ba81?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JsiwsVEmBWMNNq70kmcZWrNBHJFAH9APcpRlgq9MoWdouO3p~ARpCa~OK8SH-Xk2cpZ1-OdRQNqpXzrZG4xk2R3Gdl1oIFPSbOLNOeeNG6CZZ~dFzBsfZ4s8ywrH1w2S~Inm5Vh01ZmCAVNCER2WkjtnTxuIp5w1Qg7zCXd0xW03tpnn45n1mnZ4PCI4HPAKmHCna~P94YS9Vsz-2wY4GvMeqi2MP7gfFmp~uBpqw-LmNyzBdgNlulOMpjpGU-9-pCy7nFj0h1IzqsD5zjXUz4wGg8wgPAzWJRZeYGGVA1LH4qPTfa4QrQoFE6EZ1CUNCU~kvS4BvT5V2Ejwfo48Rw__"
    }, {
        id: 400,
        title: "Кролик с овощами 2",
        price: 127000,
        image: "https://s3-alpha-sig.figma.com/img/245d/9600/a72699e36f203182976e8b209d4cc160?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTJVoElfpeHk80x0kFy8I6YohbMEGmkdjc~uKlwrqiN9j8mu0IhXK2Sa-uo7rCVaJ5DHBqKhYN~78954g1I-0FDg-QPJq3-4hNleegXah3bWM4Yvym061bV2r5iR3XyJvYicQJhsLFc7uk1YfinJZsGMO6z6c5xdtKq3S8qSsLsb6TAYw1NxpRDNJHGeRfLRDyMu2DZ94dBUVRbgrTLZX4-XYqhD~10s4QNImk1NNr0S27kdPSB2yUqUsFprvqctBOcnIje~gB6Qvni4IOupwadsUYgzc4-jPD7oqZOT3E8quW7Od73IJG3JqDh2f5sGgMQs~1~GzRiKTccTOR2b3Q__"
    }, {
        id: 500,
        title: "Кролик с овощами 3",
        price: 130000,
        image: "https://s3-alpha-sig.figma.com/img/b0f2/8f7f/e1d5fb6b86e57907dba2fe81bcc04015?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ci6F~dZ-uHyqaVq4QrXc9Ab~YrbrrztMRPQWbOO2kKKc7OnZlrAHe8sXU3ignnuJOKugl70NbuGydWOCtAeEZwT3cYiqoVvZVqsYuxUqRoQov~6rSPrEBh4fcD5A3~s4wktEyTB3ONr3Arz60kustK14lffoUBGFzDZotbpyuE619RVA93H1Xhid4uKUx5MVmPjhb0UHD9TzB3mUEllhLgf00qrdMPFYQMGDUDy41BOCXgLyTKmAq6dzbGIYzdwNgFAGTxot6qgpUAqXHHvcd-n-CfkN5HuCM3aGTwqHJGDGx7DZgeDbl6OD5byzgu7qk~583ToFTa-b2E8N9NWUeA__"
    }
]

const categoryList = [
    {
        title: "Блюдо на компанию",
        value: "company",
        image: "https://s3-alpha-sig.figma.com/img/a6b6/a5fb/c3bd5ed3ebcd8aa9eecd002249a7da80?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1~ZoJnxQfgGHy11ETWqZE579CgdlAQ1Htf7zWndVMW9TY6IkrhElWJ1VQg1Y5PPB5ILDz0j9bBEQ2UP90HdJEElzbASVucUjjnc-Zv~umQAj2mm9JnOgdi92BQ0u0u-MkNoK-mn2PHztJ2w-Yb30QsGnqGFu54ExJEhEPpaiqkeoGpYDseKM96laaL5KO6IPAHNNkD~W4CH~kThXqvNpasUMtwkpDgQOC4-ODJrjVShW-D2XYiG4C~-uYWHI3Qr9~OCk~PDOXFBipaiQZSAlrBjNnqcYRiCKPY67Z6l-HrSaWuptkhhKuizLXHptSGn95yMNGPTkuAc6E7Q2SqMgw__"
    }, {
        title: "Салаты",
        value: "salads",
        image: "https://s3-alpha-sig.figma.com/img/a6b6/a5fb/c3bd5ed3ebcd8aa9eecd002249a7da80?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1~ZoJnxQfgGHy11ETWqZE579CgdlAQ1Htf7zWndVMW9TY6IkrhElWJ1VQg1Y5PPB5ILDz0j9bBEQ2UP90HdJEElzbASVucUjjnc-Zv~umQAj2mm9JnOgdi92BQ0u0u-MkNoK-mn2PHztJ2w-Yb30QsGnqGFu54ExJEhEPpaiqkeoGpYDseKM96laaL5KO6IPAHNNkD~W4CH~kThXqvNpasUMtwkpDgQOC4-ODJrjVShW-D2XYiG4C~-uYWHI3Qr9~OCk~PDOXFBipaiQZSAlrBjNnqcYRiCKPY67Z6l-HrSaWuptkhhKuizLXHptSGn95yMNGPTkuAc6E7Q2SqMgw__"
    }, {
        title: "Выпечка",
        value: "cook",
        image: "https://s3-alpha-sig.figma.com/img/2142/6f5a/66852bef9925ab339317788e62a95eb3?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iTsDey3KUKtHJz-6DleB2vyi09iLoNHbHFekgpLk0F-veaTlyQQzyx2WB1hi~7Lf0VLgZj5tSp39aIBkQUK0Ols6NXFSE1sJgvzq~YmNTbw-kB2a0md3AshTjA4~YJhy-cq9cp2J2W8cVcVbL5yu3D6mVmcS-s5qRR~B~JKtseWsqGO4p~twXmMGuJR6tJnT3dr41WCR4DQBQ1iXjd-Afre8GYLlMKoOYW4T1VFKcH3BNZt3e4AlQ0DsnhYusneQmzSMiu6m8KZ-9YqKJ~gPcP85MFLXMaUZ9h0N0eXe1~ZjzP4SO~3V~PGujf0LOOLITFV3KVfHJQZAuOz2GKeAig__"
    }, {
        title: "Напитки",
        value: "drinks",
        image: "https://s3-alpha-sig.figma.com/img/2142/6f5a/66852bef9925ab339317788e62a95eb3?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iTsDey3KUKtHJz-6DleB2vyi09iLoNHbHFekgpLk0F-veaTlyQQzyx2WB1hi~7Lf0VLgZj5tSp39aIBkQUK0Ols6NXFSE1sJgvzq~YmNTbw-kB2a0md3AshTjA4~YJhy-cq9cp2J2W8cVcVbL5yu3D6mVmcS-s5qRR~B~JKtseWsqGO4p~twXmMGuJR6tJnT3dr41WCR4DQBQ1iXjd-Afre8GYLlMKoOYW4T1VFKcH3BNZt3e4AlQ0DsnhYusneQmzSMiu6m8KZ-9YqKJ~gPcP85MFLXMaUZ9h0N0eXe1~ZjzP4SO~3V~PGujf0LOOLITFV3KVfHJQZAuOz2GKeAig__"
    }
]

export default function CategoryListTab(){
    const cartStore = useCartStore()
    return (
        <Tabs defaultValue="company" className="w-full mt-5">
            <h2 className="font-extrabold text-lg mx-4 text-muted-foreground">Категории</h2>
            <div className="overflow-x-auto no-scrollbar py-1.5">
                <TabsList className="bg-background touch-pan-x no-scrollbar px-4 gap-2.5">
                    {categoryList.map(c => <TabsTrigger
                        key={c.value}
                        className="data-[state=active]:bg-primary flex justify-between items-center gap-2 font-extrabold
                        text-base py-1.5 px-2 rounded-3xl ring-1 ring-black border border-white data-[state=active]:text-white"
                        value={c.value}>
                        <div className="rounded-3xl w-9 h-6 bg-cover"
                             style={{backgroundImage: `url(${c.image})`}}/>
                        <span>{c.title}</span>
                    </TabsTrigger>)}
                </TabsList>
            </div>
            <div id="company" className="grid grid-cols-2 my-4 gap-3 px-4">
                {products.map(product =>
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
            <div id="salads">

            </div>
            <div id="cook">

            </div>
            <div id="drinks">

            </div>
        </Tabs>
    )
}
