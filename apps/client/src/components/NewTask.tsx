import { useRef } from 'react'

interface Props {
  onAddTask: (task: string) => void
}

export const NewTask: React.FC<Props> = ({ onAddTask }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit: React.FormEventHandler = (event: React.FormEvent<HTMLFormElement>) => {
    if (inputRef.current !== null) {
      onAddTask(inputRef.current.value)
      inputRef.current.value = ''
      inputRef.current.focus()
    }
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}
      className="flex"
    >
      <input
        type="text"
        placeholder="Enter new task"
        ref={inputRef}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
    </form>
  )
}
