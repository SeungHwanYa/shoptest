import { createSlice } from "@reduxjs/toolkit";

export let stock = createSlice({
  name: "stock",
  initialState: [5, 8, 10, 100],
});
