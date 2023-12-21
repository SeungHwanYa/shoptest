import { useParams } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
// 부트 스트랩에서 {}에 묶어서 쓰려면 ex)react-bootstrap뒤에 붙는거를 지워줘야한다.
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import cssStyle from "../css/Detail.module.css";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../store/cartList";

export default function Detail() {
  let productData = useSelector((a) => a.pData);
  let { id } = useParams(); // 현재 클릭한 id 반환
  // 컨포넌트는
  // 1. 생성될 수 있고(mount)
  // 2. 재 랜더링 될 수 있고(update)
  // 3. 삭제될 수 있다.(unmount)
  let item = productData.find((a) => String(a._id) === id);
  let Similar = productData.filter((a) => a.category === item.category);

  let [open, setOpen] = useState(true);
  let [count, setCount] = useState(1);
  let [modal, setModal] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    let timmer = setTimeout(() => {
      setOpen(false);
    }, 2000);
    // 2초안에 클릭하세요 라는 창이 다시 띄게 만드는법
    return () => {
      setOpen(true);
      clearTimeout(timmer);
    };
  }, [id]);

  let watched = JSON.parse(localStorage.getItem("watched") || "[]");
  let update = [...new Set([...watched, item._id])]; // 기존에 있던거에 아이디를 추가
  localStorage.setItem("watched", JSON.stringify(update));
  // set함수는 같은거는 또 추가되지 않는다
  return (
    <main>
      {modal && <Modal setModal={setModal} />}
      {open && (
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          2초 안에 클릭하시오
        </div>
      )}
      <div className={cssStyle.detailCon}>
        <div className={cssStyle.img}>
          <img src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt="상품명" />
        </div>
        <div className={cssStyle.desc}>
          <strong>{item.title}</strong>
          <span>{Number(item.price).toLocaleString()}원</span>
          <div className={cssStyle.count}>
            {count <= 1 ? (
              <button disabled>-</button>
            ) : (
              <button
                onClick={() => {
                  setCount((prev) => prev - 1);
                }}
              >
                -
              </button>
            )}
            <span>{count}</span>
            <button
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                // 장바구니 추가하는방법
                dispatch(
                  addItem({
                    _id: item._id,
                    title: item.title,
                    img: item.img,
                    price: item.price,
                    count: count,
                  })
                );
                setModal(true);
              }}
            >
              ADD CART
            </button>
          </div>
        </div>
      </div>
      <div style={{ padding: "50px 0" }}>
        <Tabs
          defaultActiveKey="Description"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Description" title="Description">
            <div>
              1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam dolore rerum saepe at laborum nesciunt aliquid,
              exercitationem nam vel impedit molestiae quam magnam officia eius
              perspiciatis eos quia doloremque rem?
            </div>
          </Tab>
          <Tab eventKey="information" title="Additional information">
            <div>
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              aspernatur voluptates magni. Libero, nostrum similique nisi
              aliquam facere expedita porro, possimus iure assumenda voluptatum
              voluptatem eos, eaque minima repellat molestias.
            </div>
          </Tab>
          <Tab eventKey="Reviews" title="Reviews">
            <div>
              3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur animi soluta nemo non et consequuntur officiis. Iure
              optio, commodi reprehenderit enim aperiam necessitatibus amet
              minima fugit, repellendus fugiat quis quam?
            </div>
          </Tab>
        </Tabs>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        className={cssStyle.slide}
      >
        {Similar.map((data) => {
          return (
            <SwiperSlide key={data._id}>
              <ProductCard data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}
