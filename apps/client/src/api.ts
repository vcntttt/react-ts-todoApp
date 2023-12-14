import { type IDTodo, type Todo } from './types/todo'

export const addTaskRequest = async (task: Todo): Promise<void> => {
  await fetch('/api/tasks/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task })
  })
}

export const deleteTaskRequest = async (id: IDTodo): Promise<void> => {
  await fetch(`/api/tasks/delete/${id}`, {
    method: 'DELETE'
  })
}

export const toggleTaskRequest = async (task: Todo): Promise<void> => {
  await fetch('/api/tasks/toggle', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task })
  })
}

export const updateTaskRequest = async (task: Todo): Promise<void> => {
  await fetch('/api/tasks/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task })
  })
}
