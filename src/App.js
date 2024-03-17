import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import "./index.css"

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      {/* <Banner /> */}
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
