import { useEffect, useMemo, useState } from 'react'
import { TodoBox } from './components/TodoBox.tsx'
import { Filter } from './components/Filter'
import { type FilterValue, TODO_FILTERS, ListofTodos } from './types/todo'
import { NewTask } from './components/NewTask.tsx'
import { useSEO } from './hooks/useSEO.tsx'


function App (): JSX.Element {
  const [todos, setTodos] = useState<ListofTodos>([])
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  useSEO({ title: 'Todo List', description: 'Todo List' })

  useEffect(() => {
    async function getTodos (): Promise<void> {
      const response = await fetch('/api/tasks')
      const data = await response.json()
      setTodos(data)
    }
    getTodos()
  },[])

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.done
      if (filterSelected === TODO_FILTERS.COMPLETED) return todo.done
      else return todo
    })
  }, [todos, filterSelected])

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleToggle = (id: string): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleAdd = (task: string): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      name: task,
      done: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <main className='m-4 flex flex-col items-center gap-2'>
      <h1 className='text-3xl font-bold'>Lista de Tareas</h1>
      <NewTask
      onAddTask={handleAdd}
      />
      <TodoBox
      todos={filteredTodos}
      onRemove={handleRemove}
      onToggle={handleToggle}
      />
      <Filter
      filterSelected={filterSelected}
      onFilterChange={handleFilterChange}
      />
    </main>
  )
}

export default App
