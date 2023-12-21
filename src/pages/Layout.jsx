import { Outlet } from "react-router-dom";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Watched from "../components/Watched";
import { useEffect } from "react";

export default function Layout() {
  // let obj1 = { name1: "자료1" };
  // console.log("1--", obj1);
  // localStorage.setItem("data1", obj1);

  // let obj2 = { name1: "자료2 JSON" };
  // let changeJSON = JSON.stringify(obj2);
  // localStorage.setItem("data2", changeJSON); //localStorage에 JSON형식으로 저장
  // console.log("2--", changeJSON);

  // let getItem = localStorage.getItem("data2");
  // console.log("3---", JSON.parse(getItem));

  useEffect(() => {
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", "[]");
    }
  }, []);

  return (
    <div className="mw">
      <Watched />
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
