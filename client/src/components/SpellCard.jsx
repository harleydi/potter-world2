const SpellCard = ({ name, description }) => {
  return (
    /* From Uiverse.io by 05akalan57 */ 
<div
  className="relative drop-shadow-xl w-56 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]"
>
  <div
    className="absolute flex flex-col items-center justify-center gap-4 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]"
  >
    <h1 className="font-bold">{name}</h1>
    <p className="text-center overflow-scroll">{description}</p>
  </div>
  <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
</div>

  )
}
export default SpellCard