import { useRef } from 'react'
import { Input, Button } from '@/components/ui'
import { MainIcon } from '@/components/icons'

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
        extraStyles="flex justify-between"
      >
        Add
      <MainIcon className='w-6 h-6'/>
      </Button>
    </form>
  )
}
