import React, { useState } from 'react';

const Form = () => {
  const [inputs, setInputs] = useState([{ text: '', time: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);

    const isCurrentInputFilled = newInputs[index].text && newInputs[index].time;

    if (isCurrentInputFilled && index === inputs.length - 1) {
      setInputs([...newInputs, { text: '', time: '' }]);
    }
  };

  const handleRemoveClick = (index) => {
    if (inputs.length > 1) {
      const newInputs = inputs.filter((_, i) => i !== index);
      setInputs(newInputs);
    }
  };

  return (
    <div className='bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4'>
      <h1 className='text-4xl font-bold text-white mb-8'>Daily Reminder</h1>
      <form className='w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg'>
        {inputs.map((input, index) => (
          <div key={index} className='flex flex-col mb-4'>
            <div className='flex items-center gap-4 mb-4'>
              <input
                type='text'
                name='text'
                value={input.text}
                onChange={(event) => handleInputChange(index, event)}
                placeholder='Enter reminder'
                className='flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              />
              <input
                type='time'
                name='time'
                value={input.time}
                onChange={(event) => handleInputChange(index, event)}
                className='px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              />
              <button
                type='button'
                onClick={() => handleRemoveClick(index)}
                className='text-red-500 hover:text-red-700 focus:outline-none'
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Form;
