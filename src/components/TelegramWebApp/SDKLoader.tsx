'use client';

import type {ComponentType, PropsWithChildren, ReactNode} from 'react';
import {SDKProvider, DisplayGateProps, useSDKContext} from '@tma.js/sdk-react';
import {redirect} from "next/navigation";
import {LoadingOverlay, LoadingPage} from "@/components/Loading";
import {useValidateInitData} from "@/hooks/swr/validate-init-data";

interface SDKProviderErrorProps {
    error: unknown;
}

function SDKProviderError({ error }: SDKProviderErrorProps) {
    return (
        <div>
            Oops. Something went wrong.
            <blockquote>
                <code>
                    {error instanceof Error
                        ? error.message
                        : JSON.stringify(error)}
                </code>
            </blockquote>
        </div>
    );
}

function render(Component: ReactNode | ComponentType): ReactNode;
function render<T extends object>(Component: ReactNode | ComponentType<T>, props: T): ReactNode;
function render(Component: ReactNode | ComponentType, props = {}): ReactNode {
    return typeof Component === 'function' ? <Component {...props} /> : Component;
}

export function DisplayGate(props: DisplayGateProps): ReactNode {
    const { loading, initResult, error } = useSDKContext();
    const {data: isValidData} = useValidateInitData(decodeURIComponent(initResult?.initDataRaw || ""))

    if (isValidData?.valid) {
        return props.children;
    } else if (isValidData?.valid === false){
        return <h2>Invalid Data</h2>
    } else if (error) {
        redirect(process.env.NEXT_PUBLIC_BOT_URL!)
    } else {
        return render(loading ? props.loading : props.initial);
    }
}

/**
 * Root component of the whole project.
 */
export function TmaSDKLoader({ children }: PropsWithChildren) {
    return (
        <SDKProvider options={{ cssVars: true, acceptCustomStyles: true, async: true }}>
            <DisplayGate
                error={SDKProviderError}
                loading={LoadingOverlay}
                initial={LoadingOverlay}
            >
                {children}
            </DisplayGate>
        </SDKProvider>
    );
}
