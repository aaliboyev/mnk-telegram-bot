import {PropsWithChildren} from "react";
import {TmaSDKLoader} from "@/components/TelegramWebApp/SDKLoader";
import type { Metadata } from 'next';
import {SummaryCard} from "@/components/orderflow/summary-card";

export const metadata: Metadata = {
    title: 'OrderFlow Telegram Web App',
    description: 'OrderFlow Telegram Web App - A web app for OrderFlow Telegram bot.',
};

export default function TelegramWebAppLayout({children}: PropsWithChildren) {
    return (
        <TmaSDKLoader>
            {children}
        </TmaSDKLoader>
    );
}
