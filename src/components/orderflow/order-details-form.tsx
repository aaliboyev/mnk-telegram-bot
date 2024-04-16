import {Input} from "@/components/ui/input";


export default function OrderDetailsForm(){
    return <div className="p-4 space-y-2">
        <div className="flex flex-col">
            <h1>Время</h1>
            <div className="bg-primary ring-1 ring-black  rounded-full">
                <Input defaultValue="12:00"
                       className="justify-center w-full rounded-full py-2 ring-0 border border-white text-white text-lg font-extrabold"
                       type="time"/>
            </div>
        </div>
        <div className="flex flex-col">
            <h1>Имя</h1>
            <Input
                className="min-w-28 rounded-full bg-primary py-2 text-white text-lg font-extrabold ring-1 ring-black border border-white"
                type="text"/>
        </div>
        <div className="flex flex-col">
            <h1>Телефон</h1>
            <Input
                className="min-w-28 rounded-full bg-primary py-2 text-white text-lg font-extrabold ring-1 ring-black border border-white"
                type="tel"/>
        </div>
        <div className="flex flex-col">
            <h1>Адрес</h1>
            <Input
                className="min-w-28 rounded-full bg-primary py-2 text-white text-lg font-extrabold ring-1 ring-black border border-white"
                type="text"/>
        </div>
    </div>
}
