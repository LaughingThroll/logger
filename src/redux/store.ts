import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'
import { logger } from './middlewares/logger'

export const store = configureStore({
  reducer: counterReducer,
  middleware: (getDefaultMiddlware) => {
    return [...getDefaultMiddlware(), logger]
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
