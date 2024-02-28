import React, { createContext, useState } from 'react';
import iconAdvanced from '../assets/images/icon-advanced.svg';
import iconArcade from '../assets/images/icon-arcade.svg';
import iconPro from '../assets/images/icon-pro.svg';

export const SelectedServiceContext = createContext();

const SelectedServiceProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState({ id: '', type: 'yearly' });

  const plans = [
    { id: '1', name: 'Arcade', yearly: 90, monthly: 9, icon: iconArcade },
    { id: '2', name: 'Advanced', yearly: 120, monthly: 12, icon: iconAdvanced },
    { id: '3', name: 'Pro', yearly: 150, monthly: 15, icon: iconPro },
  ];

  const addOns = [
    { id: '1', name: 'Online Service', description: 'Access to multiplayer games', yearly: 10, monthly: 1 }, // Eklenti ID'sine göre fiyatları tutar
    { id: '2', name: 'Larger Storage', description: 'Extra 1TB of cloud save', yearly: 20, monthly: 2 },
    { id: '3', name: 'Customizable Profile', description: 'Custom theme on your profile', yearly: 20, monthly: 2 },
  ];

  return (
    <SelectedServiceContext.Provider value={{ selectedPlan, setSelectedPlan, selectedCard, setSelectedCard, selectedAddOnIds, setSelectedAddOnIds, addOns, plans }}>
      {children}
    </SelectedServiceContext.Provider>
  );
};

export default SelectedServiceProvider;
