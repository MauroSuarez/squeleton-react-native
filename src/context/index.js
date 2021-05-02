import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({children}) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [token, setToken] = useState('');
  return (
    <AppContext.Provider value={{
      username,
      setUsername,
      password,
      setPassword,
      token,
      setToken
    }}>
			{children}
		</AppContext.Provider>
  );
}

export const AppContextConsumer = AppContext.Consumer;