import type { FilterValue } from '@/types/todoTypes'
import { FILTERS_BTNS } from '@/types/consts'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className='flex gap-4 p-2 px-8 items-center justify-center '>
      {
        Object.entries(FILTERS_BTNS).map(([key, { href, text }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'text-red-500' : 'text-gray-950'
          return (
            <li
              key={key}
              className='cursor-pointer'
            >
              <a
              className={`${className} bg-slate-200 rounded p-2`}
              href={href}
              onClick={(event) => {
                event.preventDefault()
                onFilterChange(key as FilterValue)
              }}
              >
                {text}
              </a>
            </li>
          )
        }
        )}
    </ul>
  )
}
