export const formatToCurrency = (amount: number) => {
  return amount
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    .split(".")[0];
};

export const formatStr = (str: string) => {
  return str
    .replace(/\s+$/, "")
    .replace(/[^A-Z0-9/.']+/gi, "-")
    .replace(/[^A-Z0-9-.']+/gi, "'");
};

export const formatPriceToNumber = (amount: string) => {
  return amount.replace(/,/g, "");
};
