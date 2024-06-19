import useVideoCategory from '../Utils/Hooks/useVideoCategory'
import Button from './Button'

const ButtonList = () => {
  const categoryList = useVideoCategory()
  const filteredCategoryList = categoryList.filter(
    (items) => items.snippet.assignable
  )

  return (
    <section className="mt-4 px-4 flex gap-3 overflow-auto scrollbar-thin side-scroll-bar hover:scroll-bar-hover ">
      {filteredCategoryList.map((category, index) => (
        <Button key={index} catData={category} />
      ))}
    </section>
  )
}
export default ButtonList
