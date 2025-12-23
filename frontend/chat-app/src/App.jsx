import { Route } from "react-router-dom";
import home from "./Pages/home";
import about from "./Pages/about";
import "./App.css";
function App() {
  return (
    <>
      <div className="App">
        <Route path="/" component={home} exact />
        <Route path="/about" component={about} />
      </div>
    </>
  );
}

export default App;
