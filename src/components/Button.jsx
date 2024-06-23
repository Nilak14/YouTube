import {NavLink} from 'react-router-dom'

const Button = ({catData}) => {
  const {
    id,
    snippet: {title},
  } = catData
  return (
    <NavLink
      className={({isActive}) =>
        ` ${
          isActive &&
          'text-white bg-gray-950 hover:text-white hover:bg-gray-950'
        }  whitespace-nowrap bg-gray-200  hover:bg-gray-300  px-2 py-1  rounded-lg font-semibold tracking-wide`
      }
      to={`cat/${id}`}
    >
      {title}
    </NavLink>
  )
}
export default Button
