import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Login from "./pages/Login";

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
