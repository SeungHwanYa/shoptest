import { createSlice } from "@reduxjs/toolkit";

import cartData from "./cartData";

export let cartList = createSlice({
  name: "cartList",
  initialState: cartData,
  // +버튼 누르면 개수 올라가는 함수
  reducers: {
    plusCount(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload);
      prev[num].count++;
    },
    minusCount(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload);
      prev[num].count--;
    },
    delItem(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload);
      prev.splice(num, 1); //삭제버튼 누르면 삭제되게 하는 법
    },
    addItem(prev, action) {
      // 장바구니 추가하는 방법
      let num = prev.findIndex((a) => a._id === action.payload._id);
      if (num === -1) { // -1은 장바구니에 담겨있지 않을 경우를 의미한다
        prev.push(action.payload); // 장바구니에 없는 것을 새로 추가
      } else {
        prev[num].count += action.payload.count; // 기존에 담겨있는 것에서 개수만 추가
      }
    },
  },
});

export let { plusCount, minusCount, delItem, addItem } = cartList.actions;
