import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Intro from "./Intro";
import RockScissorsPaper from "./RockScissorsPaper";
import Weather from "./Weather";
import ProductIndex from "./page/ProductIndex";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import PrivateRoute from "./routes/PrivateRoute"

import ProductPage from "./productPage";
import ProductDetailPage from "./productDetailPage";
import LoginPage from "./LoginPage";
import UserPage from "./UserPage";

function App() {

  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("authenticate", authenticate) //로그인 ture/false 확인!!!
  },[authenticate]);

  // 로그인 했을 때만 보여지게 redirect
  // -> 이거를 이제 routes 폴더로 이동해서 작업해본다
  // const PrivateRoute = () => {
  //   return authenticate == true ? <ProductDetail /> : <Navigate to="/Login" />
  // }
  
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/RockScissorsPaper" element={<RockScissorsPaper />} />
      <Route path="/Weather" element={<Weather />} />
      <Route path="/Product" element={<ProductIndex authenticate={authenticate} setAuthenticate={setAuthenticate} />} />
      <Route path="/Product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      <Route path="/Login" element={<Login setAuthenticate={setAuthenticate} />} />

      {/* 이 아래는 테스트 라우터!
      <Route path="/Product" element={<ProductPage />} />
      <Route path="/Product/:id" element={<ProductDetailPage />} />
      <Route path="/Product/:id/:num" element={<ProductDetailPage />} />
      <Route path="Login" element={<LoginPage />} />
      <Route path="User" element={< PrivateRoute />} /> */}
    </Routes>
  );
}

export default App;