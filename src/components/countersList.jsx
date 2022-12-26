import React, { useState } from 'react'
import Counter from './counter'

export default function CountersList() {
  const initialState = [
    {id: 0, value: 0, name: 'Ненужная вещь'},
    {id: 1, value: 1, name: 'Ложка'},
    {id: 2, value: 1, name: 'Вилка'},
    {id: 3, value: 1, name: 'Тарелка'},
    {id: 4, value: 1, name: 'Набор минималиста'},
  ]
  const [counters, setCounters] = useState(initialState)

  const handleDelete = (id) => {
    setCounters(counters.filter(c => c.id !== id))
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = (id) => {
    setCounters(counters.map(c => (c.id === id 
      ? { ...c, value: ++c.value}
      : c
    )))
  }

  const handleDecrement = (id) => {
    setCounters(counters.map(c => (c.id === id 
      ? { ...c, value: --c.value}
      : c
    )))
  }

  return (<>
    {counters.map(count => (
      <Counter key={count.id} {...count} onDecrement={handleDecrement} onIncrement={handleIncrement} onDelete={handleDelete}/>
    ))}
    <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
  </>)
}
