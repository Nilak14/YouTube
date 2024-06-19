import {Link} from 'react-router-dom'

const Button = ({catData}) => {
  console.log(catData)
  const {
    id,
    snippet: {title},
  } = catData
  return (
    <Link to={`/${id}`}>
      <button className=" whitespace-nowrap  px-2 py-1 bg-gray-300 hover:bg-gray-200 rounded-lg font-semibold tracking-wide">
        {title}
      </button>
    </Link>
  )
}
export default Button
