interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className="w-4/5 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      {children}
    </button>

  )
}

export default Button
