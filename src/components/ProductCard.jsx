import { useNavigate } from "react-router-dom";
import cssStyle from "../css/ProductCard.module.css";
// import styled from "styled-components";

export default function ProductCard({ data }) {
  let navigate = useNavigate();
  return (
    <figure
      className={cssStyle.pCard}
      onClick={() => navigate(`/detail/${data._id}`)}
    >
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/img/${data.img}`}
          alt={data.title}
        />
      </div>
      {data.discount !== "0" && <p>{data.discount}%</p>}
      <figcaption>
        <strong>{data.title}</strong>
        <span>{Number(data.price).toLocaleString()}원</span>
        {/* <Button bg="blue">버튼</Button>
        <Button bg="red">버튼</Button> */}
      </figcaption>
    </figure>
  );
}
// {data.discount !== "0" && <p>{data.discount}%</p>} -> 리스트중 할인율 0만 제거하는 방법

// style-component 사용하는 법
// css와 다른 점은 삼항 연산자 등을 사용 할 수 있다
// const Button = styled.button`
//   background-color: ${(props) => props.bg};
//   color: white;
//   padding: 1rem;
// `;
