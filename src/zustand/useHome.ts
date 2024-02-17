import { create } from 'zustand'
import axios from 'axios'

type Discount = {
    percentage: number;
    newAmount: number;
};

type Size = {
    amount: number;
    unit: string;
};

type DeliveryLocation = {
    _id: string;
    name: string;
    pincode: number;
    deliveryCharge: number;
    location: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type Category = {
    _id: string;
    name: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type Product = {
    name: string;
    description: string;
    price: number;
    discount: Discount;
    stock: number;
    size: Size;
    images: string[];
    variants: any[]; // Add appropriate type if there are variants
    category: Category;
    eanCode: string;
    hsnCode: string;
    multiPack: boolean;
    howToUse: string;
    reviews: any[]; // Add appropriate type if there are reviews
    gstRate: number;
    deliveryLocations: DeliveryLocation[];
    createdAt: string;
    updatedAt: string;
    __v: number;
};


type HomeState = {
    images: string[]
    categories: Category[]
    products: Product[]
    getProducts: () => void;
    getCrousel: () => void;
    getCategories: () => void;
}

const url = "https://bellissimo-api.belonindia.com"

export const useHome = create<HomeState>(set => ({
    images: [],
    categories: [],
    products: [],
    getCrousel: async () => {
        const { data } = await axios.get(`${url}/home/carousel`)
        set({
            images: data.data.map((item: any) => ({ img: item.image }))
        })
    },
    getCategories: async () => {
        const { data } = await axios.get(`${url}/category/all`)
        set({
            categories: data.data
        })
    },
    getProducts: async () => {
        const { data } = await axios.get(`${url}/products/all`)
        set({
            products: data.data
        })
    }
}))