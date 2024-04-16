import Image from "next/image";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Button} from "@/components/ui/button";
import {useState} from "react";

type Props = {
    id: number;
    title: string;
    price: number;
    image: string;
    onChange: (id: number, count: number) => void;
}

export const FullWidthProductCard = ({id, title, price, image, onChange}: Props) => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count+1);
        onChange(id, count+1);
    }

    const remove = () => {
        setCount(count-1);
        onChange(id, count-1);
    }

    return (
        <div className="grid grid-cols-5 border border-primary w-full rounded-2xl shadow-lg">
            <div className="col-span-2 rounded-2xl overflow-hidden">
                <AspectRatio className="" ratio={9 / 7}>
                    <Image src={image} alt={title} fill
                           className="object-cover " />
                </AspectRatio>
            </div>
            <div className="col-span-3 flex flex-col justify-between w-full p-2">
                <div>
                    <h1 className="text-base text-primary font-bold">{title}</h1>
                    <p className="text-gray-500">{Intl.NumberFormat('en-US').format(price).replaceAll(',', ' ')} сум</p>
                </div>
                <div className="flex justify-end">
                    {count == 0 ? (
                        <Button onClick={add} className="rounded-full border-primary text-md text-primary" variant="outline">
                            Добавить
                        </Button>
                    ) : <div className="flex items-center">
                        <Button onClick={remove} size={"sm"} className="rounded-full text-white bg-primary hover:bg-primary-foreground">
                            -
                        </Button>
                        <div className="w-10 text-center">{count}</div>
                        <Button onClick={add} size={"sm"} className="rounded-full text-white bg-primary hover:bg-primary-foreground">
                            +
                        </Button>
                    </div>}
                </div>
            </div>
        </div>
    );
}
