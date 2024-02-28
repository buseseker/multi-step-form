import React, { useContext } from 'react';
import { SelectedServiceContext } from '../../context/SelectedServiceContext';

const AddOnCard = ({ addOn }) => {
  const { selectedAddOnIds, setSelectedAddOnIds, selectedPlan } = useContext(SelectedServiceContext);

  const handleCheckBox = (id) => {
    if (selectedAddOnIds.includes(id)) {
      setSelectedAddOnIds(selectedAddOnIds.filter((addOnId) => addOnId !== id));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, id]);
    }
  };

  const isSelected = (card) => selectedAddOnIds.includes(card);

  return (
    <div className={`add-on flex justify-between items-center w-full border ${isSelected(addOn.id) ? 'border-violet-900 bg-indigo-50' : 'border-light-gray'} rounded-lg h-20 px-5`}>
      <div className='flex gap-x-5'>
        <label className='inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            className='form-checkbox border-gray-300 rounded-md w-5 h-5 accent-indigo-600 checked:border-transparent focus:ring-blue-400'
            checked={isSelected(addOn.id)}
            onChange={() => handleCheckBox(addOn.id)}
          />
        </label>
        <div className='add-on-text'>
          <h5 className='text-marine-blue font-extrabold'>{addOn.name}</h5>
          <p className='text-cool-gray'>{addOn.description}</p>
        </div>
      </div>
      <div className='price'>
        <p>{selectedPlan.type === 'monthly' ? `+$${addOn.monthly}/mo` : `+$${addOn.yearly}/yr`}</p>
      </div>
    </div>
  );
};

export default AddOnCard;
