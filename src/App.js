import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Product from "./components/product/Product";
import HowItWork from "./components/howitworks/HowItWork";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import GetInTouch from "./components/getintouch/GetInTouch";
import About from "./components/about/About";

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <HowItWork/>
    <Product/>
    <About/>
    <GetInTouch/>
    <Footer/>
    </>
  );
}
export default App;
