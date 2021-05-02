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

/*
<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<authContext.Consumer>
			{user => (
				<dl>
					<dt>Title:</dt>
					<dd>{user.username}</dd>
					<dt>Artist:</dt>
					<dd>{user.password}</dd>
					<dt>Genre:</dt>
				</dl>
			)}
		</authContext.Consumer>
		</View>
*/