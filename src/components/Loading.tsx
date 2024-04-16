import { Loader2 } from "lucide-react";
import React from "react";


export const LoadingOverlay = () => {
    return <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"><LoadingBlock/></div>
}

export const LoadingPage = () => {
    return <div className="h-full w-full flex items-center"><LoadingBlock/></div>
}

export const LoadingBlock = () => {
    return (
        <div className="h-full flex items-center w-full animate-pulse p-4"><Loader2 className="m-auto animate-spin" /></div>
    )
}

export const LoadingButton = () => {
    return <div className="animate-pulse"><Loader2 className="m-auto animate-spin" /></div>
}

export const LoadingSpan = () => {
    return <span className="animate-pulse"><Loader2 className="inline-block animate-spin" /></span>
}
