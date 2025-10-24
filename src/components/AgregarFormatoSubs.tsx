import { useState, type FormEvent } from "react";
import type { Props } from "../Type";

const AgregarFormatoSubs = ({
  setType,
  setPrice,
  setSub,
  price,
  type,
  sub,
  editId,
  setEditId,
  gastado,
  count,
}: Props) => {
  const [error, setError] = useState(false);
  const [errorMount, setErrorMount] = useState(false);

  const handleSubs = (e: FormEvent) => {
    e.preventDefault();
    if (String(price) === "" || Number(price) < 0 || String(type) === "") {
      setError(true);
      return;
    }
    if (count - gastado < Number(price)) {
      setErrorMount(true);
      return;
    }
    setErrorMount(false);

    setError(false);
    if (editId != "") {
      setEditId("");
      const newSub = sub.map((item) => {
        if (item.id === Number(editId)) {
          item.type = type;
          item.price = price;
        }
        return item;
      });
      setSub(newSub);
    } else {
      const data = {
        type: type,
        price: price,
        id: Date.now(),
      };
      const ArrSubs = [...sub, data];
      setSub(ArrSubs);
      console.log(ArrSubs);
    }

    setType("");
    setPrice("");

    // console.log(setPrice);
    // console.log(setType);
  };

  return (
    <div className="add-subscription">
      <h3>Agregar Suscripciones</h3>
      <form onSubmit={handleSubs}>
        {/* Formulario para agregar las Subscripciones */}

        <p>Servicios</p>

        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="">--Elegir--</option>
          <option value="netflix">Netflix</option>
          <option value="disneyPlus">Disney Plus</option>
          <option value="hboMax">HBO Max</option>
          <option value="starPlus">Star Plus</option>
          <option value="primeVideo">Prime Videos</option>
          <option value="spotify">Spotify</option>
          <option value="googleOne">Google One</option>
          <option value="appletv">Apple TV</option>
          <option value="digitel">Digitel</option>
          <option value="movistar">Movistar</option>
          <option value="airtek">Airtek</option>
          {/* <option value=""></option> */}
        </select>

        <p>Precio del Servicio</p>
        <input
          type="number"
          placeholder="5$"
          min={1}
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        {editId != "" ? (
          <input type="submit" value="Guardar" />
        ) : (
          <input type="submit" value="Agregar" />
        )}
      </form>
      {error ? <p className="error">Campos Inválidos</p> : null}
      {errorMount ? <p className="error">No tienes presupuesto</p> : null}
    </div>
  );
};

export default AgregarFormatoSubs;
