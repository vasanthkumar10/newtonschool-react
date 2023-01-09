import "./App.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <div className="App">
      <Counter1 name="counter1" />
      <Counter2 name="counter2" age={20} />
    </div>
  );
}

export default App;
