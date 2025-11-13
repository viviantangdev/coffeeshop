export interface ProductItem{
    id:string;
    name: string;
    image: string;
    price: string;
    rating: number;
    votes: number;
    popular: boolean;
    available: boolean;
}

export type Menu = 'All products' | 'Available now';
