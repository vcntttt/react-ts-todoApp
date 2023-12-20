import { useEffect, useMemo, useState } from 'react'
import { TODO_FILTERS } from '@/types/consts'
import type { FilterValue, ListofTodos, Todo, IDTodo } from '@/types/todoTypes'
import { addTaskRequest, deleteTaskRequest, toggleTaskRequest } from '@/utils/api'

export const useTodos = () => {
  const [todos, setTodos] = useState<ListofTodos>([])
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  async function getTodos () {
    try {
      const response = await fetch('/api/tasks')
      const data: Todo[] = await response.json()
      setTodos(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [todos])

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleAdd = async (task: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      name: task,
      done: false
    }
    await addTaskRequest(newTodo)
    setTodos([...todos, newTodo])
  }

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.done
      if (filterSelected === TODO_FILTERS.COMPLETED) return todo.done
      else return todo
    })
  }, [todos, filterSelected])

  const handleRemove = async (id: IDTodo) => {
    try {
      await deleteTaskRequest(id)
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleToggle = async (task: Todo) => {
    try {
      const updatedTask = { ...task, done: !task.done }
      await toggleTaskRequest(updatedTask)
      setTodos(prevTodos => prevTodos.map(todo => (todo.id === task.id ? updatedTask : todo)))
    } catch (error) {
      console.error(error)
    }
  }

  return {
    todos,
    filterSelected,
    filteredTodos,
    handleRemove,
    handleToggle,
    handleFilterChange,
    handleAdd
  }
}
