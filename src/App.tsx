import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement, setCounter } from './redux/counterSlice'

import { RootState } from './redux/store'

export const App = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.counter)
  const [value, setValue] = useState('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    const isNumber = typeof +value === 'number' && !Number.isNaN(+value)
    setValue(isNumber ? value : '')
  }

  const resetValue = () => {
    dispatch(setCounter(0))
    setValue('')
  }

  return (
    <>
      <input type="text" value={value} onChange={handleOnChange} />
      <div className="App">Your Counter {counter}</div>
      <button onClick={() => dispatch(decrement())}>Minus</button>
      <button onClick={() => dispatch(increment())}>Plus </button>
      <button onClick={() => dispatch(setCounter(+value))}>Set Value </button>
      <button onClick={() => dispatch(resetValue)}>Reset Value </button>
    </>
  )
}
