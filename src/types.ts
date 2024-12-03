// export interface Result {
//   site_id: SiteID;
//   country_default_time_zone: string;
//   query: string;
//   paging: Paging;
//   results: ResultElement[];
//   sort: Sort;
//   available_sorts: Sort[];
//   filters: Filter[];
//   available_filters: AvailableFilter[];
//   pdp_tracking: PDPTracking;
//   user_context: null;
// }

// export interface AvailableFilter {
//   id: string;
//   name: string;
//   type: AvailableFilterType;
//   values: AvailableFilterValue[];
// }

// export enum AvailableFilterType {
//   Boolean = 'boolean',
//   Number = 'number',
//   Range = 'range',
//   String = 'STRING',
//   Text = 'text',
//   TypeString = 'string',
// }

// export interface AvailableFilterValue {
//   id: string;
//   name: string;
//   results: number;
// }

// export interface Sort {
//   id?: string;
//   name?: string;
// }

// export interface Filter {
//   id: string;
//   name: string;
//   type: AvailableFilterType;
//   values: FilterValue[];
// }

// export interface FilterValue {
//   id: CategoryID;
//   name: string;
//   path_from_root: Sort[];
// }

// export enum CategoryID {
//   Mlb1744 = 'MLB1744',
// }

// export interface Paging {
//   total: number;
//   primary_results: number;
//   offset: number;
//   limit: number;
// }

// export interface PDPTracking {
//   group: boolean;
//   product_info: any[];
// }

// export interface Product {
//   id: string;
//   title: string;
//   condition: Condition;
//   thumbnail_id: string;
//   catalog_product_id: string;
//   listing_type_id: ListingTypeID;
//   sanitized_title: string;
//   permalink: string;
//   buying_mode: BuyingMode;
//   site_id: SiteID;
//   category_id: CategoryID;
//   domain_id: DomainID;
//   thumbnail: string;
//   currency_id: CurrencyID;
//   order_backend: number;
//   price: number;
//   original_price: number | null;
//   sale_price: SalePrice;
//   available_quantity: number;
//   official_store_id: number | null;
//   use_thumbnail_id: boolean;
//   accepts_mercadopago: boolean;
//   shipping: Shipping;
//   stop_time: Date;
//   seller: Seller;
//   address: Address;
//   attributes: Attribute[];
//   location: Location;
//   seller_contact: SellerContact;
//   installments: null;
//   winner_item_id: null;
//   catalog_listing: boolean;
//   discounts: null;
//   decorations: null;
//   promotions: null;
//   inventory_id: null;
//   official_store_name?: string;
// }

// export interface Address {
//   state_id: string;
//   state_name: StateName;
//   city_id: string;
//   city_name: string;
// }

// export enum StateName {
//   Goiás = 'Goiás',
//   MinasGerais = 'Minas Gerais',
//   Paraná = 'Paraná',
//   RioDeJaneiro = 'Rio de Janeiro',
//   RioGrandeDoSul = 'Rio Grande do Sul',
//   SantaCatarina = 'Santa Catarina',
//   SãoPaulo = 'São Paulo',
// }

// export interface Attribute {
//   id: ID;
//   name: Name;
//   value_id: null | string;
//   value_name: string;
//   attribute_group_id: AttributeGroupID;
//   attribute_group_name: AttributeGroupName;
//   value_struct: Struct | null;
//   values: AttributeValue[];
//   source: number;
//   value_type: ValueType;
// }

// export enum AttributeGroupID {
//   Adicionales = 'ADICIONALES',
//   Confort = 'CONFORT',
//   Dflt = 'DFLT',
//   Empty = '',
//   Find = 'FIND',
//   Others = 'OTHERS',
//   Security = 'SECURITY',
// }

// export enum AttributeGroupName {
//   Adicionais = 'Adicionais',
//   Conforto = 'Conforto',
//   Empty = '',
//   FichaTécnica = 'Ficha técnica',
//   Outros = 'Outros',
//   Segurança = 'Segurança',
// }

// export enum ID {
//   Brand = 'BRAND',
//   Color = 'COLOR',
//   Doors = 'DOORS',
//   Engine = 'ENGINE',
//   EngineDisplacement = 'ENGINE_DISPLACEMENT',
//   FipeBrand = 'FIPE_BRAND',
//   FipeModel = 'FIPE_MODEL',
//   FuelType = 'FUEL_TYPE',
//   HasAirConditioning = 'HAS_AIR_CONDITIONING',
//   HasHistoricInformation = 'HAS_HISTORIC_INFORMATION',
//   HasVehicleInspection = 'HAS_VEHICLE_INSPECTION',
//   ItemCondition = 'ITEM_CONDITION',
//   Kilometers = 'KILOMETERS',
//   Length = 'LENGTH',
//   Model = 'MODEL',
//   PassengerCapacity = 'PASSENGER_CAPACITY',
//   Power = 'POWER',
//   SingleOwner = 'SINGLE_OWNER',
//   TractionControl = 'TRACTION_CONTROL',
//   Transmission = 'TRANSMISSION',
//   Trim = 'TRIM',
//   VehicleYear = 'VEHICLE_YEAR',
//   VerifiedVehicles = 'VERIFIED_VEHICLES',
// }

