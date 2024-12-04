export type Category = {
  id: string;
  name: string;
};

export type CategoriesProps = {
  setResults: React.Dispatch<React.SetStateAction<Product[]>>;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SearchBarProps = {
  setResults: React.Dispatch<React.SetStateAction<Product[]>>;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AddToCartProps = {
  datatestid: string,
  product: Product,
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
  location: Location;
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
