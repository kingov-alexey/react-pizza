// native libs
import React from "react";
import { Routes, Route } from "react-router-dom";

//scss
import "./scss/app.scss";

//components
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const SearchContext = React.createContext();


function App() {
  const [searchValue, setSearchValue] = React.useState("");

  // console.log(searchValue);

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
          <Header  />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default App;
