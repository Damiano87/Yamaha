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

// transform name to short version if it's too long
export const transformName = (name: string) => {
    const firstLetter = name.charAt(0).toUpperCase();
    const slicedName = firstLetter + name.slice(1, 11).trimEnd() + "...";
    
    return name.length > 11 ? slicedName : firstLetter + name.slice(1)
}
