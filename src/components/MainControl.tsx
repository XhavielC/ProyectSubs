import { useState } from "react";
import AgregarFormatoSubs from "./AgregarFormatoSubs";
import Balance from "./Balance";
import type { SubscripcionesProps } from "../Type";
import DisplayItems from "./DisplayItems";

interface MainControlProps {
  count: number;
}

const MainControl = ({ count }: MainControlProps) => {
  const [sub, setSub] = useState<SubscripcionesProps[]>([]);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState("");
  const [gastado, setGastado] = useState(0);

  const eliminarItem = (id: number) => {
    const newList = sub.filter((item) => item.id != id);
    setSub(newList);
  };

  const editItem = (id: number) => {
    setEditId(String(id));

    const itemToEdit = sub.find((item) => item.id === id);

    if (itemToEdit) {
      setType(itemToEdit.type);
      setPrice(itemToEdit.price);
    }
  };

  return (
    <>
      <div className="main-form">
        <Balance
          count={count || 0}
          sub={sub}
          gastado={gastado}
          setGastado={setGastado}
        />

        <AgregarFormatoSubs
          setPrice={setPrice}
          setType={setType}
          type={type}
          price={price}
          setSub={setSub}
          sub={sub}
          editId={editId}
          setEditId={setEditId}
          gastado={gastado}
          count={count}
        />
      </div>
      <DisplayItems sub={sub} eliminarItem={eliminarItem} editItem={editItem} />
    </>
  );
};

export default MainControl;
