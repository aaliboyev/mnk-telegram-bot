"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {useBackButton, useMainButton} from "@tma.js/sdk-react";
import {useEffect} from "react";


const formSchema = z.object({
    date: z.string().min(2, {
        message: "Date is required",
    }),
    time: z.string().min(2, {
        message: "Time is required",
    }),
    name: z.string().min(2, {
        message: "Name is required",
    }),
    address: z.string().min(2, {
        message: "Address is required",
    }),
})

export function OrderDetailsForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            date: "",
            time: "",
            name: "",
            address: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const mainButton = useMainButton();
    const backButton = useBackButton();



    const onMainButtonClick = () => {
        form.handleSubmit(onSubmit)
    }

    const onBackButtonClick = () => {

    }

    useEffect(() => {
        mainButton.setParams({
            text: "Пщдтвердить и оплатить",
        })
        mainButton.enable().show()
        mainButton.on('click', onMainButtonClick);
        backButton.on('click', onBackButtonClick);
    }, [mainButton, backButton]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel>Выберите дату</FormLabel>
                            <FormControl>
                                <Input placeholder="25-01-2024" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel>Выберите время</FormLabel>
                            <FormControl>
                                <Input placeholder="10:30" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel>Указать имя</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel>Указать Адрес</FormLabel>
                            <FormControl>
                                <Input placeholder="123 Main St" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
