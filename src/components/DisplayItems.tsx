import type { SubProps } from "../Type";
import SingleItem from "./SingleItem";

const DisplayItems = ({ sub, eliminarItem, editItem }: SubProps) => {
  return (
    <>
      <h2>Suscripciones</h2>

      {sub.map((item) => (
        <SingleItem
          id={item.id}
          price={item.price}
          type={item.type}
          key={item.id}
          eliminarItem={eliminarItem}
          editItem={editItem}
        />
      ))}
    </>
  );
};

export default DisplayItems;
