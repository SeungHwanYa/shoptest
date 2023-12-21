import { Link, Outlet, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Company from "./Company";
import Main from "./Main";
import ShopList from "./ShopList";
import Cart from "./Cart";
// import { list } from "../productData";
import axios from "axios";
import { useEffect, useState } from "react";
import Detail from "./Detail";

function App() {
  // let [productData] = useState(list);

  // api 데이터를 호출하기 위한 함수
  // 비동기적인 함수를 동기적으로 수행하기 위해서 async 함수() / await 함수()

  // const response = fetch(
  //   "https://carrepe.github.io/datalist/productData.json.json"
  // ).then((res) => res.json());
  // console.log(response);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="shop_list" element={<ShopList />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="blog" element={<>블로그 페이지 입니다</>} />
          <Route path="our" element={<Company />}>
            <Route path="ceo" element={<>ceo 인사말</>} />
            <Route path="orga" element={<>조직도</>} />
          </Route>
          <Route path="search" element={<>검색 페이지</>} />
          <Route path="cart" element={<Cart />} />
          <Route path="mypage" element={<>마이 페이지</>} />
        </Route>
        <Route path="*" element={<>404 요청한 페이지는 없소</>} />
      </Routes>
    </>
  );
}
export default App;
