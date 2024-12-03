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

// export type Product = {
//   id: string;
//   title: string;
//   thumbnail: string;
//   price: number;
// };

export type CardProps = {
  keyValue: string;
  title: string;
  thumbnail: string;
  price: number;
};

export type Product = {
  id: string;
  title: string;
  // condition: Condition;
  thumbnail_id: string;
  catalog_product_id: string;
  // listing_type_id: ListingTypeID;
  sanitized_title: string;
  permalink: string;
  // buying_mode: BuyingMode;
  // site_id: SiteID;
  // category_id: CategoryID;
  // domain_id: DomainID;
  thumbnail: string;
  // currency_id: CurrencyID;
  order_backend: number;
  price: number;
  original_price: number | null;
  // sale_price: SalePrice;
  available_quantity: number;
  official_store_id: number | null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  // shipping: Shipping;
  stop_time: Date;
  // seller: Seller;
  // address: Address;
  // attributes: Attribute[];
  location: Location;
  // seller_contact: SellerContact;
  installments: null;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  decorations: null;
  promotions: null;
  inventory_id: null;
  official_store_name?: string;
};
