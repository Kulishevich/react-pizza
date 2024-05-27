export type PizzaElem = {
    id: number,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number,
    count?: number | undefined,
    activeType?: number,
    activeSize?: number,
}