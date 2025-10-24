import type { FormEvent } from "react";
import { moneyFormat } from "../helpers";
import type { DisplayItemsProps } from "../Type";

const SingleItem = ({
  price,
  type,
  id,
  eliminarItem,
  editItem,
}: DisplayItemsProps) => {
  const urlImage = `/src/images/${type}.png`;
  const HandleDelete = (e: FormEvent) => {
    e.preventDefault();
    const validar = window.confirm(`Borrar Suscripcion a${type}`);
    if (validar) {
      eliminarItem(id);
    }
  };

  const HandleEdit = (e: FormEvent) => {
    e.preventDefault();
    editItem(id);
  };

  return (
    <div className="single-item">
      <img src={urlImage} alt="Services" />
      <h3>Precio: {moneyFormat({ amount: Number(price) })}</h3>
      <a href="" onClick={HandleEdit}>
        Editar
      </a>
      <a href="" onClick={HandleDelete}>
        Borrar
      </a>
    </div>
  );
};

export default SingleItem;
