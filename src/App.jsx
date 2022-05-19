import React, {useState} from "react";
import { Outlet } from "react-router-dom";

// importaciones de los compoenentes
import Header from "./components/Header";
import PrivateHeader from "./components/PrivateHeader";
import Footer from "./components/Footer";


function App() {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <>
      {userLogin ? <PrivateHeader /> : <Header /> }
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
