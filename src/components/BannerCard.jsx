import cssStyle from "../css/BannerCard.module.css";
import { useNavigate } from "react-router-dom";

export default function BannerCard({ item }) {
  let navigate = useNavigate();
  return (
    <div className={cssStyle.bannerCard}>
      <img
        src={`${process.env.PUBLIC_URL}/img/${item.bannerImg}`}
        alt="item.bannerTitle"
      />
      <div>
        <strong>{item.bannerTitle}</strong>
        <span>{item.price}</span>
        <button onClick={() => navigate(`/detail/${item._id}`)}>
          View Product
        </button>
      </div>
    </div>
  );
}
