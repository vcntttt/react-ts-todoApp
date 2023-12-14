import { TodoBox } from './components/TodoBox.tsx'
import { Filter } from './components/Filter'
import { NewTask } from './components/NewTask.tsx'
import { useSEO } from './hooks/useSEO.tsx'
import { useTodos } from './hooks/useTodos.tsx'

function App (): JSX.Element {
  useSEO({ title: 'Todo List', description: 'Todo List' })

  const {
    filterSelected,
    handleFilterChange,
    filteredTodos,
    handleAdd
  } = useTodos()

  return (
    <main className="m-4 flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold">Lista de Tareas</h1>
      <NewTask onAddTask={handleAdd} />
      <TodoBox
        todos={filteredTodos}
      />
      <Filter
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </main>
  )
}

export default App
