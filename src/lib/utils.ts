export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(price)
}
