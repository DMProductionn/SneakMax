export interface IFilterParams {
  limit?: number
  gender?: 'женский' | 'мужской' | null
  priceFrom?: number
  priceTo?: number
  sizes?: number
}