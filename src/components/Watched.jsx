import { useSelector } from "react-redux";
import cssStyle from "../css/Watched.module.css";
import { useNavigate } from "react-router-dom";

export default function Watched() {
  let navigate = useNavigate();
  let wList = useSelector((a) => a.watched);
  let data = useSelector((a) => a.pData);

  let watchedData = data.filter((item) => wList.includes(item._id));

  return (
    <div className={cssStyle.watched}>
      <h2>최근 본 상품</h2>
      <ul>
        {watchedData.map((list) => (
          <li
            key={list._id}
            onClick={() => {
              navigate(`/detail/${list._id}`);
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/${list.img}`}
              alt="상품명"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
