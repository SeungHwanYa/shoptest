import { useDispatch, useSelector } from "react-redux";
import cssStyle from "../css/Cart.module.css";
import { changeName, changeRate } from "../store/user";
import { plusCount, minusCount, delItem } from "../store/cartList";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  let user = useSelector((a) => a.user);
  let cartList = useSelector((a) => a.cartList);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let iconTrash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="14"
      viewBox="0 0 448 512"
    >
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
    </svg>
  );

  return (
    <main className={cssStyle.cart}>
      <h2>Shopping cart</h2>
      <p>
        <span>
          {user.name} / {user.rating}등급
        </span>
        have {cartList.length} item in your cart
      </p>
      <p>
        <button
          onClick={() => {
            dispatch(changeName());
            dispatch(changeRate(10));
          }}
        >
          회원정보 변경
        </button>
      </p>
      <hr />
      <ul>
        {cartList.map((item) => (
          <li className={cssStyle.cartList} key={item._id}>
            <div
              className={cssStyle.img}
              onClick={() => {
                navigate(`/detail/${item._id}`);
              }}
            >
              <img src={`/img/${item.img}`} alt={item.title} />
            </div>
            <div className={cssStyle.title}>{item.title}</div>
            <div className={cssStyle.num}>
              {Number(item.price).toLocaleString()}원
            </div>
            <div className={cssStyle.count}>
              {item.count <= 1 ? ( // 1개 이하로는 -버튼 작동 안하게 하는법
                <button disabled>-</button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(minusCount(item._id));
                  }}
                >
                  -
                </button>
              )}

              <span>{item.count}</span>
              <button
                onClick={() => {
                  // 클릭한정보를 cartlist의 plusCount 함수에 전달
                  dispatch(plusCount(item._id));
                }}
              >
                +
              </button>
            </div>
            <div>{Number(item.price * item.count).toLocaleString()}원</div>
            <div
              className={cssStyle.trash}
              onClick={() => {
                dispatch(delItem(item._id));
              }}
            >
              {iconTrash}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
