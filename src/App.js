import "./index.css";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./pages/blogPage";
import UserInfo from "./components/profile/UserInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<UserInfo />}/>
          <Route path="/blogs" element={<BlogPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
