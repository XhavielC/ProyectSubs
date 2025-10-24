import { useState, type FormEvent } from "react";

interface FormAddMoneyProps {
  setCount: (value: number) => void;
  setIsValid: (value: boolean) => void;
}

const FormAddMoney = ({ setCount, setIsValid }: FormAddMoneyProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleform = (e: FormEvent) => {
    e.preventDefault();
    if (input == "" || Number(input) < 0) {
      setError(true);
      return;
    }
    setError(false);
    setCount(Number(input));
    setIsValid(true);
  };

  return (
    <div className="form-add-money">
      <form onSubmit={handleform}>
        <p>Agregar Presupuesto</p>
        <input
          type="number"
          placeholder="300$"
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Agregar" />
      </form>
      {error ? <p className="error">Presupuesto Invalido</p> : null}
    </div>
  );
};

export default FormAddMoney;
