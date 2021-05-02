import { StyleSheet } from "react-native"
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerWrapper = styled(DatePicker)`
  display: flex;
  height: 30px !important;
  font-weight: normal !important;
  font-style: normal !important;
  font-size: 15px !important;
  border: 0px !important;
	width: 96% !important;
	border: solid 1px !important;
	margin-bottom: 40px !important;
	padding: 5px !important;
`;

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
		marginBottom: '30px',
		padding: '5px'
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
		fontSize: '10px',
		textAlign: 'left'
	},
	buttonLoggin: {
    padding: '10px',
		marginTop: '100px',
		alignSelf: 'stretch'
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