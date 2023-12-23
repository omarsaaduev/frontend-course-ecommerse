export interface IProductsResponse {
    products: IProduct[]
    limit: number
    slip: number
    total: number
}


export interface IProduct {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    images: string[]
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
    
}