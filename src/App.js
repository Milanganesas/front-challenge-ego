import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApiProvider } from "./Context/Models";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Footer from "./Components/Footer";


function App() {
  return (
    <ApiProvider>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ApiProvider>
  );
}

export default App;
