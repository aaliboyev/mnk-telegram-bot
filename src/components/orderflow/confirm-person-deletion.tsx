import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {ReactNode, useState} from "react";
import {Button} from "@/components/ui/button";

type Props = {
    trigger: ReactNode
    name: string
    onConfirm: () => void
}

export default function ConfirmPersonDeletion({trigger, name, onConfirm}: Props) {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="max-w-sm rounded-3xl">
                <DialogHeader>
                    {/*<DialogTitle>Вы Уверены?</DialogTitle>*/}
                    <DialogDescription className="text-lg">
                        Вы уверены, что хотите удалить <b>{name}</b>?
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-2 w-full flex space-x-2 justify-center">
                    <Button variant="outline" className="rounded-full w-full text-lg border-primary-foreground text-black font-extrabold" onClick={e => setOpen(false)}>Отмена</Button>
                    <Button className="rounded-full w-full hover:bg-primary-foreground text-lg text-white font-extrabold" onClick={e => {onConfirm(); setOpen(false)}}>Удалить</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
