import { Route } from "react-router-dom";
import home from "./Pages/home";
import about from "./Pages/about";
function App() {
  return (
    <>
      <Route path="/" component={home} exact />
      <Route path="/about" component={about} />
    </>
  );
}

export default App;
