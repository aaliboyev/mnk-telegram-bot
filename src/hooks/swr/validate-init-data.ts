import useSWR from "swr";


export const useValidateInitData = (query: string) => {
    return useSWR(`init-data:${query}`, async () => {
        if (!query) return
        const r = await fetch('/api/telegram/validate-init-data', {
            method: "POST",
            body: JSON.stringify({
                query
            })
        })
        return await r.json() as {valid: boolean}
    })
}
