import { createSlice } from "@reduxjs/toolkit";

export let user = createSlice({
  name: "user", // 사용할 변수의 이름 등록
  initialState: { id: "didRlRl", name: "yang", rating: 2 },
  reducers: {
    changeName(prev) {
      prev.name = "seung";
    },
    changeRate(prev, action) {
      prev.rating += action.payload;
    },
  },
});

export let { changeName, changeRate } = user.actions;
