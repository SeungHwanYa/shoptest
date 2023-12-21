import cssStyle from "../css/ShopList.module.css";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function ShopList() {
  // 고차함수의 종류
  // 1. [].map((a,i,arr)=>{}) (새로운 배열로 반환)
  // 2. [].filter((a)=>{}) (새로운 배열로 반환)
  // 3. [1,2,3,4].reduce(()=>{})
  // 4. [].find(()=>{})
  // 5. [].some(()=>{})  boolean 타입으로 반환
  // 6. [].every(()=>{}) 모두가 다 맞는지 안맞는지 판별
  // 7. [].sort((a,b)=>a-b)
  let productData = useSelector((a) => a.pData);
  let [reList, setReList] = useState(productData);
  return (
    <main className={cssStyle.shopList}>
      <div>
        <button
          onClick={() => {
            setReList(productData);
          }}
        >
          등록순
        </button>
        <button
          onClick={() => {
            setReList([...reList].sort((a, b) => a.price - b.price));
          }} // 오름차순 하는법
        >
          낮은가격
        </button>
        <button
          onClick={() => {
            setReList([...reList].sort((a, b) => b.price - a.price));
          }} //내림차순 하는법
        >
          높은가격
        </button>
        <button
          onClick={() => {
            setReList([...reList].sort((a, b) => b.discount - a.discount));
          }}
        >
          높은할인율
        </button>
        <button
          onClick={() => {
            setReList([...productData].filter((a) => a.category === "new"));
          }}
        >
          신상품(new)
        </button>
        <button
          onClick={() => {
            setReList([...productData].filter((a) => a.category === "top"));
          }}
        >
          인기상품(top)
        </button>
      </div>
      <ul>
        {reList.map((data) => {
          return (
            <li key={data._id}>
              <ProductCard data={data} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
