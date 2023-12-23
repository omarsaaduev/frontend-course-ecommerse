import axios from "axios"

axios.defaults.baseURL = 'https://dummyjson.com'
export const ProductService = {
    getProducts: async () => {
        const response = await axios.get('/products', {
            params: {
                limit: 5
            }
        })
        return response.data
    },
    getProductsByID: async (id: string) => {
        const response = await axios.get(`/products/${id}`)
        return response.data
    }
} 