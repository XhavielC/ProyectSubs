import { useEffect } from "react";
import type { BalanceProps } from "../Type";
import { moneyFormat } from "../helpers";

function Balance({ count, sub, gastado, setGastado }: BalanceProps) {
  useEffect(() => {
    const totalGastado = sub.reduce(
      (total, item) => Number(item.price) + total,
      0
    );
    setGastado(totalGastado);
  }, [sub]);

  const safeCount = count || 0;
  const disponible = safeCount - gastado;

  return (
    <div className="balance">
      <h3>Presupuesto: {moneyFormat({ amount: safeCount })}</h3>
      <h3>Disponible: {moneyFormat({ amount: disponible })}</h3>
      <h3>Gastado: {moneyFormat({ amount: gastado })}</h3>
    </div>
  );
}

export default Balance;
