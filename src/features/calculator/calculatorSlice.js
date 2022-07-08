import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  input: 0,
  result: 0,
  operator: null,
  showResult: false,
};

const calclatorSlice = createSlice({
  name: "calclator",
  initialState,
  reducers: {
    inputNum(state, action) {
      state.showResult = false;
      if (state.operator === null && state.result) {
        state.input = 0;
        state.result = 0;
        state.operator = null;
      }
      state.input = state.input * 10 + Number(action.payload);
    },
    add(state, action) {
      state.operator = "add";
      if (state.result === 0) {
        state.result = state.input;
      } else {
        state.result = state.result + state.input;

        state.showResult = true;
      }
      state.input = 0;
    },
    sub(state, action) {
      state.operator = "sub";
      if (state.result === 0) {
        state.result = state.input;
      } else {
        state.result = state.result - state.input;

        state.showResult = true;
      }
      state.input = 0;
    },
    mul: (state, action) => {
      state.operator = "mul";
      if (state.result === 0) {
        state.result = state.input;
      } else {
        state.result = state.result * state.input;

        state.showResult = true;
      }
      state.input = 0;
    },
    divide: (state, action) => {
      state.operator = "div";
      if (state.input === 0) {
        return (state.result = "Error");
      }
      if (state.result === 0) {
        state.result = state.input;
      } else {
        state.result = state.result / state.input;
        if (state.result.toString().length > 9) {
          state.result = state.result.toFixed(8);
        }

        state.showResult = true;
      }
      state.input = 0;
    },
    invert: (state, action) => {
      state.input = state.input * -1;
    },
    percent: (state, aciton) => {
      state.input = state.input * 0.01;
    },
    equal(state, action) {
      console.log(state.result.toString());
      if (state.result.toString().length > 9) {
        state.result = state.result.toExponential(2);
      }
      state.operator = null;
    },
    reset: () => initialState,
  },
});

export const {
  add,
  sub,
  mul,
  divide,
  reset,
  inputNum,
  equal,
  invert,
  percent,
} = calclatorSlice.actions;

export default calclatorSlice.reducer;
