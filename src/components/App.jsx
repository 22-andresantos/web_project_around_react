import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(`Erro dos dados do usuário: ${err}`);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
