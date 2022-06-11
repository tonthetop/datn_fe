export const getTotalPrice = (carts) => {
    return carts.reduce((acc, item) => {
        const discountValue = item.discountValue ? item.discountValue : 0
        const priceOrigin = item.price * (1 - discountValue / 100) * item.amount;
        return acc + priceOrigin
    }, 0)
}