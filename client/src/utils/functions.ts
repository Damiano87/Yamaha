// slices vehicle names
export const vehicleName = (name: string) => {
  return name.length > 14 ? `${name.slice(0, 14)}...` : name;
};

// replaces spaces with hyphens
export const toSlug = (name: string) => {
  return name.replace(/ /g, "-");
};

// replaces hyphens with spaces
export const fromSlug = (name: string) => {
  return name?.replace(/-/g, " ");
};

// formats numbers to currency
export function formatCurrencyPLN(amount: number) {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(amount / 100);
}
