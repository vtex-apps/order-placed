export const knownTotalizers = {
  Discounts: 1,
  Items: 1,
  Shipping: 1,
  Tax: 1,
  Interest: 1,
}

// reference: https://github.com/vtex-apps/totalizer-translator/blob/master/react/TranslateTotalizer.js
const TranslateTotalizer = ({ totalizer }: { totalizer: OrderItemTotal }) => {
  const { id } = totalizer
  if (id in knownTotalizers) return id
  if (!totalizer) return id || ''
  return totalizer.name
}
export default TranslateTotalizer
