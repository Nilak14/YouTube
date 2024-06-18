import Button from './Button'

const ButtonList = () => {
  const buttonList = [
    'All',
    'Gaming',
    'Javascript',
    'Live',
    'Clash Royale',
    'Strategies',
    'Music',
    'AI',
    'Cricket',
    'Football',
    'World Cup',
    'Clash of Clans',
  ]
  return (
    <section className="mt-4 px-4 flex gap-3 overflow-auto ">
      {buttonList.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </section>
  )
}
export default ButtonList
