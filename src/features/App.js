import React from "react"
import InitialRouter from '../navigation/router';
import { AppContextProvider } from '../context'

const App = () => {
	return (
		<AppContextProvider>
			<InitialRouter isLoggedIn={false} />
		</AppContextProvider>
	)
}

export default App