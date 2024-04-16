import {create} from "zustand";
import {generateUniqueId} from "@/lib/utils";

export type CartProduct = {
    id: number
    title: string
    image: string
    price: number
    quantity: number
}

export type SingleCartType = Record<string, CartProduct>
export type CartState = {
    carts: Record<string, SingleCartType>
    totalPrice: number
    totalPriceForCart: Record<string, number>
    selectedCartIndex: string
    addProduct: (product: CartProduct) => void
    getProduct: (id: number) => CartProduct
    changeQuantity: (id: number, quantity: number, cartId?: string) => void
    removeCart: (cartId: string) => void
    clear: () => void
    setSelectedCartIndex: (index: string) => void
    addCart: () => void
    recalculateTotalPrice: () => void
}


export const useCartStore = create<CartState>()((set, get) => ({
    carts: {default: {}},
    selectedCartIndex: 'default',
    totalPrice: 0,
    totalPriceForCart: {default: 0},
    addProduct: (product) => {
        set((state) => {
            const carts = state.carts
            carts[get().selectedCartIndex][product.id] = product
            return {carts}
        })
        get().recalculateTotalPrice()
    },
    getProduct: (id) => {
        return get().carts[get().selectedCartIndex][id]
    },
    setSelectedCartIndex: (index) => {
        set({selectedCartIndex: index})
    },
    addCart: () => {
        const cartId = generateUniqueId()
        set((state) => {
            return {carts: {...state.carts, [cartId]: {}}, totalPriceForCart: {...state.totalPriceForCart, [cartId]: 0}}
        })
        get().setSelectedCartIndex(cartId)
    },
    changeQuantity: (id, quantity, cartId = get().selectedCartIndex) => {
        set((state) => {
            const carts = state.carts
            if (quantity === 0) delete carts[cartId][id]
            else carts[cartId][id].quantity = quantity
            return {carts}
        })
        get().recalculateTotalPrice()
    },
    removeCart: (cartId) => {
        if (cartId === 'default') return
        set((state) => {
            const carts = state.carts
            delete carts[cartId]
            return {carts, selectedCartIndex: Object.keys(carts).at(-1)}
        })
        get().recalculateTotalPrice()
    },
    clear: () => {
        set({carts: {default: {}}, totalPrice: 0})
    },
    recalculateTotalPrice: () => {
        let totalPrice = 0
        Object.entries(get().carts).forEach(([cartId, cart]) => {
            const totalPriceForCart = Object.values(cart).reduce((acc, product) => acc + product.price * product.quantity, 0)
            set({totalPriceForCart: {...get().totalPriceForCart, [cartId]: totalPriceForCart}})
            totalPrice += totalPriceForCart
        })
        set({totalPrice})
    }
}))
