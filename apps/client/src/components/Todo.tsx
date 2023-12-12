import { type Todo as TodoType } from '../types/todo'

interface Props extends TodoType {
  onRemove: (id: string) => void
  onToggle: (id: string) => void
}

export const Todo: React.FC<Props> = ({ id, name, done, onRemove, onToggle }) => {
  return (
    <li className='flex p-4 bg-slate-200 text-black rounded gap-2'>
      <h1 className={`text-xl ${done ? 'line-through' : ''}`}>{name}</h1>
      <input type="checkbox" checked={done} onChange={() => { onToggle(id) }} />
      <button className='bg-red-600 p-1 rounded text-white' onClick={() => { onRemove(id) }}>X</button>
    </li>
  )
}
