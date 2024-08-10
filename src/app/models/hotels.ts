export interface Hoteldetails{
    primary_count: number
    count: number
    room_distribution: RoomDistribution[]
    map_bounding_box: MapBoundingBox
    total_count_with_filters: number
    unfiltered_count: number
    extended_count: number
    unfiltered_primary_count: number
    search_radius: number
    sort: Sort[]
    result: Result[]
  }
  
  export interface RoomDistribution {
    children: number[]
    adults: string
  }
  
  export interface MapBoundingBox {
    ne_long: number
    sw_lat: number
    sw_long: number
    ne_lat: number
  }
  
  export interface Sort {
    id: string
    name: string
  }
  
  export interface Result {
    default_language: string
    preferred: number
    countrycode: string
    is_free_cancellable: number
    native_ads_tracking: string
    bwallet: Bwallet
    class_is_estimated: number
    block_ids: string[]
    cc1: string
    main_photo_url: string
    matching_units_configuration: MatchingUnitsConfiguration
    badges: Badge[]
    price_is_final: number
    hotel_name_trans: string
    country_trans: string
    review_nr: number
    cant_book: number
    city_name_en: string
    genius_discount_percentage: number
    longitude: number
    extended: number
    preferred_plus: number
    address_trans: string
    in_best_district: number
    districts: string
    unit_configuration_label: string
    distances: Distance[]
    hotel_name: string
    soldout: number
    city: string
    review_score_word: string
    selected_review_topic: any
    composite_price_breakdown: CompositePriceBreakdown
    hotel_facilities: string
    cc_required: number
    currency_code: string
    hotel_has_vb_boost: number
    ufi: number
    native_ads_cpc: number
    property_cribs_availability: number
    min_total_price: number
    address: string
    is_genius_deal: number
    checkout: Checkout
    hotel_include_breakfast?: number
    checkin: Checkin
    timezone: string
    city_in_trans: string
    city_trans: string
    district_id: number
    updated_checkout: any
    url: string
    children_not_allowed: number
    wishlist_count: number
    is_geo_rate: any
    is_city_center: number
    distance: string
    hotel_id: number
    is_smart_deal: number
    price_breakdown: PriceBreakdown
    zip: string
    review_recommendation: string
    updated_checkin: any
    native_ad_id: string
    district: string
    class: number
    latitude: number
    main_photo_id: number
    distance_to_cc: string
    accommodation_type_name: string
    is_mobile_deal: number
    type: string
    review_score: number
    distance_to_cc_formatted: string
    id: string
    is_no_prepayment_block: number
    currencycode: string
    accommodation_type: number
    default_wishlist_name: string
    mobile_discount_percentage: number
    is_beach_front: number
    max_photo_url: string
    max_1440_photo_url: string
    ribbon_text?: string
    booking_home?: BookingHome
    external_reviews?: ExternalReviews
    has_free_parking?: number
    has_swimming_pool?: number
  }
  
  export interface Bwallet {
    hotel_eligibility: number
  }
  
  export interface MatchingUnitsConfiguration {
    matching_units_common_config: MatchingUnitsCommonConfig
  }
  
  export interface MatchingUnitsCommonConfig {
    unit_type_id: number
    localized_area?: string
  }
  
  export interface Badge {
    id: string
    text: string
    badge_variant: string
  }
  
  export interface Distance {
    icon_name: string
    icon_set: any
    text: string
  }
  
  export interface CompositePriceBreakdown {
    charges_details: ChargesDetails
    strikethrough_amount_per_night?: StrikethroughAmountPerNight
    gross_amount: GrossAmount
    benefits: Benefit[]
    client_translations: ClientTranslations
    discounted_amount?: DiscountedAmount
    net_amount: NetAmount
    strikethrough_amount?: StrikethroughAmount
    gross_amount_per_night: GrossAmountPerNight
    gross_amount_hotel_currency: GrossAmountHotelCurrency
    included_taxes_and_charges_amount: IncludedTaxesAndChargesAmount
    all_inclusive_amount: AllInclusiveAmount
    items: Item[]
    product_price_breakdowns: ProductPriceBreakdown[]
    excluded_amount: ExcludedAmount2
  }
  
  export interface ChargesDetails {
    mode: string
    amount: Amount
    translated_copy: string
  }
  
  export interface Amount {
    value: number
    currency: string
  }
  
  export interface StrikethroughAmountPerNight {
    amount_unrounded: string
    value: number
    amount_rounded: string
    currency: string
  }
  
  export interface GrossAmount {
    amount_unrounded: string
    amount_rounded: string
    currency: string
    value: number
  }
  
  export interface Benefit {
    details: string
    badge_variant: string
    kind: string
    name: string
    icon: any
    identifier: string
  }
  
  export interface ClientTranslations {
    tooltip_total_text: string
  }
  
  export interface DiscountedAmount {
    amount_unrounded: string
    amount_rounded: string
    currency: string
    value: number
  }
  
  export interface NetAmount {
    amount_unrounded: string
    value: number
    currency: string
    amount_rounded: string
  }
  
  export interface StrikethroughAmount {
    value: number
    currency: string
    amount_rounded: string
    amount_unrounded: string
  }
  
  export interface GrossAmountPerNight {
    currency: string
    amount_rounded: string
    value: number
    amount_unrounded: string
  }
  
  export interface GrossAmountHotelCurrency {
    value: number
    amount_rounded: string
    currency: string
    amount_unrounded: string
  }
  
  export interface IncludedTaxesAndChargesAmount {
    amount_rounded: string
    currency: string
    value: number
    amount_unrounded: string
  }
  
  export interface AllInclusiveAmount {
    value: number
    amount_rounded: string
    currency: string
    amount_unrounded: string
  }
  
  export interface Item {
    name: string
    inclusion_type?: string
    details?: string
    kind: string
    item_amount: ItemAmount
    base: Base
    identifier?: string
  }
  
  export interface ItemAmount {
    currency: string
    amount_rounded: string
    value: number
    amount_unrounded: string
  }
  
  export interface Base {
    kind: string
    percentage?: number
    base_amount?: number
  }
  
  export interface ProductPriceBreakdown {
    excluded_amount: ExcludedAmount
    items: Item2[]
    all_inclusive_amount: AllInclusiveAmount2
    gross_amount_hotel_currency: GrossAmountHotelCurrency2
    included_taxes_and_charges_amount: IncludedTaxesAndChargesAmount2
    gross_amount_per_night: GrossAmountPerNight2
    discounted_amount?: DiscountedAmount2
    net_amount: NetAmount2
    strikethrough_amount?: StrikethroughAmount2
    client_translations: ClientTranslations2
    strikethrough_amount_per_night?: StrikethroughAmountPerNight2
    gross_amount: GrossAmount2
    benefits: Benefit2[]
    charges_details: ChargesDetails2
  }
  
  export interface ExcludedAmount {
    value: number
    amount_rounded: string
    currency: string
    amount_unrounded: string
  }
  
  export interface Item2 {
    item_amount: ItemAmount2
    base: Base2
    name: string
    details?: string
    kind: string
    inclusion_type?: string
    identifier?: string
  }
  
  export interface ItemAmount2 {
    amount_rounded: string
    currency: string
    value: number
    amount_unrounded: string
  }
  
  export interface Base2 {
    percentage?: number
    kind: string
    base_amount?: number
  }
  
  export interface AllInclusiveAmount2 {
    amount_unrounded: string
    amount_rounded: string
    currency: string
    value: number
  }
  
  export interface GrossAmountHotelCurrency2 {
    value: number
    amount_rounded: string
    currency: string
    amount_unrounded: string
  }
  
  export interface IncludedTaxesAndChargesAmount2 {
    amount_unrounded: string
    value: number
    currency: string
    amount_rounded: string
  }
  
  export interface GrossAmountPerNight2 {
    currency: string
    amount_rounded: string
    value: number
    amount_unrounded: string
  }
  
  export interface DiscountedAmount2 {
    currency: string
    amount_rounded: string
    value: number
    amount_unrounded: string
  }
  
  export interface NetAmount2 {
    amount_rounded: string
    currency: string
    value: number
    amount_unrounded: string
  }
  
  export interface StrikethroughAmount2 {
    amount_unrounded: string
    amount_rounded: string
    currency: string
    value: number
  }
  
  export interface ClientTranslations2 {
    tooltip_total_text: string
  }
  
  export interface StrikethroughAmountPerNight2 {
    currency: string
    amount_rounded: string
    value: number
    amount_unrounded: string
  }
  
  export interface GrossAmount2 {
    value: number
    amount_rounded: string
    currency: string
    amount_unrounded: string
  }
  
  export interface Benefit2 {
    name: string
    badge_variant: string
    details: string
    kind: string
    icon: any
    identifier: string
  }
  
  export interface ChargesDetails2 {
    mode: string
    amount: Amount2
    translated_copy: string
  }
  
  export interface Amount2 {
    value: number
    currency: string
  }
  
  export interface ExcludedAmount2 {
    amount_unrounded: string
    amount_rounded: string
    currency: string
    value: number
  }
  
  export interface Checkout {
    until: string
    from: string
  }
  
  export interface Checkin {
    until: string
    from: string
  }
  
  export interface PriceBreakdown {
    has_incalculable_charges: number
    gross_price: any
    has_fine_print_charges: number
    sum_excluded_raw: string
    currency: string
    has_tax_exceptions: number
    all_inclusive_price: number
  }
  
  export interface BookingHome {
    is_booking_home: number
    is_single_unit_property: string
    group: string
    quality_class: number
    segment: number
  }
  
  export interface ExternalReviews {
    score_word: string
    num_reviews: number
    should_display: string
    score: number
  }




  export type HotelPhotosList = HotelPhoto[]

  export interface HotelPhoto {
    descriptiontype_id: number
    ml_tags: MlTag[]
    photo_id: number
    tags: Tag[]
    url_square60: string
    url_max: string
    url_1440: string
  }
  
  export interface MlTag {
    tag_id: number
    tag_type: string
    tag_name?: string
    confidence: number
    photo_id: number
  }
  
  export interface Tag {
    tag: string
    id: number
  }


  export interface HotelDescription {
    descriptiontype_id: number
    languagecode: string
    description: string
  }
  