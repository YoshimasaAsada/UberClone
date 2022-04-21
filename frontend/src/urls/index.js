const DEFAULT_API_LOCALHOST = 'https://d06925e1da0548c1a177c44ef4f7635c.vfs.cloud9.us-east-1.amazonaws.com/api/v1'

export const restaurantsIndex = `${DEFAULT_API_LOCALHOST}/restaurants`
export const foodsIndex = (restaurantId) =>
  `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`
export const lineFoods = `${DEFAULT_API_LOCALHOST}/line_foods`;
export const lineFoodsReplace = `${DEFAULT_API_LOCALHOST}/line_foods/replace`;
export const orders = `${DEFAULT_API_LOCALHOST}/orders`;