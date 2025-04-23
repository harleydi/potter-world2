import { useState } from 'react';

const RadioSelector = () => {
  const [selectedOption, setSelectedOption] = useState('radio-free');
  const totalOptions = 3; // Change this if you add more options

  const handleChange = (e) => {
    setSelectedOption(e.target.id);
  };

  return (
    <div className="flex flex-col relative pl-2">
      {/* Radio options */}
      <div className="relative z-10">
        <input
          checked={selectedOption === 'radio-free'}
          onChange={handleChange}
          id="radio-free"
          name="radio"
          type="radio"
          className="appearance-none cursor-pointer absolute opacity-0"
        />
        <label
          htmlFor="radio-free"
          className={`cursor-pointer py-4 px-4 relative transition-all duration-300 ease-in-out ${
            selectedOption === 'radio-free' ? 'text-[#f7e479]' : 'text-gray-500'
          }`}
        >
          Free
        </label>

        <input
          checked={selectedOption === 'radio-basic'}
          onChange={handleChange}
          id="radio-basic"
          name="radio"
          type="radio"
          className="appearance-none cursor-pointer absolute opacity-0"
        />
        <label
          htmlFor="radio-basic"
          className={`cursor-pointer py-4 px-4 relative transition-all duration-300 ease-in-out ${
            selectedOption === 'radio-basic' ? 'text-[#f7e479]' : 'text-gray-500'
          }`}
        >
          Basic
        </label>

        <input
          checked={selectedOption === 'radio-premium'}
          onChange={handleChange}
          id="radio-premium"
          name="radio"
          type="radio"
          className="appearance-none cursor-pointer absolute opacity-0"
        />
        <label
          htmlFor="radio-premium"
          className={`cursor-pointer py-4 px-4 relative transition-all duration-300 ease-in-out ${
            selectedOption === 'radio-premium' ? 'text-[#f7e479]' : 'text-gray-500'
          }`}
        >
          Premium
        </label>
      </div>

      {/* Glider container */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1b1b1b] to-transparent">
        <div
          className="relative w-full"
          style={{
            height: `calc(100% / ${totalOptions})`,
            transform: `translateY(${
              selectedOption === 'radio-free' ? 0 : 
              selectedOption === 'radio-basic' ? '100%' : '200%'
            })`,
            transition: 'transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56)',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #f7e479 50%, rgba(0, 0, 0, 0) 100%)'
          }}
        >
          <div
            className="absolute h-[60%] w-[300%] top-1/2 -translate-y-1/2 bg-[#f7e479] blur-[10px]"
            style={{ left: '-100%' }}
          ></div>
          <div
            className="absolute left-0 h-full w-[150px]"
            style={{
              background: 'linear-gradient(90deg, #f7e4791c 0%, rgba(0, 0, 0, 0) 100%)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RadioSelector;