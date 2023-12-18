import { useRef } from 'react'
import { Input, Button } from './ui/index'
interface Props {
  onAddTask: (task: string) => void
}

export const NewTask: React.FC<Props> = ({ onAddTask }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit: React.FormEventHandler = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    if (inputRef.current !== null) {
      onAddTask(inputRef.current.value)
      inputRef.current.value = ''
      inputRef.current.focus()
    }
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <Input placeholder="Enter new Task" type="text" ref={inputRef} />
      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </Button>
    </form>
  )
}
