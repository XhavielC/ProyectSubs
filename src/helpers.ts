interface MoneyProps {
  amount: number;
}

export const moneyFormat = ({ amount }: MoneyProps) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
