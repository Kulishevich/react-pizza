export const getBasketLS = () => {
    const data = window.localStorage.getItem('pizzas')
    return data ? JSON.parse(data) : []
}