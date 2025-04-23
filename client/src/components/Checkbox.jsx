const Checkbox = () => {
  return (
    <label className="cursor-pointer duration-300 relative overflow-hidden w-8 h-8 flex justify-center items-center border rounded-lg bg-gray-50 before:absolute before:w-8 before:h-8 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-sm after:absolute after:z-10 after:w-4 after:h-4 after:content[''] after:bg-rose-300 after:left-1 after:bottom-1 after:rounded-full after:blur-sm">
      <input className="peer hidden" type="checkbox" />
      <div className="w-8 h-8 rounded-md opacity-0 peer-checked:opacity-100 bg-gradient-to-tr from-emerald-800 via-emerald-700 to-emerald-500 scale-0 transition-all z-20 duration-300 peer-checked:transition-all top-2 left-2 peer-checked:scale-100 peer-checked:duration-300 peer-checked:bg-gradient-to-tr" />
    </label>
  );
};
export default Checkbox;
