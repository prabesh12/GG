import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Product from "./components/Product/Product";
import HowItWork from "./components/HowItWorks/HowItWork";
function App() {
  return (
    <>
    <HowItWork />
    <Product />
    </>
  );
}
export default App;
