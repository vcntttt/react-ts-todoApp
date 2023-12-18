import { type IDTodo, type Todo } from '../types/todo'

interface Props {
  onToggle: (task: Todo) => void
  onRemove: (id: IDTodo) => void
  task: Todo
}

export const TodoItem: React.FC<Props> = ({ task, onToggle, onRemove }) => {
  const { id, name, done } = task
  return (
    <li className="flex p-4 bg-slate-200 text-black rounded gap-2 min-w-[300px] justify-between items-center">
      <h1 className={`text-xl ${done ? 'line-through' : ''}`}>
        {name}
      </h1>
      <div className="flex gap-4 items-center">
        <input
          className='w-4 h-4'
          type="checkbox"
          checked={done}
          onChange={() => {
            onToggle(task)
          }}
        />
        <button
          className="bg-red-600 p-1 rounded text-white"
          onClick={() => {
            onRemove(id)
          }}
        >
          X
        </button>
      </div>
    </li>
  )
}
