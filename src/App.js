import "./index.css";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