// export enum Name {
//   Ano = 'Ano',
//   ArCondicionado = 'Ar-condicionado',
//   Cilindrada = 'Cilindrada',
//   Comprimento = 'Comprimento',
//   CondiçãoDoItem = 'Condição do item',
//   ControleDeTração = 'Controle de tração',
//   Cor = 'Cor',
//   HistóricoVeicular = 'Histórico veicular',
//   Marca = 'Marca',
//   MarcaFIPE = 'Marca FIPE',
//   Modelo = 'Modelo',
//   ModeloFIPE = 'Modelo FIPE',
//   Motor = 'Motor',
//   Portas = 'Portas',
//   Potência = 'Potência',
//   QuantidadeDePessoas = 'Quantidade de pessoas',
//   Quilômetros = 'Quilômetros',
//   TipoDeCombustível = 'Tipo de combustível',
//   Transmissão = 'Transmissão',
//   Versão = 'Versão',
//   VeículosVerificados = 'Veículos verificados',
//   Vistoria = 'Vistoria',
//   ÚnicoDono = 'Único dono',
// }

// export interface Struct {
//   number: number;
//   unit: Unit;
// }

// export enum Unit {
//   HP = 'hp',
//   KM = 'km',
//   L = 'L',
//   Mm = 'mm',
// }

// export enum ValueType {
//   Boolean = 'boolean',
//   List = 'list',
//   Number = 'number',
//   NumberUnit = 'number_unit',
//   String = 'string',
// }

// export interface AttributeValue {
//   id: null | string;
//   name: string;
//   struct: Struct | null;
//   source: number;
// }

// export enum BuyingMode {
//   Classified = 'classified',
// }

// export enum Condition {
//   Used = 'used',
// }

// export enum CurrencyID {
//   Brl = 'BRL',
// }

// export enum DomainID {
//   MlbCarsAndVans = 'MLB-CARS_AND_VANS',
// }

// export enum ListingTypeID {
//   GoldPremium = 'gold_premium',
// }

// export interface Location {
//   address_line: AddressLine;
//   zip_code: string;
//   subneighborhood: null;
//   neighborhood: Sort;
//   city: Sort;
//   state: Sort;
//   country: Sort;
//   latitude?: number;
//   longitude?: number;
// }

// export enum AddressLine {
//   AVProfLuizIgnacioAnhaiaMello4141 = 'Av. Prof. Luiz ignacio Anhaia Mello, 4141',
//   Empty = '',
//   PraçaStélioMachadoLoureiro = 'Praça Stélio Machado Loureiro',
//   RuaAlcidesRamosNogueira = 'Rua Alcides Ramos Nogueira',
//   RuaCoronelAlfredoFláquer = 'Rua Coronel Alfredo Fláquer',
//   RuaHenriBouchard = 'Rua Henri Bouchard',
//   RuaSeverinoAraujoDeLima57 = 'RUA SEVERINO ARAUJO DE LIMA, 57',
// }

// export interface SalePrice {
//   price_id: string;
//   amount: number;
//   conditions: Conditions;
//   currency_id: CurrencyID;
//   exchange_rate: null;
//   payment_method_prices: any[];
//   payment_method_type: PaymentMethodType;
//   regular_amount: number | null;
//   type: SalePriceType;
//   metadata: Metadata;
// }

// export interface Conditions {
//   eligible: boolean;
//   context_restrictions: string[];
//   start_time: Date | null;
//   end_time: Date | null;
// }

// export interface Metadata {
//   campaign_id?: string;
//   promotion_id?: string;
//   promotion_type?: string;
// }

// export enum PaymentMethodType {
//   Tmp = 'TMP',
// }

// export enum SalePriceType {
//   Promotion = 'promotion',
//   Standard = 'standard',
// }

// export interface Seller {
//   id: number;
//   nickname: string;
// }

// export interface SellerContact {
//   contact: Contact;
//   other_info: string;
//   webpage: string;
//   area_code: string;
//   phone: string;
//   area_code2: string;
//   phone2: string;
//   email: string;
// }

// export enum Contact {
//   Empty = '',
//   GAutomoveisLtda = 'G AUTOMOVEIS LTDA .-',
//   KurnikAutomóveis = 'Kurnik Automóveis',
//   MatrizQuestMultimarcas = 'Matriz Quest Multimarcas',
//   SãoCaetanoAutomóveis = 'São Caetano Automóveis',
// }

// export interface Shipping {
//   store_pick_up: boolean;
//   free_shipping: boolean;
//   logistic_type: null;
//   mode: Mode;
//   tags: any[];
//   benefits: null;
//   promise: null;
//   shipping_score: number;
// }

// export enum Mode {
//   NotSpecified = 'not_specified',
// }

// export enum SiteID {
//   Mlb = 'MLB',
// }
