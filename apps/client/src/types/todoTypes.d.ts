import type { TODO_FILTERS } from './consts'

export interface Todo {
  id: IDTodo
  name: string
  done: boolean
}

export type ListofTodos = Todo[]

export type IDTodo = `${string}-${string}-${string}-${string}-${string}`

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
