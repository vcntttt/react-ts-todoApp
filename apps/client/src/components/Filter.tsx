import { FILTERS_BTNS, type FilterValue } from '../types/todo'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}
export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul>
      {
        Object.entries(FILTERS_BTNS).map(([key, { href, text }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'text-sky-500' : 'text-gray-400'
          return (
            <li
              key={key}
            >
              <a
              className={className}
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
