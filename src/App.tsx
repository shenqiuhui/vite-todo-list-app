import { useState } from 'react'
import { useStorage } from './hooks'
import TodoInput from './components/TodoInput'
import TodoFilter from './components/TodoFilter'
import TodoContent from './components/TodoContent'

import { TodoItem, Status } from './type'

const App = () => {
  const [todos, setTodos] = useStorage<TodoItem[]>('todos', []);
  const [searchValue, setSearchValue] = useState<string>(`${Status.IS_CREATE},${Status.IS_DONE}`)

  const handleSubmit = (item: TodoItem) => {
    setTodos((todos) => [...todos, item])
  }

  const handleOperate = (newTodos: TodoItem[]) => {
    setTodos(newTodos)
  }

  const handleSearch = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className='todo-app'>
      <h2 className='todo-title'>
        待办清单
      </h2>
      <TodoInput onSubmit={handleSubmit} />
      <TodoFilter value={searchValue} onSearch={handleSearch} />
      <TodoContent data={todos} filterStatus={searchValue} onOperate={handleOperate} />
    </div>
  )
}

export default App
