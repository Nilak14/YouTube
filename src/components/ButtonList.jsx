import useVideoCategory from '../Utils/Hooks/useVideoCategory'
import Button from './Button'

const ButtonList = () => {
  const categoryList = useVideoCategory()

  return (
    <section className="mt-4 px-4 flex gap-3 overflow-auto scrollbar-thin side-scroll-bar hover:scroll-bar-hover ">
      {categoryList.map((category, index) => (
        <Button key={index} catData={category} />
      ))}
    </section>
  )
}
export default ButtonList
