export interface places{
places:places1
} 

export interface places1{
  dest_type: string
  latitude: number
  cc1: string
  city_name: string
  longitude: number
  rtl: number
  type: string
  image_url: string
  label: string
  name: string
  roundtrip: string
  region: string
  b_max_los_data: BMaxLosData
  city_ufi?: number
  timezone: string
  nr_hotels: number
  dest_id: string
  country: string
  lc: string
  hotels: number
  landmark_type?: number
}

export interface BMaxLosData {
  default_los: number
  max_allowed_los: number
  has_extended_los: number
  extended_los: number
  experiment: string
  is_fullon: number
}
