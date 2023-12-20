interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extraStyles?: string
}

export const Button: React.FC<Props> = ({ children, extraStyles, ...props }) => {
  return (
    <button
      className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${extraStyles}`}
      {...props}
    >
      {children}
    </button>

  )
}
