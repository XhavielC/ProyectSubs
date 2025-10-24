import Header from "./components/Header";
import "./App.css";
import FormAddMoney from "./components/FormAddMoney";
import { useState } from "react";
import MainControl from "./components/MainControl";

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const component = isValid ? (
    <MainControl count={count} />
  ) : (
    <FormAddMoney setCount={setCount} setIsValid={setIsValid} />
  );

  return (
    <div className="App">
      <Header />
      {component}
      <h3>Main Component</h3>
    </div>
  );
}

export default App;
