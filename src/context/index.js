import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  setToken: () => console.log("test")
});

export const AppContextProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [totalAmmount, setTotalAmmount] = useState(0);
  return (
    <AppContext.Provider value={{
      token,
      setToken,
      totalAmmount,
      setTotalAmmount
    }}>
			{children}
		</AppContext.Provider>
  );
}

export const AppContextConsumer = AppContext.Consumer;