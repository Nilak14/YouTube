const Button = ({catData}) => {
  const {
    id,
    snippet: {title},
  } = catData
  return (
    <button className=" whitespace-nowrap w-[150px] px-2 py-1 bg-gray-300 hover:bg-gray-200 rounded-lg font-semibold tracking-wide">
      {title}
    </button>
  )
}
export default Button
