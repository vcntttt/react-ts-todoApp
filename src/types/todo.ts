export interface Todo {
  id: IDTodo
  name: string
  done: boolean
}

export type ListofTodos = Todo[]

export type IDTodo = `${string}-${string}-${string}-${string}-${string}`

export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const FILTERS_BTNS = {
  [TODO_FILTERS.ALL]: {
    text: 'All',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    text: 'Active',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    text: 'Completed',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
