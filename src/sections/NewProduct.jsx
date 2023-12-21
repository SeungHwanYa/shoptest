import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import cssStyle from "../css/NewProduct.module.css";
import { useSelector } from "react-redux";

export default function NewProduct() {
  let productData = useSelector((a) => a.pData);
  let newlist = productData.filter((item) => item.category === "new"); // 카테고리중 new만 고르는 방법
  let navigate = useNavigate();
  let goShopList = () => {
    navigate("/shop_list");
  };
  return (
    <section className={cssStyle.newProduct}>
      <h2>신상품 리스트</h2>
      <button onClick={goShopList}>View All</button>
      <ul>
        {newlist.map((data) => {
          // map은 자료를 여러번 돌릴때 사용한다
          return (
            <li key={data._id}>
              <ProductCard data={data} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
