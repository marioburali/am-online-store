export type Category = {
  id: string;
  name: string;
};

export type ProductsListProps = {
  showAddToCart?: boolean;
};

export type AddToCartProps = {
  product: Product;
};

export type ProductCardProps = {
  product: Product;
  isDetailedView?: boolean;
};

export type CartType = {
  [id: string]: Product;
};

export type Product = {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  sanitized_title: string;
  permalink: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  order_backend: number;
  price: number;
  original_price: number | null;
  available_quantity: number;
  official_store_id: number | null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  stop_time: Date;
  installments: null;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  decorations: null;
  promotions: null;
  inventory_id: null;
  official_store_name?: string;
  quantity: number;
};

export type Comment = {
  email: string;
  text: string;
  rating: number;
};
export type CommentsList = {
  [productId: string]: Comment[];
};

export type ProductContextType = {
  product: Product;
  saveProduct: (item: Product) => void;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  isSearched: boolean;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CartContextType = {
  cart: CartType;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
  cartLength: number;
  setCartLength: React.Dispatch<React.SetStateAction<number>>;
  getCartSize: () => number;
};
