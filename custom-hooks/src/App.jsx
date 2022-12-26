import "./App.css";
import { Assignment } from "./components/Assignment";
// import { Counter } from "./components/Counter";
// import { Cart } from "./components/Cart";
// import { Form } from "./components/Form";
// // import { Fetch } from "./components/Fetch";
// import { FragmentDemo } from "./components/FragmentDemo";
// import { BorderWrapper } from "./components/BorderWrapper";
import { Data } from "./components/Data";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      {/* <BorderWrapper>
        <Counter />
        <Cart />
      </BorderWrapper> */}
      {/* <BorderWrapper> */}
      {/* <Form /> */}
      {/* </BorderWrapper> */}
      {/* <Fetch /> */}
      {/* <BorderWrapper>
        <BorderWrapper>
          <FragmentDemo />
        </BorderWrapper>
      </BorderWrapper> */}
      {/* <Assignment /> */}
      <ErrorBoundary>
        <h1>title</h1>
      </ErrorBoundary>
      <ErrorBoundary>
        <Data value="vasanth" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Data />
      </ErrorBoundary>
    </div>
  );
}

export default App;
