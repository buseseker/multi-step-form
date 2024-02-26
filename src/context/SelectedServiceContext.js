import React, { createContext, useState } from 'react';

export const SelectedServiceContext = createContext();

const SelectedServiceProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState('yearly');
  const [selectedPrice, setSelectedPrice] = useState({});
  const [selectedAddOnPrices, setSelectedAddOnPrices] = useState({});

  return (
    <SelectedServiceContext.Provider value={{ selectedPlan, setSelectedPlan, selectedCard, setSelectedCard, selectedAddOns, setSelectedAddOns, selectedPrice, setSelectedPrice, selectedAddOnPrices, setSelectedAddOnPrices }}>
      {children}
    </SelectedServiceContext.Provider>
  );
};

export default SelectedServiceProvider;
