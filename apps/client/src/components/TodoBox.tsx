import { useTodos } from '@/hooks/useTodos'
import { type ListofTodos } from '../types/todoTypes'
import { TodoItem } from '@/components/Todo'

interface Props {
  todos: ListofTodos
}

export const TodoBox: React.FC<Props> = ({ todos }) => {
  const { handleRemove, handleToggle } = useTodos()
  return (
    <>
      {todos.length > 0
        ? (
        <ul className='flex flex-col gap-4'>
          {todos.map((todo) => (
            <TodoItem
              onToggle={handleToggle}
              onRemove={handleRemove}
              key={todo.id}
              task={todo}
            />
          ))}
        </ul>
          )
        : (
        <p>No hay tareas pendientes</p>
          )}
    </>
  )
}
