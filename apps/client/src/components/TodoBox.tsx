import { type ListofTodos } from '../types/todo'
import { Todo } from './Todo'

interface Props {
  todos: ListofTodos
  onRemove: (id: string) => void
  onToggle: (id: string) => void
}

export const TodoBox: React.FC<Props> = ({ todos, onRemove, onToggle }) => {
  return (
    <ul className='flex flex-col gap-4'>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          done={todo.done}
          onRemove={onRemove}
          onToggle={onToggle}/>
      ))}
    </ul>
  )
}
