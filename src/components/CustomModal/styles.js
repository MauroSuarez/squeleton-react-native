import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		padding: 10,
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    display: 'flex',
	},
	input: {
    height: 40,
    borderWidth: 1,
    marginTop: '10px',
    marginBottom: '30px'
	},
	textarea: {
    height: 80,
    borderWidth: 1,
    marginTop: '10px',
    marginBottom: '30px'
	},
	flatlist: {
		marginTop: '25px',
	},
	titleHome: {
		fontWeight: 'light',
		display: 'flex',
		fontSize: '15px',
		justifyContent: 'center'
	},
	containerModal: {
		padding: 10,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
		display: 'flex',
		backgroundColor: '#fff'
	},
	text: {
		fontWeight: "bold",
		fontSize: 30,
		marginBottom: '40px'
	},
	listContainer: {
		paddingTop: 20
	},
	listItem: {
		fontSize: '10px'
	},
	buttonLoggin: {
    padding: '10px',
		marginTop: '100px',
		alignSelf: 'stretch'
	},
	listContainer: {
		paddingTop: 20
	},
	listItem: {
		fontSize: 20
	},
	separator: {
		borderColor: '#eee',
    borderWidth: 1,
	},
	fixToButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	fixToText: {
    flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: '5px',
		height: '40px'
	},
	fixToTextItem: {
    flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '5px',
		height: '40px'
	},
})