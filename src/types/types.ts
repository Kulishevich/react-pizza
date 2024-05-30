export type PizzaElem = {
    id: number,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number,
    count?: number,
    activeType?: number,
    activeSize?: number,
}

// type pizzaElem = {
//   id: number,
//   imageUrl: string,
//   title: string,
//   types: number[],
//   sizes: number[],
//   price: number,
//   category: number,
//   rating: number,
//   activeSize: number,
//   activeType: string,
//   count: number
// }