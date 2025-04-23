import Button from "../components/Button"

const Navbar = () => {
  return (
    <div className="flex gap-4">
        <Button href={'/'} title={'Characters'} />
        <Button href={'/spells'} title={'Spells'} />

    </div>
  )
}
export default Navbar