import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  counter: number
}

const initialState: InitialState = {
  counter: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload
    },
  },
})

export const { increment, decrement, setCounter } = counterSlice.actions
export const counterReducer = counterSlice.reducer
