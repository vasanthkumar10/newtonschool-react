import "./App.css";
import { Counter } from "./components/Counter";
import { Cart } from "./components/Cart";
import { Form } from "./components/Form";
// import { Fetch } from "./components/Fetch";
import { FragmentDemo } from "./components/FragmentDemo";
import { BorderWrapper } from "./components/BorderWrapper";

function App() {
  return (
    <div className="App">
      <BorderWrapper>
        <Counter />
        <Cart />
      </BorderWrapper>
      {/* <BorderWrapper> */}
      <Form />
      {/* </BorderWrapper> */}
      {/* <Fetch /> */}
      <BorderWrapper>
        <BorderWrapper>
          <FragmentDemo />
        </BorderWrapper>
      </BorderWrapper>
    </div>
  );
}

export default App;
